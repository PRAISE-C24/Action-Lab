const { add } = require("./app");

const result = add(2, 3);

if (result !== 5) {
  throw new Error("Test failed");
}

console.log("Test passed");