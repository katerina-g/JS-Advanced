function solve() {
  const text = document.getElementById('text').value;
  const naming = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');
  const lower = text.toLowerCase();
  const splitted = lower.split(' ');
  let resultStr = ''
  if (naming == 'Camel Case') {
    resultStr += splitted[0];
    for (let i = 1; i < splitted.length; i++) {
      
      resultStr += splitted[i][0].toUpperCase() + splitted[i].slice(1, splitted[i].length);
    }


  } else if (naming == 'Pascal Case') {
    for (let i = 0; i < splitted.length; i++) {
      resultStr += splitted[i][0].toUpperCase() + splitted[i].slice(1, splitted[i].length);
    }

  } else { 
    result.textContent = "Error!";
    return;
  }
  result.textContent = resultStr

}



