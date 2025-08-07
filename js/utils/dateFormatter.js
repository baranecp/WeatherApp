export function dateFormatter(date) {
  const currentDate = new Date(date.replace(" ", "T")); // ensure it's ISO format

  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formatted = new Intl.DateTimeFormat("en-GB", options).format(
    currentDate
  );

  // Rearranging to match "16:10 - Thursday, 7 Aug ‘25"
  const [time, rest] = formatted.split(", ");
  const final = `${rest} - ${time} `;
  return final;
}
