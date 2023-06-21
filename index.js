let var1 = document.querySelector('.var1');
let var2 = document.querySelector('.var2');
let sign = document.querySelector('.sign');
let variable1 = var1.textContent;
let variable2 = var2.textContent;
variable();
operator();

// setTimeout(() => {
//     console.log(varr+4);},5000)



function variable(){
    const btn = document.querySelectorAll('.number');
    let size = btn.length;
    for (let i=0; i<size; i++){
        btn[i].onclick = () => {
            variable1 = variable1 + btn[i].textContent;
            console.log(`Result is ${variable1}`);
        }
    }
};


function operator() {
    const oper = document.querySelectorAll('.operator');
    let size = oper.length;
    let operators = sign.textContent
    for (let i = 0; i< size; i++){
        oper[i].onclick = () => {
            operators = oper[i].textContent;
            console.log(operators)
            variable2 = variable1;
            variable1 = ' ';
            console.log(variable2);
        };
        }
}
