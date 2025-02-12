let form =document.querySelector('form')

let heightSelect = document.querySelector("#heightUnit");
let weightSelect = document.querySelector("#weightUnit");

let condition1 = false;
let condition2 = false;

heightSelect.addEventListener("change", function () {
    condition1 = heightSelect.value === "ft"; 
});

weightSelect.addEventListener("change", function () {
    condition2 = weightSelect.value === "lb";
});



form.addEventListener('submit',function (e){
    e.preventDefault();

    let height= parseFloat(document.querySelector("#height").value)
    let weight= parseFloat(document.querySelector("#weight").value)

    let result = document.querySelector("#result")

    if (condition1){
        height=height*0.3048
    }
    if (condition2){
        weight=weight*0.453592
    }

    if (height=="" || height<0 || isNaN(height)){
        result.innerHTML=`Please enter a valid Height`
    }else if(weight=="" || weight<0 || isNaN(weight)){
        result.innerHTML=`Please enter a valid Weight`
    }else{
        let bmi=(weight/(height*height)).toFixed(2)

        if (bmi<18.5){
            result.innerHTML=`${bmi} (underweight)`
        }else if(bmi<25){
            result.innerHTML=`${bmi} (Healthy)`
        }else if(bmi<30){
            result.innerHTML=`${bmi} (Overweight)`
        }else{
            result.innerHTML=`${bmi} (Obesity)`
        }
    }

})