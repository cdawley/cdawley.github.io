// CAPITAL PUNISHMENT
// A hangman-style "Guess the word" game.

//object entitled 'game' - should contain the entire game

var game = {

// an array containing the list of words from which the game will be played

    wordsUnused: ["death", "victim", "gallows", "cyanide", "hangman", "crime", "executioner", "sentence","stay","prison","chamber","warrant","appeal","remorse",],

    currentWord: "",
    wordArray: [],
    remainingLetters: 0,
    remainingChances: 5,
    wins: 0,
    losses: 0,


    //strAtoZ: "abcdefghijklmnopqrstuvwxyz",

    keyStatus: {
        A: {},
        B: {},
        C: {},
        D: {},
        E: {},
        F: {},
        G: {},
        H: {},
        I: {},
        J: {},
        K: {},
        L: {},
        M: {},
        N: {},
        O: {},
        P: {},
        Q: {},
        R: {},
        S: {},
        T: {},
        U: {},
        V: {},
        W: {},
        X: {},
        Y: {},
        Z: {},
    },

    /*   // returns random number between 0 and one less than the length of wordsUnused[]
       randomIndex: function () {
           return Math.floor(Math.random() * Math.floor(this.wordsUnused.length));
       },
       */

    // returns word removed from random place in wordsUnused[]

//    pickAWord: function () {
//        var theWord = "";


    pickWord: function () {
//         remove the word from the array at random index

        var pos = Math.floor(Math.random() * Math.floor(this.wordsUnused.length));
        var wordUp = this.wordsUnused[pos];
        this.wordsUnused.splice(pos, 1);
        this.currentWord = wordUp.toUpperCase();
    },



//uses object instead of array
    resetAlphabet: function () {

        for (var i = 0; i < 26; i++) {
            var currentLetter = String.fromCharCode(65 + i);
            this.keyStatus[currentLetter] = {guessed: false, occurs: 0};
        }
        ;

    },

    setOccurrence: function () {
        // runs through letters in current word and increments the value of the occurrence key for each
        for (var i = 0; i < this.currentWord.length; i++) {

            var current = this.currentWord.charAt(i);

            this.keyStatus[current.toUpperCase()].occurs++;
        };
    },

    newRound: function() {
        if (this.wordsUnused.length == 0) { return; };
        this.resetAlphabet();
        this.pickWord();
        this.setOccurrence();

        this.remainingLetters = this.currentWord.length;
        this.remainingChances = 5;
    },
};