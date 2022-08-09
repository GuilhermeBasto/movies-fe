export const titleCase = (str: string): string =>
  str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
