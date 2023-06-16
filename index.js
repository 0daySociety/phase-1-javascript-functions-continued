// code your solution here

function saturdayFun(mypar = "roller-skate") {
  return "This Saturday, I want to " + mypar + "!";
}

function mondayWork(myparr = "go to the office") {
  //for my testing console.log("This Monday, " + myparr);
  return "This Monday, I will " + myparr + ".";
}

function wrapAdjective(myparrr) {
  return function (myDefault = "Special") {
    if (myparrr =="*") {
        // for  testing  console.log(`You are ${myparrr}${myDefault}${myparrr}!`)
      return `You are ${myparrr}${myDefault}${myparrr}!`;
    } else if (myparrr == "||") {
        //for my testing console.log(`You are ${myparrr}${myDefault}${myparrr}!`)
      return `You are ${myparrr}${myDefault}${myparrr}!`;
    }
  };


}

//for my testing wrapAdjective("*")("good in farming")
// function wrapAdjective(myparrr) {

//   let myMessage;
//   if (myparrr === "*") {
//      function  result(parms) {
//       return "a hard worker";
//     }

//     myMessage =` You are ${myparrr}${result()}${myparrr}! `
//   }

// else if (myparrr==="||") {
//      function result() {
//         return "a dedicated programmer";
//       }

//       myMessage =`You are ${myparrr}${result()}${myparrr}!`

// }
// console.log(myMessage)
//   return myMessage;

// }

//console.log(result());

// wrapAdjective("*");
// wrapAdjective("||")

// mondayWork("i will");
