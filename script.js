
const form = document.querySelector("form");
const input = document.querySelector("input");
const button = form.querySelector('[type="submit"]');
const msg = 'Please provide a valid email address';


const error = document.createElement('p');
error.classList.add('error_text')
error.textContent = msg;


function checkEmail (e) {
    e.preventDefault();
    const email = e.target.querySelector('#email').value;
    if(!validateEmail(email)) {
        input.classList.add('error');
        form.insertBefore(error, button);
    } else {
        input.classList.remove('error');
        form.removeChild(error);
    }
    console.log(email);
}

function validateEmail (email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit', checkEmail);


const icon = document.querySelectorAll("i");
const border = document.querySelectorAll(".border");


for (let i=0; i < border.length; i++) {
border[0].addEventListener('mouseover', () => {
    border[0].style.backgroundColor = "hsl(223, 87%, 63%)";
    for (let i=0; i < icon.length; i++)
    icon[0].style.color = "white";
});
}

for (let i=0; i < border.length; i++) {
    border[1].addEventListener('mouseover', () => {
        border[1].style.backgroundColor = "hsl(223, 87%, 63%)";
        for (let i=0; i < icon.length; i++)
        icon[1].style.color = "white";
});
}

for (let i=0; i < border.length; i++) {
    border[2].addEventListener('mouseover', () => {
        border[2].style.backgroundColor = "hsl(223, 87%, 63%)";
        for (let i=0; i < icon.length; i++)
        icon[2].style.color = "white";
});
}

for (let i=0; i < border.length; i++) {
border[i].addEventListener('mouseout', () => {
    border[i].style.backgroundColor = "white";
    for (let i=0; i < icon.length; i++)
    icon[i].style.color = "hsl(223, 87%, 63%)"
});
}



