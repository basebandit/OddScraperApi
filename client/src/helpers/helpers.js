import moment from 'moment'

// Get Date
export function getTheDate (timestamp, format) {
  let formatDate = format || 'MMMM Do YYYY, hh:mm a'
  return moment(timestamp).format(formatDate)
}

// Convert Date To Timestamp
export function convertDateToTimeStamp (date, format) {
  let formatDate = format || 'YYYY-MM-DD'
  return moment(date, formatDate).unix()
}

/**
 * Text Truncate
 */
export function textTruncate (str, length, ending) {
  if (length == null) {
    length = 100
  }
  if (ending == null) {
    ending = '...'
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  } else {
    return str
  }
}
