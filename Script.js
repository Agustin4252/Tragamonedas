document.getElementById("playButton").addEventListener("click", function() {
    // Simulación de las tragamonedas
    let reel1 = getRandomSymbol();
    let reel2 = getRandomSymbol();
    let reel3 = getRandomSymbol();
    
    // Actualizar los resultados en las tragamonedas
    document.getElementById("reel1").textContent = reel1;
    document.getElementById("reel2").textContent = reel2;
    document.getElementById("reel3").textContent = reel3;
    
    // Comprobar si el jugador ganó
    if (reel1 === reel2 && reel2 === reel3) {
        document.getElementById("result").textContent = "¡Felicidades! Ganaste!";
    } else {
        document.getElementById("result").textContent = "Lo siento, intenta de nuevo.";
    }
});

document.getElementById("placeBetButton").addEventListener("click", function() {
    let betAmount = parseFloat(document.getElementById("betAmount").value);
    
    if (betAmount >= 0.5) {
        // Aquí puedes manejar la lógica de la apuesta y balance del jugador
        alert("Apuesta colocada: " + betAmount);
    } else {
        alert("La apuesta mínima es 0.5.");
    }
});

document.getElementById("balanceButton").addEventListener("click", function() {
    // Mostrar el balance (puedes integrarlo con el bot)
    alert("Tu balance es: 10000 coins");
});

// Función para obtener un símbolo aleatorio de tragamonedas
function getRandomSymbol() {
    const symbols = ["🍒", "🍇", "🍋", "🍊", "🍉"];
    return symbols[Math.floor(Math.random() * symbols.length)];
              }
