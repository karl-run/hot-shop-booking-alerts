import { filter } from "./deps.ts";
import { YearMonthTuple } from "./time.ts";

type ResponseData = { date: string; available: boolean };

export async function getAvailabilityForMonth([
  year,
  month,
]: YearMonthTuple): Promise<{
  year: number;
  month: number;
  data: ResponseData[];
}> {
  console.info(`Checking for month ${month} in ${year}`);
  const response = await fetch(createUrl(year, month));

  if (!response.ok) {
    console.error(
      `Failed to fetch availability for ${year}-${month}: ${response.status} ${response.statusText}`,
    );
    return {
      year,
      month,
      data: [],
    };
  }

  return {
    year,
    month,
    data: filter(
      (await response.json()).data as ResponseData[],
      (it) => it.available,
    ),
  };
}

function createUrl(year: number, month: number) {
  return `https://api-gx.superbexperience.com/availability/dates?restaurant=5ba3a4d66c8c209e5510a1bc&online=true&month=${month}&year=${year}&guests=2`;
}
