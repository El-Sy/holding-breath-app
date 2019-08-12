export const setNumberSpacing = number => {
  let stringifyNumber = JSON.stringify(number);
  const numberOfSpacing = stringifyNumber.length / 3;
  let newNumber = "";

  for (let i = 0; i < numberOfSpacing; i++) {
    let second_position = i - 1 - i * 3;
    let first_position = second_position - 3;
    newNumber = newNumber.replace(
      /^/,
      `${
        i !== Math.ceil(numberOfSpacing - 1) ? " " : ""
      }${stringifyNumber.slice(first_position, second_position)}`
    );
  }
  return newNumber;
};
