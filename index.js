const targetArea = document.querySelector(".posts");

async function generateOne() {
    const quote = await fetch('https://animechan.vercel.app/api/random');
    const elem = await quote.json();
    targetArea.innerHTML = `<div class="post__container">
                    ${elem.quote}
                    <span class="char__show">-${elem.character}, from <span class="show__italics">${elem.anime}</span> </span>
                </div>`
}

async function generateTen() {

}
