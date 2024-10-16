const rInput = document.getElementById('r');
const gInput = document.getElementById('g');
const bInput = document.getElementById('b');
const colorBox = document.getElementById('colorBox');

// Função para atualizar a cor
function updateColor() {
    const r = rInput.value;
    const g = gInput.value;
    const b = bInput.value;
    colorBox.style.color = rgb(${r}, ${g}, ${b});
}

// Adicionando event listeners para os inputs
rInput.addEventListener('input', updateColor);
gInput.addEventListener('input', updateColor);
bInput.addEventListener('input', updateColor);
