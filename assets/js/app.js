
function calc(){
    let mass = +massInput.value;
    let height = +heihgtInput.value;
    if (height>=3){
        height = height/100;
    }
    index = mass / (height * height);   
console.log(index);
    if (index < 16) {
       diagnosis = ('Выраженный дефицит массы тела');
    }else if (16 <= index && index < 18.5){
       diagnosis = ("Недостаточная (дефицит) масса тела");
    }else if (18.5 <= index && index < 25){
        diagnosis = ("Норма") ;
    }else if (25 <= index && index< 30){
       diagnosis = ("Избыточная масса тела (предожирение)");
    }else if (30 <= index && index< 35){
        diagnosis = ("Ожирение 1 степени");
    }else if (35 <= index && index < 40){
      diagnosis = ("Ожирение 2 степени");
    }else{
      diagnosis = ("Ожирение 3 степени");
    }
    index = Math.round (index);
    resultPlace.innerHTML = diagnosis;
    index.innerHTML = index;
    console.log(index);
    
}

