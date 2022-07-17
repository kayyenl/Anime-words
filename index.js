const targetArea = document.querySelector(".posts");

async function generateOne() {
    targetArea.innerHTML = loadingStringGenerator("anime-run.gif")
    const quote = await fetch('https://animechan.vercel.app/api/random');
    const elem = await quote.json();
    targetArea.innerHTML = `<div class="post__container">
    "${elem.quote}"
    <span class="char__show">-${elem.character}, from <span class="show__italics">${elem.anime}</span> </span> 
    </div>`
}

async function generateTen() {
    targetArea.innerHTML = loadingStringGenerator("hideri-anime.gif")
    const quote = await fetch('https://animechan.vercel.app/api/quotes');
    const quoteJson = await quote.json();

    targetArea.innerHTML = quoteJson.map(elem => {
        return `<div class="post__container">
                    "${elem.quote}"
                    <span class="char__show">-${elem.character}, from <span class="show__italics">${elem.anime}</span> </span> 
                </div>`
    }).join("")
}

// async function onSearchChange(event) {
//     targetArea.innerHTML = loadingStringGenerator("hideri-anime.gif")
//     const quote = await fetch(`https://animechan.vercel.app/api/quotes/character?name=${event.target.value}`);
//     const quoteJson = await quote.json();

//     targetArea.innerHTML = quoteJson.map(elem => {
//         return `<div class="post__container">
//                     "${elem.quote}"
//                     <span class="char__show">-${elem.character}, from <span class="show__italics">${elem.anime}</span> </span> 
//                 </div>`
//     }).join("")
// }

function loadingStringGenerator(gif) {
    return `<div class="posts__no-quotes">
    <figure class="body__no-quotes--loading">
        <img src=${gif} alt="" class="posts__no-quotes--img">
    </figure>
    <span class="body__no-quotes--span">We are hunting down the quotes right now, master!</span>
    </div>`
}
