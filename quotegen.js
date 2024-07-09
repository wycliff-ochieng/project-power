//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:"The journey of a thousand miles starts with one step",
    person:`Wycliff Ochieng`
},{
    quote:"Remember that some times not getting what you want is a sign of luck",
    person:`Ochorokodi Fanuel`
},{
    quote:"Our lives begin to end the moment we remain silent on the things that matters",
    person:`Martin Luther Jr`
},{
    quote:"Trust your insticts rather than your intellect",
    person:"Cilian MUrphy"
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;

    person.innerText = quotes[random].person;
})