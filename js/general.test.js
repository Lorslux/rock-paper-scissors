const isPlayer1Winner = require("./general");

test("rock beats scissors", () => {
  expect(isPlayer1Winner("rock", "scissors")).toBe(true);
});

test("scissors beats paper", () => {
  expect(isPlayer1Winner("scissors", "paper")).toBe(true);
});

test("paper beats rock", () => {
  expect(isPlayer1Winner("paper", "rock")).toBe(true);
});

test("scissors lose against rock", () => {
  expect(isPlayer1Winner("scissors", "rock")).toBe(false);
});

test("rock lose against paper", () => {
  expect(isPlayer1Winner("rock", "paper")).toBe(false);
});

test("paper lose against scissors", () => {
  expect(isPlayer1Winner("paper", "scissors")).toBe(false);
});
