/*VARIAVÉIS DO PROJETO*/
//VARS DA FUNÇÃO DO CRONOMETRO
var interval;
//NIVEL - 1
var milisNv1 = 99;
var segsNv1 = 2;

//NIVEL - 2
var milisNv2 = 99;
var segsNv2 = 1;

//NIVEL - 3
var milisNv3 = 99;
var segsNv3 = 1;

//NIVEL - 4
var milisNv4 = 70;
var segsNv4 = 1;

//NIVEL - 5
var milisNv5 = 50;
var segsNv5 = 1;

//NIVEL - 6
var milisNv6 = 99;
var segsNv6 = 0;


/*VARS DO JOGO*/
//ELEMENTO HTML(<h2 id="alvo">COR</h2>)
const alvo = document.getElementById('alvo');

//CORES DO JOGO
var listaCores = {
    nomeCores: {
        verde: 'VERDE',// 1
        amarelo: 'AMARELO',// 2
        rosa: 'ROSA',// 3
        marrom: 'MARROM',// 4
        azul: 'AZUL',// 5
        laranja: 'LARANJA',// 6
        cinza: 'CINZA',// 7
        vermelho: 'VERMELHO',// 8
        preto: color='BRANCO'// 9}
    },
 
    cores: {
        verde: color='green',// 1
        amarelo: color='yellow',// 2
        rosa: color='#ff009d',// 3
        marrom: color='brown',// 4
        azul: color='blue',// 5
        laranja: color='orange',// 6
        cinza: color='gray',// 7
        vermelho: color='red',// 8
        branco: color='white'// 9}
    }
}

//VARS DA FUNÇÃO PONTUADORA
var contaPontos = 0;  
var pontosAcumulados = 0 
var dif = 0; 
var pontosDisplay = 0;
var nivel = 1;

/*FUNÇÕES DO CRONOMETRO*/
//TIME HANDLER NIVEL - 6 
timerNv6 = () => {

    while(milisNv6 > 0){
        milisNv6--;
        console.log(milisNv6);
    }

    document.getElementById('crono').innerText = segsNv6 + " : " + milisNv6;

    //ENCERRA JOGO AO BATER O LIMITE
    if (milisNv6 == 0) {
        gameOver();
    }

}
//TIME HANDLER NIVEL - 5
timerNv5 = () => {

    //DECREMENTA O TEMPO
    for(i=0; i <= 3; i++){
        do{
            milisNv5--;
            
        }while(milisNv5 < 0)
    
        if(milisNv5 == 0){
            segsNv5--;
            milisNv5 = 90;
        }
    }

    document.getElementById('crono').innerText = segsNv5 + " : " + milisNv5;

    //ENCERRA JOGO AO BATER O LIMITE
    if(milisNv5 && segsNv5 == 0){
        gameOver();
    }

}
//TIME HANDLER NIVEL - 4
timerNv4 = () => {

    //DECREMENTA O TEMPO
    for(i=0; i <= 3; i++){
        do{
            milisNv4--;
            
        }while(milisNv4 < 0)
    
        if(milisNv4 == 0){
            segsNv4--;
            milisNv4 = 90;
        }
    }

    document.getElementById('crono').innerText = segsNv4 + " : " + milisNv4;

    //ENCERRA JOGO AO BATER O LIMITE
    if(milisNv4 && segsNv4 == 0){
        gameOver();
    }

}
//TIME HANDLER NIVEL - 3
timerNv3 = () => {

    //DECREMENTA O TEMPO
    for(i=0; i <= 2; i++){
        do{
            milisNv3--;
            
        }while(milisNv3 < 0)
    
        if(milisNv3 == 0){
            segsNv3--;
            milisNv3 = 90;
        }
    }

    document.getElementById('crono').innerText = segsNv3 + " : " + milisNv3;

    //ENCERRA JOGO AO BATER O LIMITE
    if(milisNv3 && segsNv3 == 0){
        gameOver();
    }

}
//TIME HANDLER NIVEL - 2
timerNv2 = () => {

    //DECREMENTA O TEMPO
    for(i=0; i <= 3; i++){
        do{
            milisNv2--;
            
        }while(milisNv2 < 0)
    
        if(milisNv2 == 0){
            segsNv2--;
            milisNv2 = 90;
        }
    }

    document.getElementById('crono').innerText = segsNv2 + " : " + milisNv2;

    //ENCERRA JOGO AO BATER O LIMITE
    if(milisNv2 && segsNv2 == 0){
        gameOver();
    }

}
//TIME HANDLER NIVEL - 1
timerNv1 = () => {

    //DECREMENTA O TEMPO
    for(i=0; i <= 3; i++){
        do{
            milisNv1--;//99
            
        }while(milisNv1 < 0)
    
        if(milisNv1 == 0){
            segsNv1--;
            milisNv1 = 90;
        }
    }

    document.getElementById('crono').innerText = segsNv1 + " : " + milisNv1;

    //ENCERRA JOGO AO BATER O LIMITE
    if(milisNv1 && segsNv1 == 0){
        gameOver();
    }

}

