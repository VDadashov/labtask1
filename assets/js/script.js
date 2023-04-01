const addBtn = document.getElementById('plus');
const subtractBtn = document.getElementById('cixma');
const multiplyBtn = document.getElementById('vurma');
const divideBtn = document.getElementById('bolme');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('res');

function add(){
    if(num1.value && num2.value){
        let sum = `${Number(num1.value)+Number(num2.value)}`;
        result.value = sum;
        num1.value = '';
        num2.value = '';
    }else{
        alert("Deyeri yeniden daxil edin!");
    } 
};

function subtract(){
    if(num1.value && num2.value){
        let sub = `${Number(num1.value)-Number(num2.value)}`;
        result.value = sub;
        num1.value = '';
        num2.value = '';
    }else{
        alert("Deyeri yeniden daxil edin!");
    }
}

function multiply(){
    if(num1.value && num2.value){
        let mul = `${Number(num1.value)*Number(num2.value)}`;
        result.value = mul;
        num1.value = '';
        num2.value = '';
    }else{
        alert("Deyeri yeniden daxil edin!");
    }
}

function divide(){
    if(num1.value && num2.value && num2.value != 0){
        let div = `${Number(num1.value)/Number(num2.value)}`;
        result.value = div;
        num1.value = '';
        num2.value = '';
    }else if(num2.value == 0){
        alert("Sifir'a bolmek olmaz!");
    }else{
        alert("Deyeri yeniden daxil edin!")
    }

}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide)