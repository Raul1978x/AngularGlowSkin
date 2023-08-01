import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: string[] = ['Productos', 'Acerca de', 'Contactanos'];
  glowSkin: string = 'GlowSkin';
  login: string = 'Login';
  item!: string ;
  @Output() newItemEvent = new EventEmitter<string>()
  title = 'Glow_Skin';

  slideSidebar(): void {
    this.newItemEvent.emit();
  }
}
