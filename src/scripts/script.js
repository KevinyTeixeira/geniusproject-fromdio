/*******************************************/
/* 1. DEFINE VARIABLES
/*******************************************/
var _data = {
    timeout: undefined,
    sounds: [],

    score: 0,
    displayLeaderboard: false,
    gameSequence: [],
    playerSequence: []
};

/*******************************************/
/* 2. DOCUMENT SELECTORS
/*******************************************/
const _gui = {
    start: document.querySelector(".gui__btn--start"),
    colors: document.querySelectorAll(".genius__color"),
    counter: document.querySelector(".gui__counter"),
    leaderboardbtn: document.querySelector(".leader__board--btn--circle"),
    leaderboard: document.querySelector(".leader__board"),
}

/*******************************************/
/* 3. IMPLEMENT SOUNDS
/*******************************************/

const _soundUrls = [
        // url from sound
];

_soundUrls.forEach(sndPath => {
    const audio = new Audio(sndPath);
    _data.sounds.push(audio);
});

/*******************************************/
/* 4. GAME
/*******************************************/

// 4.1 Configura a ação do botão START
_gui.start.addEventListener("click", () => {
    startGame();
});

// CALL IT WHEN USER SELECT A COLOR
const padListener = (e) => {
    if(!_data.playerCanPlay)
        return;

    let soundId;
    _gui.colors.forEach((pad, key) => {
        if(pad === e.target)
        soundId = key;
    });

    e.target.classList.add("genius__color--active");

    // _data.sounds[soundId].play();
    _data.playerSequence.push(soundId);

    setTimeout(() => {
        e.target.classList.remove("genius__color--active");

        const currentMove = _data.playerSequence.length - 1;

        if(_data.playerSequence[currentMove] !== _data.gameSequence[currentMove]) {
            _data.playerCanPlay = false;
            disablePads();
            gameOver();
        }
        else if(currentMove === _data.gameSequence.length - 1) {
            newColor();
            playSequence();
        }

        waitForPlayerClick();
    }, 250);
}

// 4.2 Configura a ação do click sobre as cores!
_gui.colors.forEach(pad => {
    pad.addEventListener("click", padListener);
});

/*******************************************/
/* 5. GAME-FUNCTIONS
/*******************************************/

// START-GAME FUNCTION
var startGame = () => {
    _gui.counter.innerHTML = "--";
    _data.score = 0;
    _data.gameSequence = [];
    _data.playerSequence = [];
    disablePads();
    changeCursor("auto");
    blink("--", () => {
        newColor();
        playSequence();
    })
}

// GAME-OVER FUNCTION
var gameOver = () => {
    _data.playerCanPlay = false; // garante que o jogador não pode fazer nada;

    blink("!!", () => {

        alert(
            `CONGRATS! Your score is: ${_data.score}!\nLet's start again.`
            );
        _data.score = 0;
        _data.gameSequence = []
        startGame();
    });
}

// PLAY GAME SEQUENCE
var playSequence = () => {
    let counter = 0,
        padOn = true; // informa se o pad está aceso ou apagado

    _data.playerSequence = []; // zera a sequência do jogador
    _data.playerCanPlay = false; // impede que o jogador faça algo enquanto a sequência é executada

    changeCursor("auto");

    const interval = setInterval(() => {
        if(padOn) {
            if(counter === _data.gameSequence.length) { // Interrompe o intervalo depois que todas as cores forem apresentadas
                clearInterval(interval);
                disablePads();
                waitForPlayerClick();
                changeCursor("pointer");
                _data.playerCanPlay = true;
                return;
            }

        const sndId = _data.gameSequence[counter]; // counter identifica qual elemento tem que pegar
        const pad = _gui.colors[sndId]; // pega o PAD correspondente aquela ID
        // _data.sounds[sndId].play(); é a mesma id das músicas?
        pad.classList.add("genius__color--active");
        counter++;
        }
        else {
            disablePads();
        }

        padOn = !padOn; // inverte o valor de padOn;
    }, 350);
}

// AFTER PLAY COLOR ORDER, WAIT FOR PLAYER.
var waitForPlayerClick = () => {
    clearTimeout(_data.timeout); // garante que o timeout sempre inicie zerado
    _data.timeout = setTimeout(() => {
        if(_data.playerCanPlay)
        return;

        disablePads();
        // gameOver();
    }, 5000)
}

/*******************************************/
/* 5.1. COLORS
/*******************************************/

// DISABLE COLORS
var disablePads = () => {
    _gui.colors.forEach(pad => {
        pad.classList.remove("genius__color--active");
    });
}

// RANDOM A NEW COLOR
var newColor = () => {
    // Math.floor(2); // Arredonda o 2 quebrado para 2;
    // Math.ceil(); // Arrendonda sempre para cima;
    // Math.round(); // Arredonda igual a escola, 2.4 para baixo, 2.5 para cima;
    _data.gameSequence.push(Math.floor(Math.random() *4)); // O "push" sempre adiciona o elemento ao fim do Array
    _data.score++;

    setScore()
}

const changeCursor = (cursorType) => {
    _gui.colors.forEach(pad => {
        pad.style.cursor = cursorType;
    });
}

/*******************************************/
/* 5.2 SCORE
/*******************************************/

// MANIPULA O SCORE!
var blink = (text, callback) => {
    let counter = 0,
        on = true;  // Parte do princípio de que o contador está ligado

    _gui.counter.innerHTML = text;

    const interval = setInterval(() => { // a função set interval retorna um número
        if(on) {  // Se o display estiver aceso > Apague
            _gui.counter.classList.remove("gui__counter--on");
        } else {  // Se estvier apagado > Acenda
            _gui.counter.classList.add("gui__counter--on");

            if(++counter === 3) {
                clearInterval(interval);
                callback(); // é uma função que será executada depois que parar de piscar
            }
        }

        on = !on;
    }, 250);
}

// CONTROLA A PONTUAÇÃO
var setScore = () => {
    const score = _data.score.toString(); // Converte score para String
    const display = "00".substring(0,2 - score.length) + score;  // score.length, retorna quantos caracteres o número tem.
    // com o método substring, permite apresentar o zero quando o score for menor do que 10.
    _gui.counter.innerHTML = display;
}

/*******************************************/
/* 5.3 LEADERBOARD
/*******************************************/

const showLeaderBoard = () => {

    if (!_data.displayLeaderboard) {
        _gui.leaderboard.classList.add("leader__board--visible");
      } else {
        _gui.leaderboard.classList.remove("leader__board--visible");
      }

      _data.displayLeaderboard = !_data.displayLeaderboard; // inverte o valor de padOn;
}

// 4.2 Configura a ação do click sobre as cores!
_gui.leaderboardbtn.addEventListener("click", showLeaderBoard);

/*
const keys = require('../credentials.json')
const { google } = require('googleapis');

const client = new google.auth.GoogleAuth(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
)

client.authorize(function(err, tokens) {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Connected!');
    }
});


const app = express();

const getLeaderBoard = () => {
    app.get("/", async (req, res) => {
        
        const auth = new google.auth.GoogleAuth({
            keyFile: "credentials.json",
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });

        // Create client instance for auth
        const client = await auth.getClient();

        //Instantec of Google Sheets API
        const googleSheets = google.sheets({version: "v4", auth: client})

        const spreasheetID = "1TPf5ofpHAjcO_kvVfO8xROfR-hGjQBW4DYRKXxVly4E";
        // Get metadata about spreadsheet
        const metaData = await googleSheets.spreadsheets.get({
            auth,
            spreasheetID,
        })

        res.send(metaDatad.data);
});
}

const updateLeaderBoard = () => {
}
*/
