let var1 = document.querySelector('.var1');
let var2 = document.querySelector('.var2');
let sign = document.querySelector('.sign');
let equal = document.querySelector('.result');
let show = document.querySelector('#show');
let clear = document.querySelector('.clear')
const oper = document.querySelectorAll('.operator');


let variable1 = var1.textContent;
let variable2 = var2.textContent;
let operation = sign.textContent;

variable();
operator();
result();
disappear
();


function variable(){
    const btn = document.querySelectorAll('.number');
    equal.disabled = true;
    let size = btn.length;
    for (let j=0; j<4; j++){
        if (variable1.length<1){
            oper[j].disabled = true;
            }
    
        for (let i=0; i<size; i++){
            // PRINTING VALUE ON SCREEN AND A VARIABLE WHICH WILL BE USING TO PRODUCE RESULT.
            btn[i].onclick = () => {
                for (j=0;j<4;j++){
                    oper[j].disabled = false;
                }
                variable1 += btn[i].textContent;
                show.textContent = variable1;
                console.log(`Result is ${variable1}`);

                // MAKING SURE BOTH VARIABLES ARE TYPED BEFORE OPERATING
                if (variable1.length<1 || variable2.length<1){
                    equal.disabled =true;
                }
                else{equal.disabled = false;
                }
            }
            }
        }
};


function operator() {
    let size = oper.length;
    for (let i = 0; i< size; i++){
        oper[i].onclick = () =>{
            // If we select the operator again, the variable already stored will disappear. 
            // So added return to prevent that.
            if (operation.length==1){
                // alert("You have already selected an operator.")
                operation = oper[i].textContent;
                show.textContent = operation;
                console.log(operation)
                return;
            } 
            operation = oper[i].textContent;
            show.textContent = operation;
            console.log(operation)

            // Copying the variable1 value to different variable and clearing variable1 value as
            //  the function variable types values in variable1 only.
            variable2 = variable1;
            variable1 = '';
        };
        };
        };


function result(){
    equal.onclick = () =>{
       let result1 = Number(variable1);
       let result2 = Number(variable2);

       switch (operation) {
        case '+':
            console.log(result2 + result1);
            show.textContent = (result2 + result1);
            break;
        case '-':
            console.log(result2 - result1);
            show.textContent = (result2 - result1);
            break;   
        case '/':
            console.log(result2 / result1);
            show.textContent = (result2 / result1);
            break; 
        case '*':
            console.log(result2 * result1);
            show.textContent = (result2 * result1);
            break; 
        default:
            console.log("YOU ARE STUPID!!!")
            break;
       }
        variable1 ='';
        variable2 ='';
        operation = '';
        equal.disabled =true;

        // Disabling all the operators
        for (let j=0; j<4; j++){
            oper[j].disabled = true;
            }
    };}


function disappear() {
    clear.onclick = () => {
        variable1 = '';
        variable2 = '';
        operation = '';
        show.textContent = variable1;
        for (let j=0; j<4; j++){
            oper[j].disabled = true;
            }
    }
}
