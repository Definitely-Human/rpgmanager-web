export const convertFromAPIStringToDate = (str: string) => {
  return new Date(str.substring(0, str.length - 1));
};

export const convertAPIDateToString = (str: string) => {
  const dateTime = convertFromAPIStringToDate(str);
  return `${dateTime.toLocaleDateString('en-gb', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })} ${dateTime.toLocaleTimeString('en-gb', {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
};
