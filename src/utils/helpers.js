export function isObject(item) {
  return Object.prototype.toString.call(item) === "[object Object]";
}

export function getPercentage(count, total) {
  return total === 0 ? 0 : parseInt(count / total * 100, 10);
}

export function getTextKeys() {
  return ["aText", "bText", "cText", "dText"];
}

export function getVotedKeys() {
  return ["aVotes", "bVotes", "cVotes", "dVotes"];
}
