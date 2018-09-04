---
title: Do you want to build a Snowman?
draft: true
---

In this assignment, you'll build a _less grim_ variation of a popular game:

![Snowman](./assets/snowman.gif)

## Objectives

* Reinforce component architecture in React
* Effective use props and state in React

### Explorer Mode

* [ ] Selects a random word from the list and display a number of blank spaces (or underscores) equal to the word length.
* [ ] Display a list of letters, A through Z as clickable buttons.
* [ ] When the player guesses a letter (clicks the button):
  * [ ] All instances of that letter are revealed at their corresponding positions in the word.
  * [ ] The button becomes disabled, as it has already been guessed.
  * [ ] Display the snowman image that corresponds with the number of letters revealed in the word.

### Adventure Mode

* [ ] After the word has been completed, offer the player to play again. Reset the state of the game without a page reload.

### Epic Mode

Refactor the game to play like a traditional "hangman" game:

* [ ] If the chosen letter is _not_ part of the word, the snowman "grows"; increase a counter by one for each incorrect guess.
* [ ] If the snowman is completed (counter reaches 7) before the word is completed, the player loses, and the snowman wins.