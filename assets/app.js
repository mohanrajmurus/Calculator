const calculator = document.querySelector(".calculator");
const keys = document.querySelector('.calculator-keys');
const display = document.querySelector(".calculator-display");



keys.addEventListener('click', (e) =>{
    const key = e.target;
    const action = key.dataset.action;
    const key_value = key.textContent;
    const displayedNum = display.textContent;
    
    if (action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'||
    action === 'sqroot' ||
    action === 'cuberoot'||
    action === 'percentage'
    ) 
    {
    if(key_value === '√')
            display.textContent = key_value;
    else if(key_value === '∛')
            display.textContent = key_value;
    else
        display.textContent = display.textContent + key_value;
    } else if (action === 'clear'){
            display.textContent = '0';
    } else if(action === 'decimal'){
        display.textContent = displayedNum + '.';
    } else if (action === 'calculate'){
        let firtNum;
        let operator;
        let secNum;
        for (let i = 0; i < displayedNum.length; i++) {
                if(isNaN(displayedNum[i])) {
                   operator = displayedNum[i];
                   firtNum = Number(displayedNum.slice(0,i));
                   secNum = Number(displayedNum.slice(i+1,displayedNum.length));
                }
            
        }
        display.textContent = calculate(firtNum,operator,secNum)
    } else {
        if(displayedNum === '0'){
            display.textContent = key_value;
        }
        else 
            display.textContent = display.textContent + key_value; 
    }
});


function calculate(n1,op,n2){
    if(op === '÷')
        return (n1/n2).toFixed(3);
    if(op === '×')
        return n1*n2;
    if(op === '+')
        return n1+n2;
    if(op === '-')
        return n1-n2;
    if(op === '%')
        return n1%n2;
    if(op === '√')
        return Math.sqrt(n2);
    if(op === '∛')
        return Math.cbrt(n2);
}