import { filter, flatMap, map, pipe } from "./deps.ts";
import { postToSlack } from "./slack.ts";
import { getAvailabilityForMonth } from "./hot-shop.ts";
import { getMonthName, getMonthRange, wrapYearMonthTuple } from "./time.ts";

const availabilityPerMonth = await Promise.all(
  pipe(
    getMonthRange(),
    map(wrapYearMonthTuple),
    map(getAvailabilityForMonth),
  ),
);

const availability: string[] = pipe(
  availabilityPerMonth,
  filter((it) => it.data.length > 0),
  flatMap((availability) =>
    availability.data.map(
      (day) =>
        `${day.date}. ${
          getMonthName(
            availability.month,
          )
        } har ledige bord på Hot Shop!`,
    )
  ),
);

if (availability.length > 0) {
  await postToSlack(availability);
  console.info("Availability found, posted to Slack");
  Deno.exit(0);
} else {
  console.info("No availability found");
  Deno.exit(0);
}
