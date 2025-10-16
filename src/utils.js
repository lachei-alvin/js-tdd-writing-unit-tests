// Your code here
export function pointsForWord(word) {
  if (typeof word !== "string") return 0; // handle invalid input
  let points = 0;

  for (const char of word.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      points += /[aeiou]/.test(char) ? 1 : 2;
    }
  }

  return points;
}
