const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como os logaritmos são usados na ánalise de crescimento populacional?",
        alternativas: [
            {
                texto: "Os logaritmos são usados para calcular a taxa de natalidade direta.",
                afirmacao: "Achou assustador pensar que a matemática está envolvida em tudo ao seu redor. "
            },
            {
                texto: "Os logaritmos ajudam a modelar o crescimento exponencial da população.",
                afirmacao: "Será que os logaritmos são importantes?"
            }
        ]
    },
    {
        enunciado: "Como os logaritmos são utilizados para medir a intensidade de luz estelar em astronomia?",
        alternativas: [
            {
                texto: "Os logaritmos são usados para calcular a magnitude aparente das estrelas,comparando seu brilho com uma estrela de referência.",
                afirmacao: "Sentiu-se o Jovem Sheldon? Com essa pergunta sobre astronomia."
            },
            {
                texto: "Os logaritmos são usados para medir a distância entre estrelas",
                afirmacao: "Foi atrás de respostas né,calma você consegue!"
            }
        ]
    },
    {
        enunciado: "Qual é a relação entre logaritmos e juros compostos na economia?",
        alternativas: [
            {
                texto: "Os logaritmos não têm aplicação em cálculos financeiros",
                afirmacao: "Notou também que muitas pessoas não sabem o verdadeiro valor dos logaritmos."
            },
            {
                texto: "Os logaritmos são usados para calcular o número de períodos necessários para um investimento crescer a um valor específico",
                afirmacao: "Achou que era muito mais fácil procurar por respostas utilizando alguns meios mais tradicionais mesmo que levasse mais tempo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A importância dessas perguntas foi mostrar aos alunos que os logaritmos têm relevância na vida real. Através de exemplos práticos e curiosidades, eles puderam entender como esse conceito matemático está presente em diversos aspectos do nosso cotidiano e em várias áreas de conhecimento.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio(lista) {
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

mostraPergunta();