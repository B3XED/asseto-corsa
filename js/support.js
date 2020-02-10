document.querySelector('.support h2').addEventListener("click", function () {
    document.querySelector('.support__block').classList.add('on');
   })
   document.querySelector('.support__block span').addEventListener("click", function () {
    document.querySelector('.support__block').classList.remove('on');
})