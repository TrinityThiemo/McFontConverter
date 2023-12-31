const inputText = document.getElementById("input-text");
const convertedText = document.getElementById("converted-text");
const copyMessage = document.getElementById("copy-message");

inputText.addEventListener("input", function () {
    const input = inputText.value;
    const converted = convertToFont(input);
    convertedText.value = converted;
});

convertedText.addEventListener("click", function () {
    convertedText.select();
    document.execCommand("copy");
    copyMessage.innerText = "Copied to clipboard";
    copyMessage.style.visibility = 'visible'
    setTimeout(function () {
        copyMessage.innerText = "";
        copyMessage.style.visibility = 'hidden'
    }, 5000);
});

function convertToFont(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const font = "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let convertedText = "";

    for (let i = 0; i < text.length; i++) {
        const index = alphabet.indexOf(text[i]);
        if (index !== -1) {
            convertedText += font[index];
        } else {
            convertedText += text[i];
        }
    }

    checkSelectedRadioButton(convertedText);

    return convertedText;
}

const autoPutText = document.getElementById('yes');

// Check the radio buttons on page load (if needed)
// option1RadioButton.checked = true;

// Function to check which radio button is selected
function checkSelectedRadioButton(txt) {
    if (autoPutText.checked) {

        document.getElementById('nickname').value = txt;
    }
}