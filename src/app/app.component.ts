import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navIsOpen = false;
  barChange = false;
  
  linksArray = [
    { show: false, url: '', title: 'Shop', exact: true},
    { show: false, url: 'cart', title: 'Cart', exact: false },
    { show: false, url: 'sign', title: 'Sign In', exact: false },
    { show: false, url: 'contact', title: 'Contact', exact: false },
    { show: false, url: 'orders', title: 'Orders', exact: false },
  ];

  showNav() {
    if (this.navIsOpen) {
      this.navIsOpen = false;
      this.barChange = false;
      this.linksArray = this.linksArray.map((el) => ({
        ...el,
        show: false,
      }));
    } else {
      this.navIsOpen = true;
      this.barChange = true;
      this.linksArray = this.linksArray.map((el) => ({
        ...el,
        show: true,
      }));
    }
  }

  returnClassIn(i) {
    return `slide-in-${i}`;
  }

  returnClassOut(i) {
    return `slide-out-${i}`;
  }
}
