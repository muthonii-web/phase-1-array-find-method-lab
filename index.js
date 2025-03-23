// code your solution here
function superbowlWin(record) {
  
  const win = record.find((game) => game.result === "W");

  if (win) {
    return win.year;
  }

  return undefined;
}

const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  { year: "2012", result: "L"}
];


console.log(superbowlWin(record)); 

const recordNoWin = [
  { year: "2015", result: "L"},
  { year: "2014", result: "L"},
  { year: "2013", result: "L"}
];
console.log(superbowlWin(recordNoWin)); 

