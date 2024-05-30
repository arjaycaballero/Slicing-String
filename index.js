// Programmers always count from zero 0.

var name = "Arjay"
var myName = name.slice(0,3);
console.log(myName);

// .slice is a function that can exclude the characters.
// slice(x,y) x start y finish.

var tweet = prompt("Compose Text Here");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);
