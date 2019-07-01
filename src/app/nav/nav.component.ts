import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hint-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menuItems = [
    {
      title: 'Home',
      link: '/home'
    },
    {
      title: 'Dashboard',
      link: '/dashboard'
    },
    {
      title: 'Add New Item',
      children: [
        {
          title: 'Event',
          icon: 'person-outline',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Payment',
          // url: '#', // goes directly into `href` attribute
        }
      ],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
