const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");


const result = lines
  .map((line) => {
    const arr = line.split(" ");

    const direction = arr[0];
    const distance = parseInt(arr[1], 10);

    if (direction === "forward") {
      return {
        depth: 0,
        horizontal: distance,
      };
    } else {
      return {
        depth: direction === "down" ? distance : 0 - distance,
        horizontal: 0,
      };
    }
  })
  .reduce((accumulator, currentValue) => {
    accumulator.horizontal += currentValue.horizontal;
    accumulator.depth += currentValue.depth;

    return accumulator;
  });

console.log(result);

console.log('Distance: ' + result.depth * result.horizontal)