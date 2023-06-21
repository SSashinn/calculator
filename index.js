let var1 = document.querySelector('.var1');
let var2 = document.querySelector('.var2');
let sign = document.querySelector('.sign');
let equal = document.querySelector(".result");


let variable1 = var1.textContent;
let variable2 = var2.textContent;
let operation = sign.textContent;

variable();
operator();
result();


function variable(){
    const btn = document.querySelectorAll('.number');
    equal.disabled = true;
    let size = btn.length;
    for (let i=0; i<size; i++){
        btn[i].onclick = () => {
            variable1 = variable1 + btn[i].textContent;
            console.log(`Result is ${variable1}`);
            if (variable1.length<1 || variable2.length<1){
                equal.disabled =true;
            }
            else{equal.disabled = false;
            }
        }
    }
};


function operator() {
    const oper = document.querySelectorAll('.operator');
    let size = oper.length;
    for (let i = 0; i< size; i++){
        oper[i].onclick = () => {
            operation = oper[i].textContent;
            console.log(operation)
            variable2 = variable1;
            variable1 = '';
            // console.log(variable2);
        };
        };}


function result(){
    equal.onclick = () =>{
       let result1 = Number(variable1);
       let result2 = Number(variable2);
       switch (operation) {
        case '+':
            console.log(result2 + result1)
            break;
        case '-':
            console.log(result2 - result1)
            break;   
        case '/':
            console.log(result2 / result1)
            break; 
        case '*':
            console.log(result2 * result1)
            break; 
        default:
            console.log("YOU ARE STUPID!!!")
            break;
       }
        variable1 ='';
        variable2 ='';
        equal.disabled =true;
    };}
