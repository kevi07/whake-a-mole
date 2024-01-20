 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//assigning random index for the panda kutty images
var ids = [
    'pop1',
    'pop2',
    'pop3',
    'pop4',
    'pop5',
    'pop6',
    'pop7',
    'pop8',
    'pop9',
]
//trail

    // var cl = shuffleArray(ids);
    // var clid = cl[0];

// for (var k=0; k < 1000; k++){
//     var cl = shuffleArray(ids);
//     var clid = cl[0];
//     console.log(clid)
//     setInterval(function(){
//         document.getElementById(clid).classList.add('active');
//     },1000);
//     setTimeout(function(){
//         document.getElementById(clid).classList.add('notactive');
//     }, 3000);
// }
    


for (var k = 0; k < 1000; k++) {
    setTimeout(function (){
        var shuffled = shuffleArray(ids);
        var selectedId = shuffled[0];
        document.getElementById(selectedId).classList.add('active');
        setTimeout(function () {
            document.getElementById(selectedId).classList.remove('active');
        }, 700);
    }, k * 3000);
}

const pandas = document.querySelectorAll('.panda');
var value = document.getElementById('num');
var score =0;
 Array.from(pandas).forEach(function(panda){
    panda.addEventListener('click',function(e){
        
            const adi = e.target.parentElement;
            console.log(adi);
            score+=5;
            value.innerHTML = score ;
        
    });
 });