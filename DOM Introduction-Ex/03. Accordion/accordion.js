function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let displayStyle = document.getElementById('extra');


    button.textContent = button.textContent == 'More' ? 'Less' : 'More';
    displayStyle.style.display = displayStyle.style.display === 'block' ? 'none' : 'block';
    
}