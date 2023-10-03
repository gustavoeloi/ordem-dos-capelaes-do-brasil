import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css'],
})
export class HeaderNavbarComponent implements OnInit {
  imagePath = '../../components/../../../assets/images/oceb-logo-header.png';

  handleClick = false;

  ngOnInit(): void {
    document.addEventListener('click', () => {
      this.closeMenu();
    });
  }

  addClickEvent() {
    this.handleClick = !this.handleClick;
  }

  closeMenu() {
    this.handleClick = false;
  }

  handleClickMenu(event: Event) {
    event.stopPropagation();
  }
}
