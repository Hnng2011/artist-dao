export function truncate(str: string) {
  if (str?.length <= 6 || !str) {
    return str;
  }
  const start = str.slice(0, 6);
  const end = str.slice(-6);
  return `${start}...${end}`;
}
