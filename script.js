const searchField = document.querySelector('#search');
const block = document.querySelectorAll('.item');

searchField.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase();
    block.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})