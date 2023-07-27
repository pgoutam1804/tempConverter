function convertFunction() {
    let fromData = document.getElementById('from').value; 
    console.log(fromData);
    let toData = document.getElementById('to').value; 
    console.log(toData);
    let num = Number(document.getElementById('num').value); 
    console.log(num);
    console.log(typeof(num));
    let result = document.getElementById('result'); 
    var r;
    if(fromData == 'no_select' || toData == 'no_select'){
        alert("Please select the appropriate option");
        r = '';
    }
    else if(fromData == toData){
        r = num;
    }
    else if(fromData == 'celsius'){
        if(toData == 'fahrenheit'){
            r = (num*(9/5))+32;
        }else{
            r = (num+273.15);
        }
    }
    else if(fromData == 'fahrenheit'){
        if(toData == 'celsius'){
            r = (num-32)*(5/9);
        }else{
            r = (num + 459.67)*(5/9);
        }
    }
    else {
        if(toData == 'celsius'){
            r = (num - 273.15);
        }else{
            r = (num*(9/5))-459.67;
        }
    }
    result.innerHTML=r.toFixed(2);
} 
function clean() {
    let result = document.getElementById('result'); 
    result.innerHTML='';
}