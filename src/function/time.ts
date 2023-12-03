export function postedTimeAgo(dateString?: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);
  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return `Posted ${Math.round(secondsPast)} seconds ago`;
  }
  if (secondsPast < 3600) {
    return `Posted ${Math.round(secondsPast / 60)} minutes ago`;
  }
  if (secondsPast <= 86400) {
    return `Posted ${Math.round(secondsPast / 3600)} hours ago`;
  }
  if (secondsPast > 86400) {
    const days = Math.round(secondsPast / 86400);
    return `Posted ${days} days ago`;
  }
  return "";
}

export function getMonthDate(date: string): string {
  if (!date) {
    return "";
  }

  const currentDate = new Date();
  const inputDate = new Date(date);

  const today = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const yesterday = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - 1
  );

  if (inputDate.toDateString() === today.toDateString()) {
    return "Today";
  } else if (inputDate.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  } else {
    const month = inputDate.toLocaleString("default", { month: "short" });
    const day = inputDate.getDate();
    return `${month} ${day}`;
  }
}

export function getHourMinuteMeridian(isoFormat?: string): string {
  if (!isoFormat) {
    return "";
  }

  const date = new Date(isoFormat);
  if (isNaN(date.getTime())) {
    return "";
  }

  const hour = date.getHours();
  const minute = date.getMinutes();
  const meridian = hour >= 12 ? "PM" : "AM";

  const formattedHour = hour % 12 || 12;
  const formattedMinute = minute.toString().padStart(2, "0");

  return `${formattedHour}:${formattedMinute} ${meridian}`;
}
