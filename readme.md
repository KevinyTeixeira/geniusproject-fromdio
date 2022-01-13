# :books: Genius Game Project

Este projeto faz parte de uma das atividades a serem executadas para o **Bootcamp Eduzz Fullsatck Developer**, oferecido pela **Digital Innovation One - DIO**. Para mais informações, vá para o [**repositório principal**](https://github.com/KevinyTeixeira/dio-desafio-github).

A DIO ensinou uma forma simplificada de criar o jogo do `Genius`, entretanto como meu objetivo é aprender ao máximo, fiz diversas outras pesquisas e segui formas diferentes de desenvolve-lo. Neste momento em que escrevo essa espécie de "relatório", eu já terminei o jogo. 

Agora, pretendo registrar aqui pontos importantes para mim, que me ajude a compreendê-lo e me possibilite retornar a esse projeto futuramente. Eu aprendi muito durante o seu desenvolvimento, e vou registrar aqui "insights "que até o presente momento eu não havia percebido!

Futuramente, talvez implementar uma funcionalidade para possibilitar um **modo vs de jogador contra jogador**, ou ainda uma **leaderboard** :facepunch:!



## :video_game: > 0. O Jogo

 Não quer perder tempo e deseja conferir logo o resultado final? [Clique aqui!](https://kevinyteixeira.github.io/geniusproject-fromdio/)



## :bookmark_tabs: > 1. Fontes

Abaixo, estão listadas algumas das minhas `fontes de pesquisa`, `assets` e `conhecimento` que utilizei nesse projeto:

- `Estrutura, código, organização, indentação e game base` de [Inkasa Dev - YOUTUBE](https://www.youtube.com/watch?v=iPI-exnefBo&ab_channel=InkasaDev);

- `Partículas Background.js` de [FIAP](https://on.fiap.com.br/index.php);
- `Animações do CSS` de [Animista](https://animista.net/play/text/tracking-in/tracking-in-contract-bck);



## :bar_chart: > 2. Arquivos SRC (Source Code)

Ou claro, mais conhecido como código fonte, vou pontuar aqui informações sobre cada um dos tipos de arquivos, ou seja, `HTML`, `CSS` e `JavaScript`.



### :orange_book: 2.1 Index.html

#### 	**2.1.1 `<head>`**

Neste arquivo, você poderá conferir as seguintes linhas de código na `<head>`:

```html
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/jpg" href="../favicon.ico"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
	<script type="module" src="script.js"></script>
	<style> /* Estamos importando uma fonte Google */
		@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald&family=Share+Tech&display=swap');
	</style> 
	<title>Genius Game</title>
</head>
```

##### - Tag `<viewport>`

​	A primeira coisa que quero destacar, é a **meta tag `viewport`**, eu a descobri enquanto reparava nas configurações utilizadas pelo **Inkasa Dev** em seu documento html. Essa tag foi introduzida pela Apple, que desde então tem sido adotada por mais desenvolvedores e é responsável por garantir mais responsividade as aplicações. Ela funciona da seguinte forma:

```html
<!-- 1. A TAG "viewport" -->

<!-- Estrutura Padrão: "content", é que lhe permite entrar com uma série de valores separados por vírgula para garantir o comportamento adequado.  -->
<meta name="viewport" content="">

<!-- Você está definindo um layout de 320px -->
<meta name="viewport" content="width=320"> 
<!-- Para Layouts flexíveis, você define que a largura do viewport será baseada na largura do dispositivo -->
<meta name="viewport" content="width=device-width">
<!-- Para se certificar que o seu layout será mostrado como você planejou, você pode definir o nível de zoom inicial -->
<meta name="viewport" content="initial-scale=1">
<!-- Você ainda pode ir mais longe evitar que o usuário seja capaz de dar zoom -->
<meta name="viewport" content="maximum-scale=1">

<!-- CENÁRIO... perfeito?! -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- 
	A essa altura você já deve ter reparado que chegamos ao resultado do nosso jogo... entretanto, HÁ PROBLEMAS! Para mais confira aqui https://webdesign.tutsplus.com/pt/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972;
-->
```

##### - `Normalize.css`

​	Outro ponto de destaque, vai para a importação do **`normalize.css`**, que padroniza e fornece consistência a todos os elementos da aplicação nos mais diversos navegadores.

```html
<!-- 2. O Normalize.css -->

<!-- Basta você importar o normalize, antes mesmo de incluir o seu próprio estilo! -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
```

#### 2.1.2 `<body>`

Agora vamos conferir o que há em `<body>`:

```html
<body>
	<div class="background">
		<canvas class="canvas-particles" height="1125" width="1594"
		style="left: 0px; top: 0px; position: absolute; height: 1125px; width: 1594px;">
	</div>
	<header>
		<h1 id="title">Genius Game</h1>
	</header>
		<div class="genius__options">
			<div class="gui">
				<div class="group">
					<div class="gui__counter">--</div>
					<p class="gui__label">count</p>
				</div> <!-- .group -->
				<div class="group">
					<div class="gui__btn gui__btn--start"></div>
					<p class="gui__label">start</p>
				</div> <!-- .group -->
			</div> <!-- .gui -->
		</div> <!-- .genius__options -->
		<div class="main-game">
			<div class="genius">
				<div class="genius__color genius__color--blue"></div>
				<div class="genius__color genius__color--yellow"></div>
				<div class="genius__color genius__color--red"></div>
				<div class="genius__color genius__color--green"></div>
			</div> <!-- .genius -->
		</div> <!-- .main-game -->
	<footer>
		<h2 id="footer">Powered by Keviny Teixeira for Eduzz Full Stack Developer Bootcamp!</h2>
	</footer>
</body>
```

##### - `CANVAS`

​	Outro ponto de destaque, vai para a importação do **`normalize.css`**, que padroniza e fornece consistência a todos os elementos da aplicação nos mais diversos navegadores.

O primeiro contato que temos é com a `<div>` background, que é responsável por classificar a tag **`<canvas>`**, mas afinal o que é o **Canvas**? Para responder isso, vamos usar informações do **[devmedia.com.br](https://www.devmedia.com.br/html5-a-tag-canvas/25413)**.

A canvas nada mais é do que um espaço onde podemos desenhar elementos específicos, formas geométricas e imagens, por exemplo, através de script (javascript geralmente). Também podemos usar CSS para a tag .

Por JavaScript podemos acessar **métodos da canvas** que desenham formas, linhas, caracteres e adicionar imagens.

```html
<!-- 1. CANVAS -->

<!-- Aqui, estamos definindo uma altura/largura, e aplicando um estilo de borda usando css no HTML -->
<canvas id="idCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
Se seu navegador não suportar HTML5 você verá esta mensagem.
</canvas>

<!-- No nosso jogo: -->
		<canvas class="canvas-particles" height="1125" width="1594"
		style="left: 0px; top: 0px; position: absolute; height: 1125px; width: 1594px;">
```

```javascript
/* CANVAS NO JAVASCRIPT
 Com o JavaScript, vamos desenhar!
	- Para começar, a canvas é composta por pixels como em um plano cartesiano, sendo x = 0 (eixo horizontal),  e y = 0 (eixo vertical). Isso significa que a posicição inicial, é o canto superior esquerdo. */

// Antes de começar, também é importante observar que devemos selecionar a canvas id, e capturar o contexto gráfico da mesma utilizando o método getContext(), alocando-a em uma variável fica mais fácil de manipulá-la posteriormente, tal como abaixo:
	var c = document.getElementById('idCanvas');
	var ctx = c.getContext("2d");

// Agora para desenhar, precisamos utilizar no mínimo 2 métodos do canvas, a depender da forma geométrica intentada, mas todos eles terminam com:
    - stroke(): desenha; 

/* LINHA | moveTo(x,y), lineTo(x,y): define as coordenadas para traçar a linha; */
    ctx.moveTo(10,10); // define o ponto inicial da linha;
    ctx.lineTo(150,50);// define o ponto final da linha;
    ctx.stroke();// desenha a linha

/* CÍRCULO | arc(x,uy,r,aInicial,aFinal): define as coordenadas onde o centro do círculo será posicionado, o raio e os ângulos em relação aos quadrantes do círculo; */
    ctx.arc(70,18,15,0,Math.PI * 2); // Note que estamos usando Math.PI * 2 onde deveríamos passar o ângulo final, isso nada mais é que uma forma de desenhar um circulo completo. Você pode experimentar mudar esses valores e ver como fica.
    ctx.stroke();

/* RETÂNGULO | rect(x,y,largura,altura): define os parâmetros do retângulo; */
    ctx.rect(20,20,150,50);
    ctx.stroke();

/* IMAGEM | drawImage(img,x,y): precisaremos instanciar um objeto do tipo Image e adicionar ao método onload dela uma função que chama o método drawImage(Image,x,y) e, finalmente, dizer para o objeto do tipo Image qual a url da imagem; */
    var img=new Image();
    img.onload = function(){
    ctx.drawImage(img,0,0);
    };
    img.src="img.png";    
```

##### - Padrão CSS BEM

​	A forma como as classes CSS foram nomeadas, não são por acaso. Nesse projeto, aprendemos a utilizar a metodologia conhecida como **Block Element Modifier - BEM**, que visa criar componentes reusáveis e padronizar a forma como os códigos são escritos. Essa é sua estrutura sintática:

```html
<!-- 2. BEM - Block Element Modifier -->

<!-- A organização é feita Hierarquicamente por BLOCO - ELEMENTO - MODIFICADOR -->
<div class= "block"> 
    <div class = "block__image"></div>
    <div class = "block__description"></div>
    <div class = "block__button--success"></div>
    <div class = "block__button--back"></div>
</div> <!-- .bloco -->
```



### :blue_book: 2.2 Style.css

#### 	**- `<border-box>`Snippet** 

​	A primeira coisa que encontramos no CSS é um **Snippet** (termo utilizado entre os programadores que significa pequenos trechos de código reutilizáveis). Ele se apresenta da seguinte forma:

```css
/* 1. BOX-SIZING*/

/* Essa propriedade altera o box model padrão, usada para calcular larguras (widths) e alturas (heights) dos elementos. É possível usar essa propriedade para emular o comportamento dos navegadores (browsers) que não suportam corretamente a especificação da propriedade CSS box model.

As variantes são:
- content-box: o estilo padrão do CSS, admite que a largura e altura são, respectivamente | [X] Conteúdo, [-] Padding, [-] Border, [-] Margem.
- padding-box: o estilo alternativo do CSS, admite que a largura e altura são, respectivamente | [X] Conteúdo, [X] Padding, [-] Border, [-] Margem.
- border-box: o estilo alternativo do CSS, admite que a largura e altura são, respectivamente | [X] Conteúdo, [X] Padding, [X] Border, [-] Margem.
*/

/* Com os *, faz com que o código se replique a todos os elementos, inclusive nos pseudo-elementos ::before e ::after */
*,
*::before,
*::after {
	box-sizing: border-box;
}
```



#### 	**- Estrutura Básica** 

​	Como boa-prática, adotei uma estrutura padrão a fim de manter o código organizado e facilitar a manutenção. A estrutura básica é a seguinte:

```css
/* 2. BASIC CSS PATTERN*/

/**********************************/
/* IMPORTS
/**********************************/

@import url('.1.');
@import url('.2.');

/**********************************/
/* SUMARY
    
/* 0. VARIABLES
/* 1. TAGS + ANIMATIONS 
/* 2. BODY (Não inclui <body>)
/* 3. OTHER CONTENTS...
/**********************************/

/**********************************/
/* 0. VARIABLES
/**********************************/

:root {
    
/* TODAS AS CORES UTILIZADAS NO PROJETO */
	--clr-first-blue: #2003c5;
	--clr-second-blue: #1f60eb;
    --clr-third-blue: #6464a5;
    
/*  CONFIGURAÇÕES ADICIONAIS */
    --size: 48rem;
    --border: 1.5rem solid var(--first-blue);
    
}
    
/**********************************/
/* 1. TAGS
/**********************************/

html, footer, body, header{}
    
@Keyframes {} /*  ANIMATIONS */
    
/**********************************/
/* 2. BODY
/**********************************/

.class1, .class2, .class3 {}
#id1, #id2, #id3 {}

/**********************************/
/* 3. OTHER CONTENTS...
/**********************************/
    
.class4, .class5, .class6 {}
#id4, #id2, #id3 {}
```



#### 	**- Variáveis no CSS** 

​	É possível utilizar variávies no CSS, e são muito úteis especialmente para parametrizar configurações, cores, ou qualquer informação passível de ajuste!

```css
/* 3. VARIABLES*/

/* Para criar uma variável, basta inserir a seguinte notação: --atributo-subatributo.
- Entretanto as variáveis devem ser declaradas dentro de um elemento do CSS, portanto, você pode optar por colocá-los em <html>, ou em :root{}. O Root por sua vez, apesar de ser o mesmo que <html>, é mais utilizado devido a sua especificidade (basicamente possui uma prioridade maior)!
*/

: root{
    --page-width: 5rem; 
	--page-height: 5rem;
    
    --clr-background: #222222;
}

/* Para chamar as variávies nos elementos posteriores, basta: */

body {
    width: var(--page-width);
	height: var(--page-height);
	background-color: var(--clr-background);
}
```



#### 	**- Unidade Px | Em | Rem** 

​	Você deve ter reparado que no projeto, ao invés de **px (pixels)**, utilizamos a unidade de medida **rem**. Mas afinal, o que é isso? 

```css
/* 4. PIXEL, EM ou REM*/

/* PIXEL: é uma unidade ESTÁTICA, antiga e de mais fácil utilização dentro do mundo da programação. */
body {
    background-size: 500px;
    }
    
/* EM: é uma unidade VARIÁVEL, que leva em consideração o contexto. É útil para quando você quer que um ou mais elementos se ajustem, a depender de seu contexto. Para chegar ao resultado deve-se calcular:
    EM = target / context;
    target, é o valor do próprio elemento
    context, é o contexto onde o elemento está inserido */
body {
    font: 14px verdana, arial, tahoma, sans-serif;
    }
p {
    /* font-size: 18px; EM = 18px / 14px = 1.28em  */
	font-size: 1.28em;
	}

/* REM: é uma unidade VARIÁVEL, a diferença é que o contexto, sempre será o valor de <body> (ou ROOT). Isso facilita os cálculos, já que o valor de body é mais estático:
    REM = target / body-context;
    target, é o valor do próprio elemento
    body-context, é o contexto onde o elemento está inserido */
body {
    font: 14px verdana, arial, tahoma, sans-serif;
}
div {
    /* font-size: 12px; REM = 12 / 14 = 0.86rem */
    font-size: 0.86rem;
}
p {
    /* font-size: 10px; REM = 10 / 14 = 0.71rem */ 
    font-size: 1.28em;
}
```



#### 	**- Boas Práticas** 

​	Há muitos elementos no arquivo css que caracterizam as boas práticas, 'técnicas' e o viés de responsividade para a aplicação. Vou listá-los abaixo como registro: 

```css
/* 5. Uso de "%" em font-size na TAG <html> */
html {
    font-size: 62.6%;
}

/* 6. Uso da propriedade "overflow: hidden" na TAG <body> */
body {
    overflow: hidden; /* Se trata da barra de rolagem */
}

/* 7. Centralizando o jogo no centro da página */
.main-game {
    width: var(--game-size);  /* Usando uma variável definida em :root, a dimensão deve ser menor do que a classe pai */
    margin-left: auto;
    margin-right: auto;
}

/* 8. Duas animações num único elemento */
#title{
	animation:
		glow 1.5s linear infinite,
		tracking-in-contract-bck 5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

/* 9. Tipos de animações e suas compatibilidades */
-webkit-animation:glow 1.5s linear infinite; /* Safari & Chrome */
-moz-animation:glow 1.5s linear infinite; /* Firefox */
-ms-animation:glow 1.5s linear infinite; /* Internet Explorer */
-o-animation:glow 1.5s linear infinite; /* Opera */
animation:glow 1.5s linear infinite; /* W3C | Maximum Compatibility */


/* 10. Display Flex e Flex Wrap */
/* Flex Contâiner é uma assunto importante e com muitas informações para entender seu comportamento, consulte: https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox */
.genius {
	width: var(--game-size);
	height: var(--game-size);
	display: flex; /* Flex alinha todos as classes filhos em linha, não há quebra de linhas */
	flex-wrap: wrap; /* Faz com que cada linha, seja considerado um novo contêiner flex */
}

/* 11. Criar o efeito de Movimento no botão START */
/* Para fazer isso, o que foi feito é incluir a propriedade box-shadow no botão, e ao ativá-lo, removemos a sombra e o deslocamos ligeiramente para baixo */
.gui__btn {
    box-shadow: 0 .2rem .4rem #222222;
    width: 3rem;
    height: 3rem;
    border-radius: 5rem;
    border: .3rem solid #444444;
    cursor: pointer;
}

.gui__btn:active {
    transform: translate(0, .3rem); /* faz com que o botão abaixe */
    box-shadow: none;
}

/* 12. Aplicando responsividade a fonte */
/* Para fazer isso, definimos que quando a largura da página for menor que 600px. diminuímos o tamanho da fonte para 45%. Isso ocorre porque como trabalhamos com REM durante todo o projeto, todo o jogo é alterado em função do <body>, lembra?! */
@media (max-width: 600px) {
    html {
            font-size: 45%;
    }
}
```



###  :ledger: 2.3 Script.js



#### 	**- Variáveis**

Para começar a organizar as "pontas soltas" do nosso projeto, a primeira coisa fazer foi criar as variáveis e os seletores que serão usados por todo o projeto:

```javascript
/*******************************************/
/* 1. DEFINE VARIABLES
/*******************************************/
var _data = {
    timeout: undefined, // para controlar o tempo de resposta do usuário
    sounds: [], // os sons do jogo

    score: 0, // para controlar a pontuação
    gameSequence: [], // função que irá receber a sequência de cores do jogo, a sequência será guardada dentro dos arrays
    playerSequence: [] // função que irá receber a sequência de cores selecionadas pelo jogador, a sequência será alocada dentro dos arrays
};

// A chamada dessas variáveis será da seguinte forma: _data.timeout/score/gameSequence...

/*******************************************/
/* 2. DOCUMENT SELECTORS
/*******************************************/
// Documento.querySelector é o método para acessar as classes no nosso arquivo .css. Ao alocá-los em variávies, podemos fazer essa chamada somente com "_gui.start/colors/counter"
const _gui = {
    start: document.querySelector(".gui__btn--start"),
    colors: document.querySelectorAll(".genius__color"), // repare que aqui destacamos 'SelectorAll', significa que colors englobará todas as classes que possuírem esse nome!
    counter: document.querySelector(".gui__counter")
}
```



#### 	**- :computer_mouse:Funções de Clique**

Para começar, devemos configurar o nosso jogo para entender que ao receber um "clique" do usuário, determinada ação deve ser executada. Essas ações serão criadas posteriormente em funções.

```javascript
/*******************************************/
/* 4. GAME
/*******************************************/
// Para esse tipo de espera, usamos o '.addEventListener', que serve como uma "escuta" de alguma ação, para então executar outra coisa. Nesse caso, o 'click'.

// 4.1 Configura a ação do botão START
// Repare na chamada, '_gui.start', estamos indicando que a classe '.gui__btn--start' ao receber um "click", execute a função 'startGame()'.
_gui.start.addEventListener("click", () => {
    startGame();
});

// 4.2 Configura a ação do click sobre as cores!
// Repare na chamada, '_gui.colors', lembrando que nessa propriedade, guardamos todas as cores do jogo. Com isso, utilizamos o .forEach para percorrer e aplicar a "escuta" a todas as classes de cores e em seguida executar a função 'padListener'.
_gui.colors.forEach(pad => {
    pad.addEventListener("click", padListener);
});
```



#### 	**- :u6e80: Função `padListener`**

A função `padListener` é a primeira a ser encontrada devido a necessidade de que ela seja executa antes da "escuta" das cores, já que nosso código aplica as ações registradas no `padListener`. Eu sei eu sei, você deve estar pensando "mas é claro, a função está definida como `const` não permitindo que ela sofra o `hoisting`", mas acontece que mesmo ao defini-la como `var` para ser vista pelo escopo global, a função simplesmente deixa de funcionar e não consegui identificar o porquê. Tanto que com a função `starGame()` isso funcionou perfeitamente! 

Agora vamos conferir essa função:

```javascript
const padListener = (e) => { // Como eu disse, com var ela deixava de funcionar... lembra que padListener é chamada ao receber um clique de uma determinada cor? Então, o 'e' guarda a cor selecionada.
    
    
	if(!_data.playerCanPlay) // Ao utilizar o '!', lembre-se que na lógica, significa a negação da chamada. Ou seja "se o usuário não puder jogar, return".
		return; // ao somente colocar return, ela não será executada

    // Como descobrir qual som será tocado?
	let soundId;
	_gui.colors.forEach((pad, key) => { // Mais uma vez percorre o as classes de cores, para que na sequência, compare a cor encontrada (pad) com a cor selecionada pelo jogador (e.target)
		if(pad === e.target)
		soundId = key;
	});

	e.target.classList.add("genius__color--active"); // Adiciona o efeito de ativação na cor selecionada

	// _data.sounds[soundId].play();
	_data.playerSequence.push(soundId);

	setTimeout(() => { // Para permitir que o jogador perceba a cor "piscando", utilizamos um temporizador, para executar essa ação após 250ms
		e.target.classList.remove("genius__color--active"); // remove o efeito de ativação na cor selecionada

        // a cada interação, verificamos se a sequência que está sendo selecinada pelo jogador, é a sequência criada pelo jogo!
		const currentMove = _data.playerSequence.length - 1;
        
        // Uma coisa é a ID da cor, que é obtida usando o e.target. Agora para obter a posição do Array em que a ID está associada, usamos o _data.playerSequence.length -1, porque o Array começa em 0! Por exemplo: 
        // _data.playerSequence = [3] [2| 
        // _data.gameSequence = [3] [1]
        // _data.playerSequence.length = 2 - 1 = posição 1 do Array

		if(_data.playerSequence[currentMove] !== _data.gameSequence[currentMove]) { //  Se errar, faça...
			_data.playerCanPlay = false;
			disablePads();
			gameOver(_data.score);
		}
		else if(currentMove === _data.gameSequence.length - 1) { //  Se acertar, faça...
			newColor();
			playSequence();
		}

		waitForPlayerClick(); // Por fim, inclui um temporizador para verificar quanto tempo o jogador leva para responder!
	}, 250);
}
```



#### 	**- :u6e80: Função `playSequence`**

A função `playSequence` é responsável por tocar a sequência de cores que o computador criou. Ela não é responsável por criar uma nova cor e inserir no array `_data.gameSequence`, mas somente por repetir a sequência já existente!

```javascript
// PLAY GAME SEQUENCE
var playSequence = () => {
    let counter = 0,
        padOn = true; // informa se a cor está acesa ou apagado

    _data.playerSequence = []; // zera a sequência do jogador
    _data.playerCanPlay = false; // impede que o jogador faça algo enquanto a sequência é executada

    changePadCursor("auto");

    // Interval, é diferente de setTimeout(), o Interval executa um bloco específico de cógido, repetidas vezes com um intervalo fixo de chamadas! Nesse caso, a cada 350ms, enquanto todos os arrays de _data.gameSequence não tiverem sido percorridos! É importante notar também que essa função retorna um número, no qual estamos guardando na variável 'interval', para posteriormente interromper esse intervalo usando clearInterval(interval);
    const interval = setInterval(() => { 
        if(padOn) {
            if(counter === _data.gameSequence.length) { // Interrompe o Interval, quando o contador alcançar o número de Arrays de _data.gameSequence
                clearInterval(interval); // zera o intervalo
                disablePads();
                waitForPlayerClick();
                changePadCursor("pointer");
                _data.playerCanPlay = true;
                return;
            }

        const sndId = _data.gameSequence[counter]; // a variável counter percorrerá todos os Arrays de gameSequence, por consequência, retorna todas as ID's das cores a serem percorridas "ID 1[POS 0]"
        const pad = _gui.colors[sndId]; // com a informação acima, basta indicar que a ID obtida representa a cor
        // _data.sounds[sndId].play(); é a mesma id das músicas?
        pad.classList.add("genius__color--active"); // acende a cor obtida
        counter++;
        }
        else {
            disablePads();
        }

        padOn = !padOn; // inverte o valor de padOn;
    }, 350);
}
```

#### 	**- :u6e80: Função `newColor`**

A função `newColor` é responsável criar uma nova cor, e inserir no array `_data.gameSequence`. Na realidade o que ela faz é gerar um número de ID, para que posteriormente esse número corresponda ao número de uma das cores já definidas no início do nosso código (lá em `_gui.colors`), para checar isso observe o que há dentro de `_gui.colors`:

![image-20220113161034730](C:\Users\05725843181\AppData\Roaming\Typora\typora-user-images\image-20220113161034730.png)

Ou seja, 

	- **0** = Azul;
	- **1** = Amarelo;
	- **2** = Vermelho;
	- **3** = Verde;

Agora vamos ao código:

```javascript
// RANDOM A NEW COLOR
var newColor = () => {
    // Math.floor(2); // Arredonda o 2 quebrado para 2;
    // Math.ceil(); // Arrendonda sempre para cima;
    // Math.round(); // Arredonda igual a escola, 2.4 para baixo, 2.5 para cima;
    _data.gameSequence.push(Math.floor(Math.random() *4)); // O "push" sempre adiciona o elemento ao fim do Array
    _data.score++;

    setScore()
}
```



#### 	- :u6e80: Função `changeCursor`

A função `changeCursor` recebe como parâmetro (`cursorType`), que se refere a qual cursor será apresentado ao chamar essa função. Basicamente quando for invocada, nós informaremos qual cursor deve ser apresentado, e deixamos que a função faça o resto!

```javascript
const changeCursor = (cursorType) => {
    _gui.colors.forEach(pad => { // para cada cor...
        pad.style.cursor = cursorType; // aplica o tipo de cursor passado como parâmetro
    });
}

/* A chamada é feita dessa forma: changeCursor("auto"); 
	<auto>: O browser determina o cursor para ser exibido baseado no contexto atual.
	<default>: Cursor padrão, tipicamente uma seta.
	<pointer>: Usado quando pairando o cursor sobre links, tipicamente uma mão.
	<text>: Indica que o texto pode ser selecionado, normalmente um I maiúsculo.
/*
```



#### 	- :u6e80: Função `blink`

A função `blink` é o que faz com que o nosso elemento do **Score** corresponda ao que está acontecendo com o jogo, ela recebe como parâmetro um texto e retorna o **Callback**. O **feedback de Score**, do **erro do jogador**, e da **ação de ligar o jogo** são controladas por essa função. 

Antes de conferir o código, é importante saber o que é o **`callback`**! 

Basicamente, **callback** é um tipo de função que só é executada após o processamento de outra função. Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada de callback. Isso é importante porque uma característica dessa linguagem é não esperar o término de cada evento para a execução do próximo. Portanto, ela contribui para controlar melhor o fluxo de processamento assíncrono. Para entender melhor isso, veja como estamos usando a função `blink`:

```javascript
var startGame() => {
    /* Perceba que, ao invocar blink, passamos o parâmetro texto, e logo em seguida passamos uma OUTRA FUNÇÃO, mas como PARÂMETRO!
    Isso porque a nossa intenção, é a de executar outras ações ao acionar a função blink, sem interromper o fluxo do código. Portanto, o CALLBACK é o que permite a execução dessa função que foi passada como parâmetro. */
	blink("--", () => {
		newColor();
		playSequence();
	})
}
```

Vamos conferir:

```javascript
var blink = (text, callback) => { // recebe como parâmetro um texto, o qual será exibido no elemento css do _gui.counter
    let counter = 0,
        on = true;

    _gui.counter.innerHTML = text; // adiciona o parâmetro de texto ao elemento do _gui.counter! 

    // Mais uma vez, utilizamos o Interval, basicamente ele executará a ação de "piscar" 3 vezes, representado aqui pela remoção e inclusão da classe gui__conter--on com um intervalo de 250ms. Quando terminado, executa o CALLBACK;
    const interval = setInterval(() => {
        if(on) { // Se o display estiver aceso > Apague
            _gui.counter.classList.remove("gui__counter--on");
        } else { // Se estvier apagado > Acenda
            _gui.counter.classList.add("gui__counter--on");

            if(++counter === 3) {
                clearInterval(interval);
                callback();
            }
        }

        on = !on; // A cada iteração, ativa/desativa o score para evitar que o _gui.counter não pisque.
    }, 250);
}
```



#### 	- :u6e80: Função `setScore`

A função `setScore` é a responsável por controlar como nossa pontuação será exibida de fato no elemento `_gui.counter`. Veja como funciona:

```javascript
// CONTROLA A PONTUAÇÃO
var setScore = () => {
    
    // A primeira coisa, seria invocar o score, que já armazenamos em '_data.score'. Se lembra? Mas o Score é um número, precisamos convertê-lo para STRING a fim de manipular seus caracteres e recebê-los com o 'score.length'.
    
    const score = _data.score.toString(); // Para facilitar, fizemos a chamada do '_data.score', transformamos em string utilizando o método '.toString()' e declaramos seu resultado a variável 'score', tudo na mesma sentença.
    
    // A essa altura sabemos que 'score.length', retorna quantos caracteres o número tem.
	/* O método substring() retorna a parte da string entre os índices inicial e final, nesse caso representados por:
    0, como sendo o ÍNDICE INCIAL;
    2 - score.length, como sendo o ÍNDICE FINAL;
    
    O objetivo, é que com isso, ele remova os zeros a depender da quantidade de caracteres que o 'score.length' tem! Veja o comportamento:
    "00".substring(0,2 - score[ex. 1.length) = (0, 2 - 1) = "01";
    "00".substring(0,2 - score[ex. 5].length) = (0, 2 - 1) = "05";
    "00".substring(0,2 - score[ex. 10].length) = (0, 2 - 2) = "00"
    
    Chega um momento, em que nada irá aparecer, por isso utilizamos o '+ score no final da sentença!'
    */
      
    const display = "00".substring(0,2 - score.length) + score;  
    _gui.counter.innerHTML = display; // reflete o score em '_gui.counter'!
}
```
