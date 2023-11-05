// Smooth scroll effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});


// -------------------- function for closing and opening login from------------
function closeForm() {
    document.getElementById('loginForm').style.display = 'none'
}
function openForm() {
    document.getElementById('loginForm').style.display = 'flex'
    document.querySelectorAll('#loginForm input')[0].value=null
    document.querySelectorAll('#loginForm input')[1].value=null
}
 // --------------------function for opening and closing menu ----------------------------
 function openMenu(){
    document.getElementsByClassName('menuIcon')[1].style.display='block'
    document.getElementsByClassName('menuIcon')[0].style.display='none'
    document.querySelector('nav ul').style.display='flex'
}
function closeMenu(){
    document.getElementsByClassName('menuIcon')[0].style.display='block'
    document.getElementsByClassName('menuIcon')[1].style.display='none'
    document.querySelector('nav ul').style.display='none'
}
if(window.screen.width<905){
    document.querySelectorAll('header ul li').forEach((i)=>{
        i.addEventListener('click',closeMenu)
    })
    window.addEventListener('scroll',closeMenu)
}

// --------------for giving default value to form --------------------------
document.querySelector('.cta-button').addEventListener('click',()=>{
    document.querySelectorAll('#loginForm input')[0].value='7739499075'
    document.querySelectorAll('#loginForm input')[1].value='pass'
})