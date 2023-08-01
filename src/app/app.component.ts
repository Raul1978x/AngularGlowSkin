import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() newItemEvent = new EventEmitter<string>()
  title = 'Glow_Skin';
  onClick(item: string): void{
    console.log(item);
    
  }

}
