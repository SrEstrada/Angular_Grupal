import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private words = ['ANGULAR', 'PROGRAMACION', 'COMPONENTE', 'SERVICIO', 'MODULO', 'JAVASCRIPT', 'VARIABLE'];

  getRandomWord(): string {
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  }
}
