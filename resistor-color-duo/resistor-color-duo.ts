export function decodedValue(colors: string[]): number {
  return parseInt(
    colors
      .slice(0, 2)
      .map((color) => COLORS.indexOf(color))
      .join(""),
    10
  );
}

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
