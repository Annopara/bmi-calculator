
document.querySelector('#caculate').addEventListener('click', trial)


let bmi = 0;


function trial(){
  const feh = document.querySelector('#height').value
  const wei = document.querySelector('#weight').value

  bmi = (wei / ( (feh * feh) / 10000 )).toFixed(2);
  // (wei / (feh * feh) / 10000). toFixed(2);

  document.querySelector('#output').innerText = bmi

  if (bmi < 18.5){
            document.querySelector('#comment'). innerText ="Underweight"
        } else if ( bmi >= 18.5 && bmi <= 24.9  ) {
            document.querySelector('#comment'). innerText = "Normal"
        } else if ( bmi >= 25 && bmi <= 29.9 ){
            document.querySelector('#comment'). innerText = "Overweight"
        } else{
            document.querySelector('#comment').innerText = "obese"
        }
}

// (wei / ( (hei * hei) / 10000 )).toFixed(2);
































// document.getElementById('caculate').addEventListener('click', cal)

// function cal(){
//     let bmi = 0

//     let wei = document.querySelector('#weight').value
//     let hei = document.querySelector('#height').value

//     bmi = (wei / ( (hei * hei) / 10000 )).toFixed(2);

//     document.querySelector('#output').innerText = bmi
   
//     if (bmi < 18.5){
//         document.querySelector('#comment'). innerText ="Underweight"
//     } else if ( bmi >= 18.5 && bmi <= 24.9  ) {
//         document.querySelector('#comment'). innerText = "Normal"
//     } else if ( bmi >= 25 && bmi <= 29.9 ){
//         document.querySelector('#comment'). innerText = "Overweight"
//     } else{
//         document.querySelector('#comment').innerText = "obese"
//     }

// }






















// document.getElementById('caculate').addEventListener('click', bmiCal)

// let bmi = 0;

// // function bmiCal() {
// //     let wei = document.querySelector('#weight').value
// //     let hei = document.querySelector('#height').value
// //     let result = document.querySelector('#comment').value

// //     bmi = (wei / ( (hei * hei) / 10000 )).toFixed(2);

// //     document.querySelector('#output').innerText = bmi ;


// //     if (bmi < 18.5){
// //         document.querySelector('#comment'). innerText ="Underweight"
// //     } else if ( bmi >= 18.5 && bmi <= 24.9  ) {
// //         document.querySelector('#comment'). innerText = "Normal"
// //     } else if ( bmi >= 25 && bmi <= 29.9 ){
// //         document.querySelector('#comment'). innerText = "Overweight"
// //     } else{
// //         document.querySelector('#comment').innerText = "obese"
// //     }




   








// function temp(){
//     let cel = document.querySelector('#celsius').value

//      cel =  cel * 9/5+ 32;
//     document.querySelector('#fahrenheit').innerText = cel;
// }


// (weight / ((height * height)
// / 10000)).toFixed(2)