
//finding button elements and creating constant variable witn references on them
const btnRefs = {"start": document.querySelector("[data-start]"),"stop": document.querySelector("[data-stop]")};

console.log(btnRefs.start);
console.log(btnRefs.stop);

//add event listiners on buttons
btnRefs.start.addEventListener('click', clickBtnStartHandler);
btnRefs.stop.addEventListener('click', clickBtnStopHandler);



const bodyColorChange = () => {document.body.style.backgroundColor = getRandomHexColor();};

//definitions of handlers
let colorInt;
function clickBtnStartHandler() {
    btnRefs.start.disabled = true;
    colorInt = setInterval(bodyColorChange, 1000);
    
};

function clickBtnStopHandler() {
    
    //btnRefs.start.removeEventListener('click', clickBtnStartHandler);
    btnRefs.start.disabled = false;
    clearInterval(colorInt);
};



//definition of random hex color generator
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
