import { Component } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css'],
})
export class HeaderNavbarComponent {
  imagePath = '../../components/../../../assets/images/oceb-logo-header.png';

  handleClick = false;

  addClickEvent() {
    if (this.handleClick) {
      this.handleClick = false;
    } else {
      this.handleClick = true;
    }
  }
}
