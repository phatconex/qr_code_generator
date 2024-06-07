function generateQRCode() {
    var link = document.getElementById("linkInput").value;
    var qrcodeContainer = document.getElementById("qrcode");

    // Clear previous QR Code if it exists
    qrcodeContainer.innerHTML = "";

    // Generate new QR Code
    var qrcode = new QRCode(qrcodeContainer, {
        text: link,
        width: 128,
        height: 128,
    });
}
