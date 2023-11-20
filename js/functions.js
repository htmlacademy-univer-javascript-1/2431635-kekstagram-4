const MINUTES_IN_HOUR = 60;

const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength('asdfghjkl', 12);

function isPalindrome (inputString) {
  const str = inputString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome('ШАЛАШ');

function validateMeeting(startTime, endTime, meetingStart, meetingDuration) {
  const startOfWorkday = parseTime(startTime);
  const endOfWorkday = parseTime(endTime);
  const startOfMeeting = parseTime(meetingStart);
  const endOfMeeting = addMinutes(startOfMeeting, meetingDuration);

  if (startOfMeeting < startOfWorkday || endOfMeeting > endOfWorkday) {
    return false;
  }

  return true;
}

function parseTime(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * MINUTES_IN_HOUR + minutes;
}

function addMinutes(time, minutes) {
  return time + minutes;
}

validateMeeting('08:00', '17:30', '14:00', 90);
