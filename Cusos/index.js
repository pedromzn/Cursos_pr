const seta_Rh = document.getElementById('RH');
const links = document.querySelector('.links');
const Box = document.getElementById('RH-box')
seta_Rh.addEventListener('click', () =>{
    links.classList.toggle('active');
    Box.classList.toggle('active');
})