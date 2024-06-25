document.getElementById('generate-button').addEventListener('click', function() {
    var text = document.getElementById('text-input').value;
    if (text.trim() === '') {
        alert('Por favor, introduce un texto o URL');
        return;
    }

    var qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Limpiar cualquier QR anterior

    var qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 256,
        height: 256,
    });
});
