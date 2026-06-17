const qrInput = document.getElementById('qrInput');
const generateBtn = document.getElementById('generateBtn');
const qrImage = document.getElementById('qrImage');

    generateBtn.onclick = function() {

        const text = qrInput.value;

            if (text === '') {
                alert('You cant let the input section empty, you need to fill it!..');
                return;
            }

            const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(text);

            qrImage.src = qrUrl;
            
            qrImage.style.display = 'block';

    }