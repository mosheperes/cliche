import {Component, EventEmitter, OnInit} from '@angular/core';
import {JoketellerService} from '../../models/joketeller.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.sass']
})
export class JokeComponent {
joke: string;
// refresh: EventEmitter<null> = new EventEmitter<null>();
  constructor(private dad: JoketellerService) {
    this.updatejoke();
  }

  // ngOnInit() {
  // this.dad.telljoke().subscribe(res => {
  //   console.log(res);
  //   this.joke = res.joke;
  // });
  // }
  updatejoke() {
    this.dad.telljoke().subscribe(res => {
    this.joke = res.joke; }
    );
  }

}
