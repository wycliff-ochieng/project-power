
//getting elements by id
//const title = document.getElementById('main-heading');
//console.log(title);

//get element by classname
//const listItems = document.getElementsByClassName('list-items');
//console.log(listItems);

//get elements by tagname
const listItems = document.getElementsByTagName('li');
console.log(listItems);

//query slector()-takes first 
//const container = document.querySelector('div');
//console.log(container);

//querySelectorAll()-takes all

//const title = document.querySelector('#main-heading');
//title.style.color = 'red';
//console.log(title);

//creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li')

ul.append(li);

// adding elements


//modifying elements

li.innerText = 'X-men';

// modify attributes
li.setAttribute('id','main-heading');
li.removeAttribute('id');


const title = document.querySelector('#main-heading')
console.log(title.getAttribute('id'));

li.remove();


//Event listeners

// element.addEventListener("click", function)

const buttonTwo = document.querySelector('#btn-s')

function alertBtn(){
    alert('I also love python');
};

buttonTwo.addEventListener("click", alertBtn);