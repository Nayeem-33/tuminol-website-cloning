let seconds = 10;

const calculateTime = (time) => {
  if (time >= 31536000) {
    let year = Math.floor(time / 31536000);
    return `${year} ${year <= 1 ? "year ago" : "years ago"}`;
  } else if (time >= 2628288) {
    let month = Math.floor(time / 2628288);
    return `${month} ${month <= 1 ? "month ago" : "months ago"}`;
  } else if (time >= 604800) {
    let week = Math.floor(time / 604800);
    return `${week} ${week <= 1 ? "week ago" : "weeks ago"}`;
  } else if (time >= 86400) {
    let day = Math.floor(time / 86400);
    return `${day} ${day <= 1 ? "day ago" : "days ago"}`;
  } else if (time >= 3600) {
    let hour = Math.floor(time / 3600);
    return `${hour} ${hour <= 1 ? "hour ago" : "hours ago"}`;
  } else if (time >= 60) {
    let minute = Math.floor(time / 60);
    return `${minute} ${minute <= 1 ? "minute ago" : "minutes ago"}`;
  } else {
    return `${time} ${time <= 1 ? "second ago" : "seconds ago"}`;
  }
};

let convertedTime = calculateTime(seconds);

console.log(convertedTime);
