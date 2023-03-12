// let num = Math.trunc( Math.random() * 6) +1;
// console.log(num);
let num = Math.trunc( Math.random() * 10) +1;
let inp = document.querySelector('.inp');
function fun(){
    let vh = inp.value;
    console.log(vh, num)
    let num_f = num;
    let score =  document.querySelector('.score').value;
    let record = [];
    if (vh < num_f)
    {
        console.log("О")
        document.querySelector('.min-max').innerHTML = "загаданное число больше";
        score =  document.querySelector('.score').value + 1;
    }
    else if (vh > num_f) 
    {
        console.log("Д")
        document.querySelector('.min-max').innerHTML = "загаданное число меньше";
        score =  document.querySelector('.score').value + 1;
    }
    else 
    {
        console.log("тТ")
        document.querySelector('.znak').value = num_f;
        score =  document.querySelector('.score').value + 1;
        record.push(score);
        document.querySelector('.record').value = Math.min(record);
    }
}



//score количество попыток угадывания
//record минимальное количество попыток которые потреповалось для угадывания
// let inp = document.querySelector('.chiki')
// inp.value = 'Moscow'
//document.querySelector('.chiki').value = "NSK";
// function fun(){
//     document.querySelector('.chiki').value = "NSK";
// }
// Math.ceil // up
// Math.floor // down
// Math.round // math
// Math.trunc // отбрасывание дробной части
// 5.32412.toFixed(2) // округление после точки