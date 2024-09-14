const parseDate = (date: string) => {
  const dateObj = new Date(date);
  return `${dateObj.getDay()} ${dateObj.toLocaleString('id', { month: 'long'})} ${dateObj.getFullYear()}`;
}

export default parseDate;