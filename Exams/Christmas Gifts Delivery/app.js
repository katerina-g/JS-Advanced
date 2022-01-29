function solution() {
    const inputGift = document.querySelector(".card input")
    const addBtn = document.querySelector(".card button")
    let ulEl = document.querySelector(".card ul")
    addBtn.addEventListener('click', addToList);

    function addToList(e) {
        e.preventDefault()
        let liEl = document.createElement("li")
        liEl.setAttribute("class","gift")
        liEl.textContent = inputGift.value
        let sendBtn = document.createElement("button")
        sendBtn.setAttribute("class", "sendButton")
        sendBtn.textContent = "Send"
        let discardBtn = document.createElement("button")
        discardBtn.setAttribute("class", "discardButton")
        discardBtn.textContent = "Discard"
        liEl.appendChild(sendBtn)
        liEl.appendChild(discardBtn)
        ulEl.appendChild(liEl)
        inputGift.value = ""
        let allLiEl = Array.from(ulEl.querySelectorAll("li"))
        let sorted = allLiEl.sort((a, b) => a.innerText.localeCompare(b.innerText))
        while (ulEl.firstChild) {
            ulEl.firstChild.remove()
        }
        for (let el of sorted) {
            ulEl.appendChild(el)
        }

        sendBtn.addEventListener("click", addToSend)
        function addToSend(e) {
            e.preventDefault()
            let ulSendElement = document.querySelector(".container > section:nth-of-type(3) > ul");
            e.target.remove();
            discardBtn.remove();
            ulSendElement.appendChild(liEl);

        }
        discardBtn.addEventListener("click", addToDiscard)
        function addToDiscard(e) {
            e.preventDefault()
            let ulDiscardEl = document.querySelector(".container > section:nth-child(4) > ul")
            e.target.remove()
            sendBtn.remove()
            ulDiscardEl.appendChild(liEl)
        }
    }

}

