const button=document.querySelector('.btn');
const body=document.querySelector("body");
const color = ['red', 'green', 'blue', 'yellow', 'pink']

body.style.backgroundColor="purple";


button.addEventListener('click', onBchange)

function onBchange(){
    const colorIndex= parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex];

}