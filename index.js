let var1;
    const btn = document.querySelectorAll('.number');
    let size = btn.length;
    for (let i=0; i<size; i++){
        btn[i].onclick = () => {
            var1 = btn[i].textContent;
            console.log(var1);
        }
    }

