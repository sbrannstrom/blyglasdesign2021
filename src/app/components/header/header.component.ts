import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';


export interface IPage {
  title: string;
  link: string;
  active?: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  mobileOpen: boolean = false;
  pages: IPage[] = [
    {
      title: 'Hem',
      link: '/renoveringar',
    },
    {
      title: 'Auktorisation',
      link: '/auth',
    },
    {
      title: 'Kontakt',
      link: '/contact',
    },
    {
      title: 'Om Företaget',
      link: '/about',
    }
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map(p => {
          return p.active = (event.url === '/' + p.link);
        });
      }
    });
  }

}
