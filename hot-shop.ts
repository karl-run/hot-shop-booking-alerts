import { filter } from "./deps.ts";

type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ResponseData = { date: string; available: boolean };

function createUrl(year: number, month: Month) {
  return `https://api-gx.superbexperience.com/availability/dates?restaurant=5ba3a4d66c8c209e5510a1bc&online=true&month=${month}&year=${year}&guests=2`;
}

export async function getAvailabilityForMonth(
  year: number,
  month: Month
): Promise<{
  year: number;
  month: Month;
  data: ResponseData[];
}> {
  console.info(`Checking for month ${month} in ${year}`);
  const response = await fetch(createUrl(year, month));

  if (!response.ok) {
    console.error(
      `Failed to fetch availability for ${year}-${month}: ${response.status} ${response.statusText}`
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
      (it) => it.available
    ),
  };
}
