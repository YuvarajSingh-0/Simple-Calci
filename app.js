import calc from './script.js';
let operand1=null;
let operand2=null;
let operator=null;

const App=(()=>{
    const updateDisplay=(value)=>{
        document.querySelector('#display').textContent=value;
    }

    const handleNumberClick=(e)=>{
        let number=e.target.textContent;
        console.log(number);
        if(operator==null){
            operand1=operand1==null?number:operand1 + number;
            updateDisplay(operand1);
        }
        else{
            operand2=operand2==null?number:operand2 + number;
            updateDisplay(operand2);
        } 

    }

    const handleOperatorClick=(e)=>{
        operator=e.target.textContent;
        console.log(operator);
    }

    const handleEqualClick=(e)=>{
        let result=0;
        console.log('Equal clicked');
        console.log(operand1,operand2,operator);
        if(operand1!=null && operand2!=null && operator!=null){
            switch(operator){
                case '+':
                    result=calc.add(operand1,operand2);
                    break;
                case '-':
                    result=calc.sub(operand1,operand2);
                    break;
                case '*':
                    result=calc.mul(operand1,operand2);
                    break;
                case '/':
                    result=calc.div(operand1,operand2);
                    break;
                default:
                    console.log('Invalid operator');
            }
            console.log(result);
            updateDisplay(result);
            operand1=result;
            operand2=null;
            operator=null;
        }
    }

    const clearCalculator=(e)=>{
        operand1=null;
        operand2=null;
        operator=null;
        updateDisplay(0);
    }

    return {
        handleOperatorClick,
        handleNumberClick,
        handleEqualClick,
        clearCalculator
    }
})();

document.querySelectorAll('.number').forEach((ele)=> ele.addEventListener('click',App.handleNumberClick));
document.querySelectorAll('.operator').forEach((ele)=> ele.addEventListener('click',App.handleOperatorClick));
document.querySelector('#equals').addEventListener('click',App.handleEqualClick);
document.querySelector('#clear').addEventListener('click',App.clearCalculator);



