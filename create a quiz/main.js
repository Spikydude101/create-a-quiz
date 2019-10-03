' use strict';

//event listeners

document.getElementById('wits').addEventListener('click' , familyFued);


//event function 
function familyFued() {
    let question1 = document.getElementById('question1').value.toLowerCase().trim();

    let question2 = document.getElementById('question2').value.toLowerCase().trim();

    let question3 = document.getElementById('question3').value.toLowerCase().trim();

    let question4 = document.getElementById('question4').value.toLowerCase().trim();

    let question5 = document.getElementById('question5').value.toLowerCase().trim();

    let total = 0;
    

    if (question1 == 'crime') {
        document.getElementById('blank1').innerHTML = '48.  #1 answer was crime';
        total += 48;

    }else if (question1 == 'rhyme') {
        document.getElementById('blank1').innerHTML =  '#1 answer was crime';
        total += 32;


    }else if(question1 == 'dime') {
        document.getElementById('blank1').innerHTML =  '#1 answer was crime';
        total +=10;


    }else {
        document.getElementById('blank1').innerHTML =  '#1 answer was crime';
        total+=0;

    }



    if (question2 == 'sick' ||  question2 =='im sick') {
        document.getElementById('blank2').innerHTML =  '#1 answer was im sick';
        total += 40;

    }else if (question2 == 'i have to feed my dog') {
        document.getElementById('blank2').innerHTML =  '#1 answer was im sick';
        total+=20;


    }else if(question2 == 'i have to water my plants') {
        document.getElementById('blank2').innerHTML =  '#1 answer was im sick';
        total+=5;


    }else {
        document.getElementById('blank2').innerHTML =   '#1 answer was im sick';
        total +=0;


    }



    
    if (question3 == 'motorcycle') {
        document.getElementById('blank3').innerHTML =  '#1 answer was motorcycle';
        total+=33;

    }else if (question3 == 'transit') {
        document.getElementById('blank3').innerHTML =  '#1 answer was motorcycle';
        total+=31;


    }else if(question3 == 'bus') {
        document.getElementById('blank3').innerHTML =  '#1 answer was motorcycle';
        total+=12;


    }else {
        document.getElementById('blank3').innerHTML =  '#1 answer was motorcycle';
        total+=0;
        

    }





    
    if (question4 == 'the teacher' || question4 == 'teacher' ) {
        document.getElementById('blank4').innerHTML = '#1 answer was tthe teacher';
        total+=50;

    }else if (question4 == 'school work') {
        document.getElementById('blank4').innerHTML =  '#1 answer was the teacher';
        total+=25;


    }else if(question4 == 'reading') {
        document.getElementById('blank4').innerHTML =  '#1 answer was the teacher';
        total+=3;


    }else {
        document.getElementById('blank4').innerHTML =  '#1 answer was the teacher';
        total+=0;
        

    }




    if (question5 == 'blue whale') {
        document.getElementById('blank5').innerHTML =  '#1 answer was a blue whale';
        total+=49;

    }else if (question5 == 'elephant') {
        document.getElementById('blank5').innerHTML =  '#1 answer was a blue whale';
        total+=28;


    }else if(question5 == 'giraffe') {
        document.getElementById('blank5').innerHTML = '#1 answer was a blue whale';
        total+=23;


    }else {
        document.getElementById('blank5').innerHTML =  '#1 answer was a blue whale';
        total+=0;
        

    }

    document.getElementById('total').innerHTML = total + '/200';


}