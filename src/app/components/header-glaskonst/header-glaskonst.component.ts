import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { IPage } from '../header/header.component';

@Component({
  selector: 'app-header-glaskonst',
  templateUrl: './header-glaskonst.component.html',
  styleUrls: ['./header-glaskonst.component.scss'],
})
export class HeaderGlaskonstComponent implements OnInit {
  mobileOpen: boolean = false;

  gPages: IPage[] = [
    {
      title: 'Hem',
      link: '/glaskonst',
    },
    {
      title: 'Kontakt',
      link: '/contact',
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        console.log('event.url :: ', event.url);
        this.gPages.map(p => {
          return p.active = (event.url === '/' + p.link);
        });
      }
    });
  }

}
