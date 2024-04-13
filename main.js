let btn = document.querySelector('.container .generator button');
let p = document.querySelector('.quote-section p');
let h6 = document.querySelector('.quote-section h6');

btn.addEventListener('click', () => {
    let rnd = Math.floor(Math.random() * quotes.length-1) + 1; 
    p.innerHTML = `"${quotes[rnd].Quote}"`;
    h6.innerHTML = `${quotes[rnd].Author}`;
})