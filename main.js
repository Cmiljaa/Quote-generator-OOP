class QuoteGenerator{
    constructor(quotes)
    {
        this.quotes = quotes;
        this.btn = document.querySelector('.container .generator button');
        this.p = document.querySelector('.quote-section p');
        this.h6 = document.querySelector('.quote-section h6');
        this.eventlisteners();
    }

    eventlisteners(){
        this.btn.addEventListener('click', () => {
            let rnd = Math.floor(Math.random() * this.quotes.length-1) + 1; 
            this.p.innerHTML = `"${this.quotes[rnd].Quote}"`;
            this.h6.innerHTML = `${this.quotes[rnd].Author}`;
        })
    }
}