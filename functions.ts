const add = (a: number, b: number): number => {
  return a + b;
};

const temp = [1, 2, "Hrishabh"].map((v) => v);
console.log(temp);

export const getName = (user: { first: string; last: string }): string => {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
};

export default add;
