function search() {
   const elements = Array.from(document.querySelectorAll("#towns li"));
   const text = document.getElementById("searchText").value;
   let matches = 0;
   elements.forEach((el) => {
      if (text != "") {
         if (el.textContent.includes(text)) {
            el.style.fontWeight = "bold";
            el.style.textDecoration = "underline";
            matches += 1; 
         } else {
            el.style.fontWeight = "normal";
            el.style.textDecoration = "none";
         }
      }
        
   })
   
   document.getElementById("result").textContent = `${matches} matches found`
   
}