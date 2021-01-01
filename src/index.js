let leftPad;
try {
  leftPad = require("left-pad");
} catch (e) {}
console.log("Hello");
console.log(
  "Do I have left-pad installed?",
  leftPad !== undefined ? "Yes!" : "No!"
);
if (leftPad !== undefined) {
  console.log("Let's use it!", leftPad("This is a padded string", 10));
}
