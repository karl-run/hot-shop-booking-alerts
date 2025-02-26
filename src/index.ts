import { filter, flatMap, map, pipe } from 'remeda'
import { postToSlack } from './slack'
import { getAvailabilityForMonth } from './hot-shop'
import { getMonthName, getMonthRange, wrapYearMonthTuple } from './time'

const availabilityPerMonth = await Promise.all(
  pipe(getMonthRange(), map(wrapYearMonthTuple), map(getAvailabilityForMonth)),
)

const availability: string[] = pipe(
  availabilityPerMonth,
  filter((it) => it.data.length > 0),
  flatMap((availability) =>
    availability.data.map(
      (day) => `${day.date}. ${getMonthName(availability.month)} har ledige bord for 4 personer på Hot Shop!`,
    ),
  ),
)

if (availability.length > 0) {
  await postToSlack(availability)
  console.info('Availability found, posted to Slack')
  process.exit(0)
} else {
  console.info('No availability found')
  process.exit(0)
}
