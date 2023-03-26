// let num = Math.trunc( Math.random() * 6) +1;
// console.log(num);

let num = Math.trunc( Math.random() * 10) +1;
let inp = document.querySelector('.inp');
let score = document.querySelector('.red_score');
let record = document.querySelector('.red_record');;
function fun(){
    let vh = inp.value;
    console.log(vh, num)
    let score_f = Number(score.innerHTML);
    if (vh < num)
    {
        document.querySelector('.min-max').innerHTML = "загаданное число больше";
        score_f += 1;
        score.innerHTML = score_f;
    }
    else if (vh > num) 
    {
        document.querySelector('.min-max').innerHTML = "загаданное число меньше";
        score_f += 1;
        document.querySelector('.red_score').innerHTML = score_f;
    }
    else
    {
        document.querySelector('.znak').innerHTML = num;
        score_f += 1;
        document.querySelector('.red_score').innerHTML = score_f;
        if (record.innerHTML == "0"){
            record.innerHTML = score_f;
        }
        else{
            if (record.innerHTML > score_f){
                record.innerHTML = score_f;
            }
        }
        document.getElementById("mybtn").disabled = true;

    }
        
}

function repeat(){
    document.getElementById("mybtn").disabled = false;
    document.querySelector('.znak').innerHTML = "?";
    document.querySelector('.red_score').innerHTML = 0;
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