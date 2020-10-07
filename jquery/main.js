$(document).ready(function(){
    //Add Class
    $('#red').addClass('ourclass');

    //Remove Class after 5S
    setInterval(function(){
        
    }, 5000);

    //Append
    $('#red').append("<h1>Hello World</h1>");

    $('.clickme').on('click', function(){
        //Remove Class
        $('#red').toggleClass('ourclass');

        //Show Image
        $('img').fadeToggle('slow');
    })

    
});


//Vanila JavaScript
var taka = 700;

if ( taka >= 1000) {
    console.log('I have 1000 or more taka');
} else if (taka >= 900) {
    console.log('I have 900 or more taka');
} else {
    console.log('I have less then 900 taka'); 
}

//String Length
var str = "Open a new window, and move the new window 250px relative and move the new window 250px relativeto its current position:";
var count = str.length;
// if (count >= 100) {
//     alert('100+');
// }

//Random
let random = Math.random();
// alert(random);

//Variable and Const
// var num = 100;
// console.log(num);

// var num = 110;
// console.log(num);

const version = 100;
console.log(num);

//const num = 110;
console.log(num);