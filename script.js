const changingColor= function(){
    let color='#';
    let hex='0123456789ABCDEF';
    for(let i=0; i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let b;
const c=document.querySelector('#stop');
 c.addEventListener('click',()=>{
    clearInterval(b);
 })

const a = document.querySelector('#start');

a.addEventListener('click', () => {

    b = setInterval(() => {
        document.body.style.backgroundColor=changingColor();
    }, 1000);
});
