import { Component } from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  wordsList: Word[] = []
  newWord : Word = new Word()

  constructor(){}

  addWord(form){
    this.wordsList.push(this.newWord)
    this.newWord = new Word()
    form.resetForm()
  }

}
