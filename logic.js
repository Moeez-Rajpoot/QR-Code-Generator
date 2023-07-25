const inputbox = document.getElementById('input');
const Displaydiv = document.getElementById('qrcode');
const Displayimg = document.getElementById('qrimg');

function Generate(params) {

    Displaydiv.style.display="flex";
    Displayimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputbox.value;

    
}