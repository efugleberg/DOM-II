// Your code goes here

const mouse = document.querySelector('footer')
mouse.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'pink';
    setTimeout(function() {
        event.target.style.backgroundColor = "";
    }, 1000)
}, false)

const select = document.querySelector('.first-name')

select.addEventListener('select', event => {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
    
});