const pages = document.querySelectorAll('.page');
const headerLeft = document.querySelector('.header-left');
const headerRight = document.querySelector('.header-right');
const aboutContent = document.querySelector('.content');
const projectContent = document.querySelector('.projects-content')

const projectPage = document.querySelector('.page.about')
const aboutPage = document.querySelector('.page.projects')

const r = document.querySelector(':root');
const translateAmountDesktop = 90; 
const translateAmountMobile = 100;

let onProjects = false;

let translate = 0;

// Full page sliding. 
//TO-DO 
//CHANGE SLIDE EVENT FROM HTML FILE AND INTO AN EVENT LISTENER ON JS FILE IN ORDER TO CHECK IF WE ARE IN MOBILE AND IF IT IS POSSIBLE.

projectPage.addEventListener('mouseenter')

let slide = (page, amount = translateAmountDesktop) => { 

    if (page === 'projects' && onProjects === false) {
        // Move to projects page
        translate -= amount;
        onProjects = true; 
        movePages();
        moveToProjects();
    } else if (page === 'projects' && onProjects === true) { 
        // On projects already - do nothing
        translate = 0;
    } else if (page === 'about' && onProjects === true) { 
        // Move to About page
        translate = 0;
        onProjects = false;
        movePages();
        moveToAbout();
    } else { 
        // Do nothing
        translate = 0;
    }
}

//animating page moves
function moveToProjects() {
    aboutPage.style.boxShadow = 'inset -20px 0px 20px 0px rgba(0, 0, 0, 0.2)';
    projectPage.style.boxShadow = 'none';

    aboutContent.style.animation = 'fadeOut 1s';
    aboutContent.style.animationFillMode = 'both';

    projectContent.style.animation = 'fadeIn 1s';
    projectContent.style.animationFillMode = 'both';

    headerLeft.style.animation = 'fadeOut 1s';
    headerLeft.style.animationFillMode = 'both';
    headerRight.style.animation = 'fadeIn 1s';
    headerRight.style.animationFillMode = 'both';
}

//animating page moves
function moveToAbout() {
    projectPage.style.boxShadow = 'inset 15px -5px 20px 0px rgba(0, 0, 0, 0.2)';
    aboutPage.style.boxShadow = 'none';

    aboutContent.style.animation = 'fadeIn 1s';
    projectContent.style.animation = 'fadeOut 1s';
    projectContent.style.animationFillMode = 'both';

    headerLeft.style.animation = 'fadeIn 1s';
    headerRight.style.animation = 'fadeOut 1s';
    headerRight.style.animationFillMode = 'both';
}


function movePages() {
        pages.forEach(
            pages => (pages.style.transform = `translateX(${translate}%)`)
        );
}

//Screen wipes
const screenWiper = document.querySelector('.screen-wipe');
const screenWiper2 = document.querySelector('.screen-wipe2');

async function screenWipe(){ 
    
    screenWiper.style.animation = 'slideUpFromDown 0.5s';
    screenWiper.style.animationFillMode = 'both';
    screenWiper.style.animationTimingFunction = 'ease-in-out';
    await new Promise(resolve => setTimeout(resolve, 500));
    screenWiper2.style.animation = 'slideUpFromDown 0.5s';
    screenWiper2.style.animationFillMode = 'both';
    screenWiper2.style.animationTimingFunction = 'ease-in-out';
    await new Promise(resolve => setTimeout(resolve, 500));
    window.location.href = "./hireme.html";
}

// Mobile Page switch 

const toggleSwitch = document.querySelector('.page-switch input[type="checkbox"]');

function switchPage(e) { 
    if (e.target.checked && onProjects === false) { 
        slide('projects', translateAmountMobile);
    } else { 
        slide('about', translateAmountMobile);
    }
}


toggleSwitch.addEventListener('change', switchPage, false);
