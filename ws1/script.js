const raw = " KaRl@Work.COM ";

const rawTrimmed = raw.trim().toLowerCase();

console.log(rawTrimmed);

const part = "Karl Erik Billy Jögen Lindgren";

const partList = part.split(" ");

console.log(partList);

console.log(partList[0]);
console.log(partList[partList.length - 1]);

const colors = ["red", "green", "blue"];

colors.push("yellow");
colors.pop();
console.log(colors);

colors.splice(colors.indexOf("green"), 1);

console.log(colors);

console.log(colors.includes("blue"));

const text = colors.join(", ");
console.log(text);

const newColors = text.split(", ");
console.log(newColors);
