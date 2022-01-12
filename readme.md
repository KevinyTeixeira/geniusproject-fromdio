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



### :blue_book: 3.1 Style.css

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
    width: var(--game-size);  /* Usando uma variável definida em :root */
    margin-left: auto;
    margin-right: auto; /* Se trata da barra de rolagem */
}
```



###  :ledger: 4.1 Script.js

#### 	**- Variáveis**

Neste arquivo...
