import { Component, OnInit } from '@angular/core';

export interface IGallery {
  path: string;
  title?: string;
  subTitle?: string;
  description?: string;
}

@Component({
  selector: 'app-renoveringar',
  templateUrl: './renoveringar.page.html',
  styleUrls: ['./renoveringar.page.scss'],
})
export class RenoveringarPage implements OnInit {
  slideOpts = {
    disabled: true,
    allowTouchMove: false
  };

  gallery: IGallery[] = [
    {
      path: 'assets/1.jpg',
      title: 'TITLE',
      subTitle: 'SubTitle',
      description: 'Looong description'
    },
    {
      path: 'assets/2.jpg',
      title: 'TITLE',
      subTitle: 'SubTitle',
      description: 'Looong description'
    },
    {
      path: 'assets/3.jpg',
      title: 'TITLE',
      subTitle: 'SubTitle',
      description: 'Looong description'
    },
    {
      path: 'assets/4.jpg',
      title: 'TITLE',
      subTitle: 'SubTitle',
      description: 'Looong description'
    },
    {
      path: 'assets/5.jpg',
      title: 'TITLE',
      subTitle: 'SubTitle',
      description: 'Looong description'
    },
    {
      path: 'assets/6.jpg',
      title: 'TITLE',
      subTitle: 'SubTitle',
      description: 'Looong description'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
