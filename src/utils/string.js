export function truncateByWords(str, numWords) {
  if (!str) return "";
  const words = str.trim().split(/\s+/);
  if (words.length <= numWords) return str;

  return words.slice(0, numWords).join(" ") + "...";
}
