function solve() {
    let textInput = document.getElementById('input');

    let text = textInput.value;
  
    let sentences = text.split('.')
      .filter(x => x !== "")
      .map(x => x + '.');
  
    let paragraphs = Math.ceil(sentences.length / 3);
  
    let result = document.getElementById('output');
    for (let index = 0; index < paragraphs; index++) {
      result.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`
  
    }
}