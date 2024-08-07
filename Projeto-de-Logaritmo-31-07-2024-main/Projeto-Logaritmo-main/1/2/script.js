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
                afirmacao: [
                "Em 1798, no livro An Essay on the Principle of Population, que teve seis edições, Thomas Malthus (1766-1864), um clérigo e erudito inglês influente nos campos da economia política e da demografia, escreveu:"
                ]
            },
            {
                texto: "Os logaritmos ajudam a modelar o crescimento exponencial da população.",
                afirmacao: [
                    "“A população, quando não controlada, aumenta em progressão geométrica. A subsistência aumenta apenas em progressão aritmética. Um pequeno conhecimento dos números mostrará a imensidão do primeiro poder em comparação com o segundo.“"
                ]
            }
        ]
    },
    {
        enunciado: "Como os logaritmos são utilizados para medir a intensidade de luz estelar em astronomia?",
        alternativas: [
            {
                texto: "Os logaritmos são usados para calcular a magnitude aparente das estrelas,comparando seu brilho com uma estrela de referência.",
                afirmacao: [
                
                ]
            },
            {
                texto: "Os logaritmos são usados para medir a distância entre estrelas",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é a relação entre logaritmos e juros compostos na economia?",
        alternativas: [
            {
                texto: "Os logaritmos não têm aplicação em cálculos financeiros",
                afirmacao: ""
            },
            {
                texto: "Os logaritmos são usados para calcular o número de períodos necessários para um investimento crescer a um valor específico",
                afirmacao: ""
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A importância dessas perguntas foi mostrar aos alunos que os logaritmos têm relevância na vida real. Através de exemplos práticos e curiosidades, eles puderam entender como esse conceito matemático está presente em diversos aspectos do nosso cotidiano e em várias áreas de conhecimento.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
