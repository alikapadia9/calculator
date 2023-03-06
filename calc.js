let ans;
let num1, num2, opt;
let isOperatorClick = false;
function btnclick(value){
    if(isOperatorClick){
        num2 = value;
    } else{

    num1 = value;
    }
    console.log('num1', num1);
    console.log('num2', num2);
}
function optclick(operator){
    isOperatorClick = true;
    opt = operator;
    console.log(operator);
}
function eqlclick(){
    let span = document.querySelector('#ans')
    if(opt == '+'){
        ans = num1 + num2;
    }else if(opt == '-'){
        ans= num1 - num2;
    }else if(opt == '*'){
        ans = num1 * num2;
    }else {
        ans = num1 / num2;
    }
    console.log(ans);
    span.textContent = ans;
}
function resetclick(){
   isOperatorClick = false ;
   ans =0; num1 = 0; num2 = 0;

}