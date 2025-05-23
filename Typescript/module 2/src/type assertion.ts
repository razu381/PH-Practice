function kgTOGram(kg: number | string): number | string | undefined {
  if (typeof kg === "number") {
    return kg * 1000;
  }
  return parseFloat(kg) * 1000;
}

let num1 = kgTOGram(11) as number;
let num2 = kgTOGram(13) as string;
