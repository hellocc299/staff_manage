import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD'

export function utcDateFormat(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  // 使用 UTC 模式来解析和展示时间
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
