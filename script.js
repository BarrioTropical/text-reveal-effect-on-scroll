let paragraphs = [...document.querySelectorAll('p')];
let spans = [];

// Wrap each character in a span
paragraphs.forEach(paragraph => {
    let htmlString = '';
    let pArray = paragraph.textContent.split('');

    for(let i = 0; i < pArray.length; i++){
        htmlString += `<span>${pArray[i]}</span>`;
    }
    paragraph.innerHTML = htmlString;
});

// Collect all spans
spans = [...document.querySelectorAll('span')];

function revealSpans(){
    for(let i = 0; i < spans.length; i++){
        if(spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2){
            let {left, top} = spans[i].getBoundingClientRect();
            top = top - (window.innerHeight * 0.4);

            let opacityValue = 1 - ((top * 0.01) + (left * 0.001));
            opacityValue = opacityValue < 0.1 ? 0.1 : opacityValue;
            opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);

            spans[i].style.opacity = opacityValue;
        }
    }
}

window.addEventListener('scroll', () => {
    revealSpans();
});
revealSpans();
