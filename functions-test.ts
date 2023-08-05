import add, { getName } from "./functions";

console.log(getName({ first: "Hrishabh", last: "Jain" }));

type AddFunction = (a: number, b: number) => number;

const newAddFunc: AddFunction = (a: number, b: number) => a + b * 100;
console.log(newAddFunc(1, 2));

const showSum = (add: AddFunction): void => {
  const sum = add(1, 2);
  console.log(sum);
};

showSum(add);

// closure

type AdderFunc = (v: number) => number;

const create = (num: number): AdderFunc => {
  return (val: number): number => val + num;
};

const temp = create(1);
console.log(temp(5));