/*FUNÇÕES DO JOGO*/
/*6-FUNÇÃO QUE TRABALHA PONTUAÇÃO + FUNCIONAMENTO DOS NÍVEIS*/
pontuador = () => {

    //INCREMENTA A CADA PONTO
    contaPontos++;
    
    //INCREMENTA A CADA PONTO SEM ZERAR
    pontosDisplay =+ contaPontos;
    document.getElementById('pts').innerText  = pontosDisplay;
    
    //TIRA DIFERENÇA PARA ENTRAR NA CONDICIONAL
    dif = contaPontos - pontosAcumulados;/**/
    console.log(dif);
    if(dif == 10){
        pontosAcumulados =+ contaPontos;
        nivel++;
        document.getElementById('nv').innerText = nivel;

        //TEMPO POR NÍVEL
        if(nivel == 2){
            interval = setInterval(timerNv2, 1000);
        }else if(nivel == 3){
            interval = setInterval(timerNv3, 1000);
        }else if(nivel == 4){
            interval = setInterval(timerNv4, 1000);
        }else if(nivel == 5){
            interval = setInterval(timerNv5, 1000);
        }else if(nivel == 6){
            interval = setInterval(timerNv6, 1000);
        }
    }

    continuaJogo();

}

/*5-FUNÇÃO ENCERRA O JOGO AO CLICAR NO BTN ERRADO*/
gameOver = () => {
    //PARA CRONOMETRO
    clearInterval(interval);
    milis = 0;
    segs = 0; 
    mins = 0;
    //ZERA CRONOMETRO
    document.getElementById('crono').innerHTML = '';
    
    document.getElementById('initJogo').innerText = 'RESTART';

    //ALTERA TEXTO DO ALVO PARA "GAME OVER"
    document.getElementById('alvoTitle').innerText = ' ';
    document.getElementById('alvo').innerText = 'Game Over!';
    document.getElementById('alvo').style.color = 'red';

    //DESABILITA BOTÕES
    document.getElementById('9').disabled = true;
    document.getElementById('8').disabled = true;
    document.getElementById('7').disabled = true;
    document.getElementById('6').disabled = true;
    document.getElementById('5').disabled = true;
    document.getElementById('4').disabled = true;
    document.getElementById('3').disabled = true;
    document.getElementById('2').disabled = true;
    document.getElementById('1').disabled = true;

    //RESETA JOGO AO CLICAR NO BOTÃO RESTART
    document.getElementById('initJogo').onclick = () => {window.location = 'index.html';}

}

/*4-FUNÇÃO CONTINUA O JOGO AO CLICAR NO ALVO*/
continuaJogo = () => {
    setAlvo();
}

