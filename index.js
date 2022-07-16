const targetArea = document.querySelector(".posts");
const loadingPageOne = `<div class="posts__no-quotes">
                            <figure class="body__no-quotes--loading">
                                <img src="anime-run.gif" alt="" class="posts__no-quotes--img">
                            </figure>
                            <span class="body__no-quotes--span">We are hunting down the quotes right now, master!</span>
                        </div>`
const loadingPageTen = `<div class="posts__no-quotes">
                            <figure class="body__no-quotes--loading">
                                <img src="hideri-anime.gif" alt="" class="posts__no-quotes--img">
                            </figure>
                            <span class="body__no-quotes--span">We are hunting down the quotes right now, master!</span>
                        </div>`


async function generateOne() {
    targetArea.innerHTML = loadingPageOne
    const quote = await fetch('https://animechan.vercel.app/api/random');
    const elem = await quote.json();
    targetArea.innerHTML = `<div class="post__container">
    ${elem.quote}
    <span class="char__show">-${elem.character}, from <span class="show__italics">${elem.anime}</span> </span>
    </div>`
}

async function generateTen() {
    targetArea.innerHTML = loadingPageTen
    const quote = await fetch('https://animechan.vercel.app/api/quotes');
    const quoteJson = await quote.json();
    console.log(typeof quoteJson)

    targetArea.innerHTML = quoteJson.map(elem => {
        return `<div class="post__container">
                    ${elem.quote}
                    <span class="char__show">-${elem.character}, from <span class="show__italics">${elem.anime}</span> </span>
                </div>`
    }).join("")
}
