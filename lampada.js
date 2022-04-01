const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    /* Função para encerrar quando a lâmpada estiver quebrada */
    return lamp.src.indexOf('quebrada') > -1 /* indexOf é o método que procura uma varredura numa string que procura um trecho de string. Neste caso ele vai procurar a palavra quebrada dentro da string 'src' nas funções abaixo. E ele procura um nº menor que -1, quando ele não encontra ele traz o -1(falso), ou seja, palavra quebrada (verdadeiro), não encontrando ele retorna falso(-1)*/
}

function lampOn() {

    lamp.src = './imagens/acesa.png';
}

function lampOff() {

    lamp.src = './imagens/apagada.png'
}

function lampBroken() {
    lamp.src = './imagens/quebrada.png'

}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('dblclick', lampBroken);