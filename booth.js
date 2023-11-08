const header1 = document.querySelector('.sm-head')
const header = document.querySelectorAll('header')[1];
const navLinks = document.querySelectorAll('nav li a');
const sheprate = document.querySelectorAll('nav .sheprate');
const estimate=document.querySelector('.estimate')
// const logo = document.querySelectorAll(".logo img");

function scroll() {
    if (window.scrollY >= 320) {
        header.style.backgroundColor = 'white'
        header.style.color = 'black'
        estimate.style.color = 'black'
        header.style.boxShadow = '0 3px 10px 0 rgba(0,0,0,.1)'
        navLinks.forEach((links) => {
            links.style.color = 'black'
        })
        sheprate.forEach((i) => {
            i.style.borderColor = 'black'
        })
    } 
    else {
        sheprate.forEach((i)=>{
            i.style.borderColor='white'
        })
        header.style.background = 'transparent'
        header.style.color = 'white'
        estimate.style.color = 'white'
        navLinks.forEach((links) => {
            links.style.color = 'white'
        })
    }
}
window.addEventListener('scroll', scroll)

function openMenu() {
    header.style.display = 'flex';
    header1.style.display = 'none';
    header.style.animation = 'openMenu 1s';
    header.style.background = 'white';
    window.removeEventListener('scroll', scroll)

    header.style.backgroundColor = 'white'
    header.style.color = 'black'
    header.style.boxShadow = '0 3px 10px 0 rgba(0,0,0,.1)'
    // logo[1].className = 'logoBck'
    navLinks.forEach((links) => {
        links.style.color = 'black'
    })
    sheprate.forEach((i) => {
        i.style.borderColor = 'black'
    })
}
function closeMenu() {
    header.style.display = 'none';
    header1.style.display = 'flex';
    window.addEventListener('scroll', scroll)
}

document.querySelectorAll('a').forEach((links) => {
    links.addEventListener("click", function (event) {
        if (window.innerWidth <= 1170) {
            closeMenu()
        }
    });
})


// =======================For qetting Pre written quote with referral code=========================
        const urlParams = new URLSearchParams(window.location.search);
        const urlReferral = urlParams.get("ref");
        let addReferralMsg = `Hi there! I'm interested in your web and app development services. 🚀 I'd love to learn more and get a quote for my project. Can you provide me with some details and an estimate? 📊  My referral code is -- ${urlReferral}

                      Looking forward to your response!` ;
        let packageQuote=document.querySelectorAll('.btnCtr .sm-btn');
        packageQuote.forEach((i)=>{
            i.href=i.href+'?text='+addReferralMsg;
        });

        document.querySelector('.estimate').href=document.querySelector('.estimate').href+'?text='+addReferralMsg;
        document.querySelectorAll('.sheprate')[1].href= document.querySelectorAll('.sheprate')[1].href+`?subject=Enquiry for website &body=${addReferralMsg}`;
        document.querySelectorAll('.fixedSocial a')[0].href= document.querySelectorAll('.fixedSocial a')[0].href+'?text='+addReferralMsg;
        document.querySelectorAll('.fixedSocial a')[1].href= document.querySelectorAll('.fixedSocial a')[1].href+`?subject=Enquiry for website &body=${addReferralMsg}`;
