import { pipe, range, map, flatMap, filter, getMonth, getYear } from "./deps.ts";
import { postToSlack } from "./slack.ts";
import { getAvailabilityForMonth } from "./hot-shop.ts";

const MONTHS = [
  "januar",
  "februar",
  "mars",
  "april",
  "mai",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "desember",
];

const MONTHS_TO_CHECK = 4;

const now = new Date();
const currentMonth = getMonth(now);
const currentYear = getYear(now);

const monthsRange = range(currentMonth, currentMonth + MONTHS_TO_CHECK);
const monthResults = await Promise.all(
  pipe(
    monthsRange,
    map((it) => {
      if (it > 11) {
        return [currentYear + 1, it % 11];
      } else {
        return [currentYear, it];
      }
    }),
    map(([year, month]) => getAvailabilityForMonth(year, month))
  )
);

const availability = pipe(
  monthResults,
  filter((it) => it.data.length > 0)
);

if (availability.length > 0) {
  await postToSlack(
    flatMap(availability, (it) =>
      it.data.map(
        (day) => `${day.date}. ${MONTHS[it.month]} har ledige bord på Hot Shop!`
      )
    )
  );
} else {
  console.info("No availability found");
  Deno.exit(0);
}
