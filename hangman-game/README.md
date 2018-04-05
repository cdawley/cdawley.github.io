#CAPITAL PUNISHMENT

#### __Hangman-style "word guess" game themed on _CAPITAL PUNISHMENT_ (with with capital letters for some kind of triple pun)__.

Most of the game itself is an object titled "game" in the __game.js__ file. This file is linked in the HTML (game site created using Bootstrap). JavaScript related to key entry is within <script> tags in the page itself.


The game is played in rounds. A round is over when a player correctly guesses the word or runs out of chances. Players receive 6 chances per round (thats two legs, two arms, a head, and a final chance for the head when the counter is at zero). If the round is lost, the word is returned to the array from which words are drawn each round. When all words have been guessed, the player is notified to as such, and instructed to refresh the the page to play again.