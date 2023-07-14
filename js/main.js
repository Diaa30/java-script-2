var personQuote = document.getElementById("quote");
var personName = document.getElementById("person");
var quotesList = [
  {
    quote: "The best revenge is massive success.",
    person: "--Frank Sinatra",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "--Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    person: "--Albert Einstein",
  },
  {
    quote: "So many books, so little time.",
    person: "--Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    person: "--Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    person: "-- Mae West",
  },
];
// var max = quotesList.length;
// var min = 0;
function quote() {
  // const random = Math.floor(Math.random() * (max - min)) + min;
  const random = Math.floor(Math.random() * quotesList.length);
  personQuote.innerHTML = quotesList[random].quote;
  personName.innerHTML = quotesList[random].person;
  console.log(random);
}
