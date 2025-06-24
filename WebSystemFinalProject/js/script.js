document.addEventListener('DOMContentLoaded', function () {
    const quoteContainer = document.getElementById('quote');
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteContainer.innerHTML = `<blockquote>"${data.content}"</blockquote><cite>- ${data.author}</cite>`;
        })
        .catch(error => {
            quoteContainer.textContent = "Be the change you want to see";
        });
});
