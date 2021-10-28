const truncate = (string: string) => {
  const truncatedString = string.substring(0, 79) + "...";
  return truncatedString;
}

export default truncate;