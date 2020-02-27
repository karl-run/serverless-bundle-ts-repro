import { printValue } from "./other";

export const repro = async () => {
  console.log("Helloooooo");

  printValue()

  return {
    status: 200,
    body: JSON.stringify({ message: "Good" })
  };
};
