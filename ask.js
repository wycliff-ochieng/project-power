// key concepts will be:
//document.getElementaByClassNmae()
//addEventListener
//for loop 
//this
//class list.toggle

//variables
const accordion = document.getElementsByClassName('content-container');

for (i=0;i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
};