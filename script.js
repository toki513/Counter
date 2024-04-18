const addButtonElement = document.getElementById('counterAdd')
const subButtonElement = document.getElementById('counterSubs')
const displayCount = document.getElementById('counter-display')

let total = 0;

const updateDisplay = () =>{
    
}

addButtonElement.addEventListener('click',()=>{
    total+=1;
})

subButtonElement.addEventListener('click',()=>{
    total-=1;
})