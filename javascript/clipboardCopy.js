var phone = document.querySelector('.phone');
var email = document.querySelector('.email');

function copyToClipboard(item){
    let text = item.textContent;
    clipboard.writeText(text);
}

phone.addEventListener('click', function(){
    copyToClipboard(phone);
    alert('Phone copied to clipboard!');
});

email.addEventListener('click', function(){
    copyToClipboard(email);
    alert('Email copied to clipboard!');
});