/*3-FUNÇÃO DETERMINA ALVO DA JOGADA + MECÂNICA DO JOGO*/
setAlvo = () => {

    //SELETOR DE CORES
    var colorSelector = (Math.random().toFixed(1)) * 10;
    //SELETOR DE ALVO
    var wordSelector = (Math.random().toFixed(1)) * 10;

    //DETERMINA ALVO
    if(colorSelector == 1){

        alvo.style.color = listaCores.cores.verde;
        document.getElementById('9').style.backgroundColor = listaCores.cores.verde;
        /**/

        //CONTINUA O JOGO
        document.getElementById('9').onclick = () => pontuador();

        //DETERMINA COR PARA OS DEMAIS BTNS
        document.getElementById('8').style.backgroundColor = listaCores.cores.amarelo;
        document.getElementById('7').style.backgroundColor = listaCores.cores.rosa;
        document.getElementById('6').style.backgroundColor = listaCores.cores.cinza;
        document.getElementById('5').style.backgroundColor = listaCores.cores.branco;
        document.getElementById('4').style.backgroundColor = listaCores.cores.laranja;
        document.getElementById('3').style.backgroundColor = listaCores.cores.vermelho;
        document.getElementById('2').style.backgroundColor = listaCores.cores.marrom;
        document.getElementById('1').style.backgroundColor = listaCores.cores.azul;
        
        //ENCERRA O JOGO 
        document.getElementById('8').onclick = () => gameOver(); 
        document.getElementById('7').onclick = () => gameOver(); 
        document.getElementById('6').onclick = () => gameOver(); 
        document.getElementById('5').onclick = () => gameOver(); 
        document.getElementById('4').onclick = () => gameOver(); 
        document.getElementById('3').onclick = () => gameOver(); 
        document.getElementById('2').onclick = () => gameOver(); 
        document.getElementById('1').onclick = () => gameOver(); 

    }else if(colorSelector == 2){

        alvo.style.color = listaCores.cores.amarelo;
        document.getElementById('8').style.backgroundColor = listaCores.cores.amarelo;
        /**/

        //CONTINUA O JOGO
        document.getElementById('8').onclick = () => pontuador();

        //DETERMINA COR PARA OS DEMAIS BTNS
        document.getElementById('9').style.backgroundColor = listaCores.cores.marrom;
        // 8        
        document.getElementById('7').style.backgroundColor = listaCores.cores.cinza;
        document.getElementById('6').style.backgroundColor = listaCores.cores.rosa;
        document.getElementById('5').style.backgroundColor = listaCores.cores.branco;
        document.getElementById('4').style.backgroundColor = listaCores.cores.azul;
        document.getElementById('3').style.backgroundColor = listaCores.cores.vermelho;
        document.getElementById('2').style.backgroundColor = listaCores.cores.verde;
        document.getElementById('1').style.backgroundColor = listaCores.cores.laranja;

        //ENCERRA O JOGO 
        document.getElementById('9').onclick = () => gameOver(); 
        document.getElementById('7').onclick = () => gameOver(); 
        document.getElementById('6').onclick = () => gameOver(); 
        document.getElementById('5').onclick = () => gameOver(); 
        document.getElementById('4').onclick = () => gameOver(); 
        document.getElementById('3').onclick = () => gameOver(); 
        document.getElementById('2').onclick = () => gameOver(); 
        document.getElementById('1').onclick = () => gameOver(); 

    }else if(colorSelector == 3){

        alvo.style.color = listaCores.cores.rosa;
        document.getElementById('7').style.backgroundColor = listaCores.cores.rosa;
        /**/

        //CONTINUA O JOGO
        document.getElementById('7').onclick = () => pontuador();

        //DETERMINA COR PARA OS DEMAIS BTNS
        document.getElementById('9').style.backgroundColor = listaCores.cores.laranja;
        document.getElementById('8').style.backgroundColor = listaCores.cores.azul;
        // 7      
        document.getElementById('6').style.backgroundColor = listaCores.cores.verde;
        document.getElementById('5').style.backgroundColor = listaCores.cores.marrom;
        document.getElementById('4').style.backgroundColor = listaCores.cores.branco;
        document.getElementById('3').style.backgroundColor = listaCores.cores.amarelo;
        document.getElementById('2').style.backgroundColor = listaCores.cores.vermelho;
        document.getElementById('1').style.backgroundColor = listaCores.cores.cinza;    

        //ENCERRA O JOGO 
        document.getElementById('9').onclick = () => gameOver(); 
        document.getElementById('8').onclick = () => gameOver(); 
        document.getElementById('6').onclick = () => gameOver(); 
        document.getElementById('5').onclick = () => gameOver(); 
        document.getElementById('4').onclick = () => gameOver(); 
        document.getElementById('3').onclick = () => gameOver(); 
        document.getElementById('2').onclick = () => gameOver(); 
        document.getElementById('1').onclick = () => gameOver(); 

    }else if(colorSelector == 4){
        
        alvo.style.color = listaCores.cores.marrom;
        document.getElementById('6').style.backgroundColor = listaCores.cores.marrom;
        /**/

        //CONTINUA O JOGO
        document.getElementById('6').onclick = () => pontuador();
        
        //DETERMINA COR PARA OS DEMAIS BTNS
        document.getElementById('9').style.backgroundColor = listaCores.cores.azul;
        document.getElementById('8').style.backgroundColor = listaCores.cores.verde;
        document.getElementById('7').style.backgroundColor = listaCores.cores.rosa;
        // 6
        document.getElementById('5').style.backgroundColor = listaCores.cores.vermelho;
        document.getElementById('4').style.backgroundColor = listaCores.cores.amarelo;
        document.getElementById('3').style.backgroundColor = listaCores.cores.branco;
        document.getElementById('2').style.backgroundColor = listaCores.cores.cinza;
        document.getElementById('1').style.backgroundColor = listaCores.cores.laranja; 
        
        //ENCERRA O JOGO 
        document.getElementById('9').onclick = () => gameOver(); 
        document.getElementById('8').onclick = () => gameOver(); 
        document.getElementById('7').onclick = () => gameOver(); 
        document.getElementById('5').onclick = () => gameOver(); 
        document.getElementById('4').onclick = () => gameOver(); 
        document.getElementById('3').onclick = () => gameOver(); 
        document.getElementById('2').onclick = () => gameOver(); 
        document.getElementById('1').onclick = () => gameOver(); 


    }else if(colorSelector == 5){

        alvo.style.color = listaCores.cores.azul;
        document.getElementById('5').style.backgroundColor = listaCores.cores.azul;
        /**/

        //CONTINUA O JOGO
        document.getElementById('5').onclick = () => pontuador();

        //DETERMINA COR PARA OS DEMAIS BTNS
        document.getElementById('9').style.backgroundColor = listaCores.cores.rosa;
        document.getElementById('8').style.backgroundColor = listaCores.cores.laranja;
        document.getElementById('7').style.backgroundColor = listaCores.cores.cinza;
        document.getElementById('6').style.backgroundColor = listaCores.cores.verde;
        // 5
        document.getElementById('4').style.backgroundColor = listaCores.cores.vermelho;
        document.getElementById('3').style.backgroundColor = listaCores.cores.marrom;
        document.getElementById('2').style.backgroundColor = listaCores.cores.amarelo;
        document.getElementById('1').style.backgroundColor = listaCores.cores.branco; 
        
        //ENCERRA O JOGO 
        document.getElementById('9').onclick = () => gameOver(); 
        document.getElementById('8').onclick = () => gameOver(); 
        document.getElementById('7').onclick = () => gameOver(); 
        document.getElementById('6').onclick = () => gameOver(); 
        document.getElementById('4').onclick = () => gameOver(); 
        document.getElementById('3').onclick = () => gameOver(); 
        document.getElementById('2').onclick = () => gameOver(); 
        document.getElementById('1').onclick = () => gameOver(); 


    }else if(colorSelector == 6){

        alvo.style.color = listaCores.cores.laranja;
        document.getElementById('4').style.backgroundColor = listaCores.cores.laranja;
        /**/
        
        //CONTINUA O JOGO
        document.getElementById('4').onclick = () => pontuador();

        //DETERMINA COR PARA OS DEMAIS BTNS
        document.getElementById('9').style.backgroundColor = listaCores.cores.vermelho;
        document.getElementById('8').style.backgroundColor = listaCores.cores.amarelo;
        document.getElementById('7').style.backgroundColor = listaCores.cores.marrom;
        document.getElementById('6').style.backgroundColor = listaCores.cores.rosa;
        document.getElementById('5').style.backgroundColor = listaCores.cores.cinza;
        // 4
        document.getElementById('3').style.backgroundColor = listaCores.cores.branco;
        document.getElementById('2').style.backgroundColor = listaCores.cores.verde;
        document.getElementById('1').style.backgroundColor = listaCores.cores.azul; 

        //ENCERRA O JOGO 
        document.getElementById('9').onclick = () => gameOver(); 
        document.getElementById('8').onclick = () => gameOver(); 
        document.getElementById('7').onclick = () => gameOver(); 
        document.getElementById('6').onclick = () => gameOver(); 
        document.getElementById('5').onclick = () => gameOver(); 
        document.getElementById('3').onclick = () => gameOver(); 
        document.getElementById('2').onclick = () => gameOver(); 
        document.getElementById('1').onclick = () => gameOver(); 

    }else if(colorSelector == 7){

        alvo.style.color = listaCores.cores.cinza;
        document.getElementById('3').style.backgroundColor = listaCores.cores.cinza;
        /**/

        //CONTINUA O JOGO
        document.getElementById('3').onclick = () => pontuador();

        //DETERMINA COR PARA OS DEMAIS BTNS
        document.getElementById('9').style.backgroundColor = listaCores.cores.vermelho;
        document.getElementById('8').style.backgroundColor = listaCores.cores.laranja;
        document.getElementById('7').style.backgroundColor = listaCores.cores.azul;
        document.getElementById('6').style.backgroundColor = listaCores.cores.rosa;
        document.getElementById('5').style.backgroundColor = listaCores.cores.verde;
        document.getElementById('4').style.backgroundColor = listaCores.cores.amarelo;
        // 3
        document.getElementById('2').style.backgroundColor = listaCores.cores.branco;
        document.getElementById('1').style.backgroundColor = listaCores.cores.marrom; 

        //ENCERRA O JOGO 
        document.getElementById('9').onclick = () => gameOver(); 
        document.getElementById('8').onclick = () => gameOver(); 
        document.getElementById('7').onclick = () => gameOver(); 
        document.getElementById('6').onclick = () => gameOver(); 
        document.getElementById('5').onclick = () => gameOver(); 
        document.getElementById('4').onclick = () => gameOver(); 
        document.getElementById('2').onclick = () => gameOver(); 
        document.getElementById('1').onclick = () => gameOver(); 

    }else if(colorSelector == 8){

        alvo.style.color = listaCores.cores.vermelho;
        document.getElementById('2').style.backgroundColor = listaCores.cores.vermelho;
        /**/
        
        //CONTINUA O JOGO
        document.getElementById('2').onclick = () => pontuador();

        //DETERMINA COR PARA OS DEMAIS BTNS
        document.getElementById('9').style.backgroundColor = listaCores.cores.amarelo;
        document.getElementById('8').style.backgroundColor = listaCores.cores.verde;
        document.getElementById('7').style.backgroundColor = listaCores.cores.rosa;
        document.getElementById('6').style.backgroundColor = listaCores.cores.marrom;
        document.getElementById('5').style.backgroundColor = listaCores.cores.azul;
        document.getElementById('4').style.backgroundColor = listaCores.cores.cinza;//
        document.getElementById('3').style.backgroundColor = listaCores.cores.laranja;
        //2
        document.getElementById('1').style.backgroundColor = listaCores.cores.branco; 

         //ENCERRA O JOGO 
         document.getElementById('9').onclick = () => gameOver(); 
         document.getElementById('8').onclick = () => gameOver(); 
         document.getElementById('7').onclick = () => gameOver(); 
         document.getElementById('6').onclick = () => gameOver(); 
         document.getElementById('5').onclick = () => gameOver(); 
         document.getElementById('4').onclick = () => gameOver(); 
         document.getElementById('3').onclick = () => gameOver(); 
         document.getElementById('1').onclick = () => gameOver(); 


    }else if(colorSelector == 9){

        alvo.style.color = listaCores.cores.branco;
        document.getElementById('1').style.backgroundColor = listaCores.cores.branco;
        /**/

        //CONTINUA O JOGO
        document.getElementById('1').onclick = () => pontuador();

        //DETERMINA COR PARA OS DEMAIS BTNS
        document.getElementById('9').style.backgroundColor = listaCores.cores.azul;
        document.getElementById('8').style.backgroundColor = listaCores.cores.amarelo;
        document.getElementById('7').style.backgroundColor = listaCores.cores.vermelho;
        document.getElementById('6').style.backgroundColor = listaCores.cores.marrom;
        document.getElementById('5').style.backgroundColor = listaCores.cores.verde;
        document.getElementById('4').style.backgroundColor = listaCores.cores.laranja;
        document.getElementById('3').style.backgroundColor = listaCores.cores.cinza;//
        document.getElementById('2').style.backgroundColor = listaCores.cores.rosa;

        //ENCERRA O JOGO 
        document.getElementById('9').onclick = () => gameOver(); 
        document.getElementById('8').onclick = () => gameOver(); 
        document.getElementById('7').onclick = () => gameOver(); 
        document.getElementById('6').onclick = () => gameOver(); 
        document.getElementById('5').onclick = () => gameOver(); 
        document.getElementById('4').onclick = () => gameOver(); 
        document.getElementById('3').onclick = () => gameOver(); 
        document.getElementById('2').onclick = () => gameOver(); 

    }

    //DETERMINA NOME DO ALVO 
    if(wordSelector == 1){
        alvo.innerHTML = listaCores.nomeCores.verde;
    }else if(wordSelector == 2){
        alvo.innerHTML = listaCores.nomeCores.amarelo;
    }else if(wordSelector == 3){
        alvo.innerHTML = listaCores.nomeCores.rosa;
    }else if(wordSelector == 4){
        alvo.innerHTML = listaCores.nomeCores.marrom;
    }else if(wordSelector == 5){
        alvo.innerHTML = listaCores.nomeCores.azul;
    }else if(wordSelector == 6){
        alvo.innerHTML = listaCores.nomeCores.laranja;
    }else if(wordSelector == 7){
        alvo.innerHTML = listaCores.nomeCores.cinza;
    }else if(wordSelector == 8){
        alvo.innerHTML = listaCores.nomeCores.vermelho;
    }else if(wordSelector == 9){
        alvo.innerHTML = listaCores.nomeCores.preto;
    }

}

/*2-FUNÇÃO QUE INICIA O JOGO*/
initJogo = () => {
    interval = setInterval(timerNv1, 500);
    setAlvo();
}

/*1-FUNÇÃO BOTÃO INICIAR JOGO*/
document.getElementById('initJogo').onclick = () => { 
    initJogo();
}