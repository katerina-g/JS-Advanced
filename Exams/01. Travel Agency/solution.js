window.addEventListener('load', solution);

function solution() {
    let name = document.getElementById("fname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let code = document.getElementById("code");

    submitBtn = document.querySelector("#submitBTN");
    infoPreview = document.getElementById("infoPreview");
    editBtn = document.querySelector("#editBTN");
    continueBTN = document.querySelector("#continueBTN");

    submitBtn.addEventListener("click", submit);

    function submit(e) {
        if (name.value == "" || email.value == "") {
            return;
        }

        let construction = `<li>Full Name: ${name.value}</li>
      <li>Email: ${email.value}</li>
      <li>Phone Number: ${phone.value}</li>
      <li>Address: ${address.value}</li>
      <li>Postal Code: ${code.value}</li>`;

        infoPreview.innerHTML = construction;

        let saveN = name.value;
        let saveE = email.value;
        let saveP = phone.value;
        let saveA = address.value;
        let saveC = code.value;

        name.value = "";
        email.value = "";
        phone.value = "";
        address.value = "";
        code.value = "";

        submitBtn.disabled = true;
        editBtn.disabled = false;
        continueBTN.disabled = false;

        continueBTN.addEventListener("click", deleteAll);
        editBtn.addEventListener("click", editField);

        function editField(e) {
            name.value = saveN;
            email.value = saveE;
            phone.value = saveP;
            address.value = saveA;
            code.value = saveC;

            submitBtn.disabled = false;
            editBtn.disabled = true;
            continueBTN.disabled = true;

            let allLi = Array.from(document.querySelectorAll("#infoPreview li"));
            allLi.forEach((element) => {
                element.remove();
            });
        }

        function deleteAll(e) {
            hElement = document.createElement("h3");
            hElement.textContent = 'Thank you for your reservation!'
            divElement = document.getElementById("block");
            while (divElement.firstChild) {
                divElement.removeChild(divElement.firstChild);
            }

            divElement.appendChild(hElement)
        }
    }
}

