// function encodeAndDecodeMessages() {
//     const [encodeField, decodeField] = document.querySelectorAll("textarea")

//     const transform = (str, type) =>
//         str
//             .split("")
//             .map(x =>
//                 String.fromCharCode(
//                     type === "encode"
//                         ? x.charCodeAt(0) + 1
//                         : x.charCodeAt(0) - 1
//                 )
//             )
//             .join("")

//     document.addEventListener("click", e => {
//         if (e.target.tagName === "BUTTON") {
//             if (e.target.textContent.includes("Encode")) {
//                 decodeField.value = transform(encodeField.value, "encode")
//                 encodeField.value = ""
//             } else {
//                 decodeField.value = transform(decodeField.value, "decode")
//             }
//         }
//     })
// }
function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }
 
        let decodedMessage = document.getElementsByTagName('textarea')[0];
        let encodedMessage = document.getElementsByTagName('textarea')[1];
 
        if (e.target.textContent.includes('Encode')) {
            let message = decodedMessage.value;
            let encoded = [];
            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                encoded.push(String.fromCharCode(currSymbol + 1));
            }
            decodedMessage.value = '';
            encodedMessage.value = encoded.join('');
        } else if (e.target.textContent.includes('Decode')) {
            let message = encodedMessage.value;
            let decoded = [];
            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                decoded.push(String.fromCharCode(currSymbol - 1));
            }
            encodedMessage.value = decoded.join('');
        }
    });
}