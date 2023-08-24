let random = "";
function random_number() {
    random = Math.floor(Math.random() * 10)
}


let submit = document.querySelector('.sub')
let input = document.querySelector('.user_box')
let image = document.querySelector('.img')
let context = document.querySelector('.content')
let try_agian = document.querySelector('.again')
let start_agian = document.querySelector('.start')
let img2 = document.querySelector('.img')



const checkwin = () => {
    if (random == input.value) {
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.position = "absolute";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.left = "350px";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.top = "250px";
        context.style.display = "flex";
        // document.getElementsByClassName("sub")[0].innerText = "PLAY AGAIN"
        start_agian.style.display = "flex";
        img2.style.display = "none"
        submit.style.display = "none";
        checkplay_again();
    }
    else {
        checklose();
    }
}


const checklose = () => {
    if (random != input.value) {
        submit.style.display = "none";
        try_agian.style.display = "flex";
        try_agian.addEventListener('click', () => { 
            submit.style.display = "flex";
            try_agian.style.display = "none";
            checkwin();
        })
    }
}



//reset game
const checkplay_again = () => {
    start_agian.addEventListener('click', () => {
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
        context.style.display = "none";
        // document.getElementsByClassName("sub")[0].innerHTML = "SUBMIT"
        submit.style.display = "flex";
        start_agian.style.display = "none";
        img2.style.display = "flex";
        input.value = ""
        random_number();
    })
}


//RESULT
submit.addEventListener('click', () => {
    checkwin();
})


//start game
random_number();






//WASTE
// console.log(try_agian);

// submit.addEventListener('click',()=>{
//     if(random == input.value){
//     document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
//     document.querySelector('.imgBox').getElementsByTagName('img')[0].style.position = "absolute";
//     document.querySelector('.imgBox').getElementsByTagName('img')[0].style.left = "350px";
//     document.querySelector('.imgBox').getElementsByTagName('img')[0].style.top = "250px";
//     context.style.display = "flex";
//     }

//     else{
//     submit.style.display = "none";
//     try_agian.style.display = "flex";
//     try_agian.addEventListener('click',()=>{
//     })
//     }
// })


//variable_name.style.property = "value"