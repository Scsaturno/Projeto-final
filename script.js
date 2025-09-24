const fala = document.querySelector('.fala p');

function falar(texto) {
    const utter = new SpeechSynthesisUtterance(texto);
    utter.lang = 'pt-BR';
    speechSynthesis.cancel(); // Interrompe fala anterior
    speechSynthesis.speak(utter);
}

// Falas das seções do menu
const frases = {
    "sobre": "Aqui conto um pouco sobre mim!",
    "habilidades": "Essas são as minhas principais habilidades.",
    "projetos": "Veja os projetos que desenvolvi com carinho.",
    "contato": "Vamos conversar? Me mande uma mensagem!"
};

document.getElementById('link-sobre').addEventListener('mouseover', () => {
    fala.textContent = frases.sobre;
    falar(frases.sobre);
});
document.getElementById('link-habilidades').addEventListener('mouseover', () => {
    fala.textContent = frases.habilidades;
    falar(frases.habilidades);
});
document.getElementById('link-projetos').addEventListener('mouseover', () => {
    fala.textContent = frases.projetos;
    falar(frases.projetos);
});
document.getElementById('link-contato').addEventListener('mouseover', () => {
    fala.textContent = frases.contato;
    falar(frases.contato);
});

document.querySelector('nav').addEventListener('mouseout', () => {
    const texto = "Oi! Eu sou a Soraya e vou te mostrar meus projetos 💻✨";
    fala.textContent = texto;
    falar(texto);
});

// Falas para os projetos
const projetosFrases = {
    "proj-quente-frio": "Esse é um jogo de adivinhação com pistas visuais. Você consegue acertar?",
    "proj-monalisa": "Esse projeto recria a Monalisa com programação. Uma obra de arte moderna!",
    "proj-corrida1": "Aqui começa a corrida! A primeira versão do meu jogo de kart.",
    "proj-corrida2": "A segunda parte traz velocidade e diversão! Teste suas habilidades!"
};

Object.keys(projetosFrases).forEach(id => {
    const div = document.getElementById(id);
    div.addEventListener('mouseover', () => {
        fala.textContent = projetosFrases[id];
        falar(projetosFrases[id]);
    });
    div.addEventListener('mouseout', () => {
        const texto = "Oi! Eu sou a Soraya e vou te mostrar meus projetos 💻✨";
        fala.textContent = texto;
        falar(texto);
    });
});
