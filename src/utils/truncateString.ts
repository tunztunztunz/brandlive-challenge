const truncateString = (string: string) => {
  if(typeof string !== 'string') {
    return null;
  }
  if(string.length < 79) {
    return string;
  }
  const truncatedString = string.substring(0, 79) + "...";
  return truncatedString;
};

export default truncateString;