let generatedQR = false;

function generateQRCode() {
    var qrData = document.getElementById('qrDataInput').value;
    
    if (!generatedQR && qrData.trim() !== '') {
        var qrCode = new QRCode(document.getElementById('qrcode'), {
            text: qrData,
            width: 200,
            height: 200,
        });
        
        document.getElementById('downloadBtn').style.display = 'block';
        generatedQR = true;
    }
}

function downloadQRCode() {
    var qrImage = document.getElementById('qrcode').getElementsByTagName('img')[0];

    var downloadLink = document.createElement('a');
    downloadLink.href = qrImage.src;
    downloadLink.download = 'qrcode.png';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
