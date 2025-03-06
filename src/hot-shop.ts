import { filter } from 'remeda'
import { YearMonthTuple } from './time'
import { generateChallenge } from './anti-honeypot.ts'

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
      'x-honey-pot': 'i-also-see-you!',
      // Required, instantly gives 403 if missing
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    },
  })

  if (!response.ok) {
    console.error(`Failed to fetch availability for ${year}-${month}: ${response.status} ${response.statusText}`)
    return {
      year,
      month,
      data: [],
    }
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
