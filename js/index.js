document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});


var quotes = [
    `“Be yourself; everyone else is already taken.”`,
    `“If you tell the truth, you don't have to remember anything.”`,
    `“Sometimes the questions are complicated and the answers are simple.”`,
    `“We don't see things as they are, we see them as we are.”` ,
    `“That which does not kill us makes us stronger.”`];

var authors = [
    `― Oscar Wilde`,
    `― Mark Twain`,
    `― Dr. Seuss`,
    `― Anaïs Nin`,
    `― Friedrich Nietzsche`];

var previousNum = -1;

function generateRandomNum()
{
    do
    {
        var randomNum = Math.floor(Math.random() * quotes.length);
    }while(randomNum == previousNum);

    previousNum = randomNum;
    
    return randomNum;

    
}
function displayQuote()
{
    var randomNum = generateRandomNum();

    document.getElementById("quoteContainer").innerHTML = quotes[randomNum];
    document.getElementById("authorContainer").innerHTML = authors[randomNum];

}