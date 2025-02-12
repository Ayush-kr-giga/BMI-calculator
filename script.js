let form =document.querySelector('form')

let heightSelect = document.querySelector("#heightUnit");
let weightSelect = document.querySelector("#weightUnit");

let condition1 = false;
let condition2 = false;

let h_meter= document.querySelector("#height")
let h_feet= document.querySelector("#height_feet")
let h_inch= document.querySelector("#height_inches")


heightSelect.addEventListener("change", function () {
    condition1 = heightSelect.value === "ft"; 
    if (condition1){
        h_meter.style.display='none';
        // console.log("positive 1")
        h_feet.style.display='inline-block';
        h_inch.style.display='inline-block';
    }else{
        h_meter.style.display='inline-block';
        h_feet.style.display='none';
        h_inch.style.display='none';
    }
});

// weightSelect.addEventListener("change", function () {
//     condition2 = weightSelect.value === "lb";
//     if (condition2){
//         let x= document.querySelector("#height")
//         x.style.transform='scale(0)';
//         console.log("positive 1")
//     }
// });



form.addEventListener('submit',function (e){
    e.preventDefault();
    let height;
    let weight= parseFloat(document.querySelector("#weight").value)

    let result = document.querySelector("#result")

    if (condition1){
        let f = parseFloat(h_feet.value) || 0;
        let i = parseFloat(h_inch.value) || 0;

        height = (f * 0.3048) + (i * 0.0254);
        console.log(height)
    }else{
        height = parseFloat(document.querySelector("#height").value)
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