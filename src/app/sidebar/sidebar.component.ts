import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed: boolean = true;
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }
  // isCollapsed$: Observable<boolean> = new BehaviorSubject<boolean>(true);
  // toggleSidebar() {
  //   this.isCollapsed$.subscribe((res:boolean) => res = !res);
  //   console.log(this.isCollapsed$);
  // }
}
