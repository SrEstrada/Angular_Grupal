import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante 
import { Word } from '../word';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.css'
})
export class Game {
  word = '';
  guessedLetters: string[] = [];
  maxErrors = 6;
  errors = 0;
  gameOver = false;
  win = false;

  constructor(private wordService: Word) {}

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.word = this.wordService.getRandomWord();
    this.guessedLetters = [];
    this.errors = 0;
    this.gameOver = false;
    this.win = false;
  }

  guess(letter: string) {
    if (this.gameOver || this.guessedLetters.includes(letter)) return;

    this.guessedLetters.push(letter);
    if (!this.word.includes(letter)) {
      this.errors++;
    }

    this.checkGameStatus();
  }

  checkGameStatus() {
    const allGuessed = this.word.split('').every(l => this.guessedLetters.includes(l));
    if (allGuessed) {
      this.win = true;
      this.gameOver = true;
    } else if (this.errors >= this.maxErrors) {
      this.gameOver = true;
    }
  }

  isLetterVisible(letter: string): boolean {
    return this.guessedLetters.includes(letter);
  }
}