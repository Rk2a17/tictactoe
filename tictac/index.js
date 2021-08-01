window.addEventListener('load', bindEvents);

// function registerEevnt(currentButton){
//     currentButton.addEventListener('click', printXor0)
// }

var buttons = document.querySelectorAll('button');
function bindEvents(){

    // for(let i = 0; i<buttons.length; i++){  // var always declare on function level, to vo upar jaakar baith jaaega to vo undefine dega
    //     buttons[i].addEventListener('click', printXor0)
    // }  

    // buttons.forEach(registerEevnt);

    buttons.forEach(currentButton => currentButton.addEventListener('click', printXor0))

}

// function isBlank(first){
//     return buttons[first].innerText.trim().length==0
// }
const isBlank = first =>first.innerText.trim().length==0


// function allThreeBlank(first, second, third){
//     return isBlank(buttons[first]) && isBlank(buttons[second])
//     && isBlank(buttons[third])
// }
const allThreeBlank = (first, second, third) =>isBlank(buttons[first]) && isBlank(buttons[second])&& isBlank(buttons[third])


function compareThree(first,second, third){
    if(!allThreeBlank(first, second, third)){
    if(buttons[first].innerText==buttons[second].innerText &&
    buttons[first].innerText==buttons[third].innerText){
            return true;
        }
    }
    return false
}

const gameOver = () => compareThree(0,1,2) || compareThree(3,4,5) || compareThree(6,7,8) || compareThree(0,3,6) || compareThree(1,4,7) || compareThree(2,5,8) || compareThree(0,4,8) || compareThree(2,4,6);

var flag = false;
var count = 0

function printXor0(){
    // console.log('print x or 0 ', this)

    // if(flag){
    //     this.innerText = 'X'
    // }
    // else{
    //     this.innerText = '0'
    // }
    if(this.innerText.length == 0){
        count ++
        this.innerText = flag?'X':'0'
        
        if(count>4){
           if(gameOver()){
               
               document.querySelector('#result').innerText = 'Game Over ' + (flag?"X":"0 ") + " Win";
           };
        }
        flag = !flag;
    }
}