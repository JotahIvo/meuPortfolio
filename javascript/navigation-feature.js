var buttonWelcome = document.querySelector('.welcome');
var buttonAboutMe = document.querySelector('.aboutMe');
var buttonExperience = document.querySelector('.experience');
var buttonSkills = document.querySelector('.skills');

function removeClass(button){
    button.classList.remove('activated-button');
};

buttonWelcome.addEventListener('click', function(){
    buttonWelcome.classList.add('activated-button');
    removeClass(buttonAboutMe);
    removeClass(buttonExperience);
    removeClass(buttonSkills);
});

buttonAboutMe.addEventListener('click', function(){
    buttonAboutMe.classList.add('activated-button');
    removeClass(buttonWelcome);
    removeClass(buttonExperience);
    removeClass(buttonSkills);
});

buttonExperience.addEventListener('click', function(){
    buttonExperience.classList.add('activated-button');
    removeClass(buttonWelcome);
    removeClass(buttonAboutMe);
    removeClass(buttonSkills);
});

buttonSkills.addEventListener('click', function(){
    buttonSkills.classList.add('activated-button');
    removeClass(buttonWelcome);
    removeClass(buttonExperience);
    removeClass(buttonAboutMe);
});