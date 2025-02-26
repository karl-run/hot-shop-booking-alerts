import { getMonth, getYear } from 'date-fns'
import { range } from 'remeda'

export type YearMonthTuple = [year: number, month: number]

export const MONTHS = [
  'januar',
  'februar',
  'mars',
  'april',
  'mai',
  'juni',
  'juli',
  'august',
  'september',
  'oktober',
  'november',
  'desember',
]

const MONTHS_TO_CHECK = 4

const now = new Date()
const currentMonth = getMonth(now)
const currentYear = getYear(now)

export const getMonthRange = () => range(currentMonth, currentMonth + MONTHS_TO_CHECK)

export const getMonthName = (month: number): string => MONTHS[month]

export function wrapYearMonthTuple(month: number): YearMonthTuple {
  if (month > 11) {
    return [currentYear + 1, month % 11]
  } else {
    return [currentYear, month]
  }
}
