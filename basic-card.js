var inquirer = require('inquirer');

var Card = function(question, ansewer) {
  this.question = question;
  this.ansewer = ansewer;
};

var new_card = function(question, ansewer) {
  this.question = question;
  this.ansewer = ansewer;

  this.addCard = function(x, y) {
    this.quesion.push(new Card(x, y));
    this.ansewer.push(new Card(x, y));
  };
};
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your question?",
      name: "question"
    },
    {
      type: "input",
      message: "What is the ansewer"
      name: "ansewer"
    }
  ])
  .then(function(inquirerResponse.question) {

      if (inquirerResponse.question) {
        console.log("\n Your question is " + inquirerResponse.question);
      } else {
        console.log("No card added!");
      }
      .then(function(inquirerResponse.ansewer) {

        if (inquirerResponse.ansewer) {
          console.log("Your ansewer is " + inquirerResponse.ansewer);
        } else {
          console.log("No card added!");
        }

      });



      new_card.addCard('Card Added!!');

      console.log(new_card);

      module.export = Card;
