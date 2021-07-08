let startButton=document.getElementById('startbutton');
let startMenu=document.getElementsByClassName('startmenu')[0];

let searchButton=document.getElementById('searchbutton');
let searchMenu=document.getElementsByClassName('searchmenu')[0];




startButton.addEventListener('click',()=>{
    if(startMenu.style.bottom == "-650px")
    {
       startMenu.style.bottom="48px"
    }
    else
    {
        startMenu.style.bottom="-650px"
    }
})
searchButton.addEventListener('click',()=>{
    if(searchMenu.style.bottom == "-650px")
    {
       searchMenu.style.bottom="48px"
    }
    else
    {
        searchMenu.style.bottom="-650px"
    }
})