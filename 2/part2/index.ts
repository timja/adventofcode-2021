const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const result = lines
  .map((line) => {
    const arr = line.split(" ");

    const direction = arr[0];
    const distance = parseInt(arr[1], 10);

    if (direction === "forward") {
      return {
        forward: true,
        depth: 0,
        horizontal: distance,
        aim: 0
      };
    } else {
      return {
        forward: false,
        depth: direction === "down" ? distance : 0 - distance,
        horizontal: 0,
        aim: direction === "down" ? distance : 0 - distance
      };
    }
  })
  .reduce((previousValue, currentValue) => {
    if (currentValue.forward) {
      previousValue.horizontal += currentValue.horizontal;
      previousValue.depth += currentValue.horizontal * (previousValue.aim + currentValue.aim);
    } else {
      previousValue.aim += currentValue.aim
    }
    return previousValue;
  });

console.log(result);

console.log('Distance: ' + result.depth * result.horizontal)

// answer: 1845455714