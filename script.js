window.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById("main-button"),
        totalClicks = document.getElementById("total-clicks"),
        affordable = 0,
        totalClicksValue = 0,
        clicks = 0,
        possibility = 1,
        hardness = 10;

    function newGame() {        
        totalClicksValue = 0;
        totalClicks.textContent = totalClicksValue;
        clicks = 0;
        possibility = 1;
        affordable = 0;
        
        buy.removeEventListener("click", newGame);
        btn.addEventListener("click", increase);
        buy.addEventListener("click", buying);

        btn.textContent = "Click!";
        buy.textContent = `Buy ${affordable}`;
    }

    function increase() {
        clicks += +possibility;
        totalClicksValue = +clicks;
        affordable = (+clicks / +hardness).toFixed(); 
        buy.textContent = `Buy ${affordable}`;
        totalClicks.textContent = totalClicksValue;
        
        if (totalClicksValue >= 1000000000) {
            win();
        }

    }

    function buying() {
        possibility += +affordable;
        affordable = 0;
        clicks = 0;
        totalClicks.textContent = 0;
        btn.textContent = `Click ${possibility} per click!`;
        buy.textContent = `Buy ${affordable}`;
    }

    function win() {
        btn.textContent = "You win!";
        buy.textContent = 'Play again!';
        totalClicks.textContent = `You've done ${totalClicksValue} clicks!`;
        btn.removeEventListener("click", increase);
        buy.removeEventListener("click", buying);
        buy.addEventListener("click", newGame);
    }

    newGame();


});