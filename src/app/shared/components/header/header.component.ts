import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',   Se puede modificar así:
  template: `
  <mat-toolbar color="primary">
      <span>My Store</span>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }
