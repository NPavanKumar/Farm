import { Component } from '@angular/core';
import { SongService } from '../shared/song.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  status: boolean = false;
  constructor() { }

  ngOnInit() {}

  addToggle() {
    this.status = !this.status;       
  }

}
