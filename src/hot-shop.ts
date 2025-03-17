import { filter } from 'remeda'
import { getMonthName, YearMonthTuple } from './time'
import { generateChallenge } from './anti-honeypot.ts'
import { appendGha } from './gha.ts'

const restaurantId = '5ba3a4d66c8c209e5510a1bc'

type ResponseData = { date: string; available: boolean }

export async function getAvailabilityForMonth([year, month]: YearMonthTuple): Promise<{
  year: number
  month: number
  data: ResponseData[]
}> {
  console.info(`Checking for month ${month} in ${year} for ${Bun.env.GUESTS ?? '4'} guests`)
  const challenge = await generateChallenge(restaurantId)
  const response = await fetch(createUrl(year, month), {
    headers: {
      restaurant: restaurantId,
      // Required, seems to be the primary anti-snooping mechanism
      'x-challenge': challenge,
      // Not required, but is just the current date
      'x-latency': Date.now().toString(),
      // Not required, probably a fun easter egg for anyone trying to crack the challenge
      'x-honey-pot': "can't we just be friends?",
      // Required, instantly gives 403 if missing
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    },
  })

  if (!response.ok) {
    console.error(`Failed to fetch availability for ${year}-${month}: ${response.status} ${response.statusText}`)

    await appendGha(
      'Failed because of response',
      `${getMonthName(month)} (${year}) failed with ${response.status} ${response.statusText}`,
    )

    process.exit(1)
  }

  if (response.redirected) {
    console.error(`Seems like we hit honeypot, was redirected, URL is ${response.url}`)

    await appendGha('Failed because of honeypot', `Honeypot hit, redirected to ${response.url}`)

    process.exit(1)
  }

  return {
    year,
    month,
    data: filter((await response.json()).data as ResponseData[], (it) => it.available),
  }
}

function createUrl(year: number, month: number) {
  return `https://api-gx.superbexperience.com/availability/dates?restaurant=${restaurantId}&online=true&month=${month}&year=${year}&guests=${Bun.env.GUESTS ?? '4'}`
}
