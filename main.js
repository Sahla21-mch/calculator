const buttons = document.querySelector('.calculator-grid');
const output = document.querySelector('.current-operand');
let val = 0;

buttons.forEach(button => {
    
    button.addEventListener('click', function(event) {
        const cal = event.currentTarget.classList;
        console.log(cal);
        if (cal.contains('button')){
            const val = cal.innerHTML;
        }
        output.innerHTML = val;
    })
});
