let span1 = "Den Helder";
let span2 = "Florida";
let span3 = "Gaming";
let span4 = "scratch";

function replaceText(spanId, text) {
    document.getElementById(spanId).textContent = text;
}

document.addEventListener('DOMContentLoaded', () => {
  let spans = document.querySelectorAll('span');

  if (spans.length >= 4) {
    spans[0].textContent = "______";
    spans[1].textContent = "______";
    spans[2].textContent = "______";
    spans[3].textContent = "______";
  }
});