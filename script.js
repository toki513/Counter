const addButtonElement = document.getElementById('counterAdd')
const subButtonElement = document.getElementById('counterSubs')
const displayCount = document.getElementById('counter-display')

let total = 0;
const limit = 25;

const updateDisplay = () =>{
    if(total > limit){
        total= limit
    }
    if(total < 0){
        total = 0
    }
    displayCount.textContent = total;
document.body.style.setProperty('background-color',`rgb(${(total/limit) * 255}, 64, 0)`)
}

addButtonElement.addEventListener('click',()=>{
    total+=1;
    updateDisplay();

})

subButtonElement.addEventListener('click',()=>{
    total-=1;
    updateDisplay();
})