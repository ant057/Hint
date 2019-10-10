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
      icon: 'home-outline',
      link: '/home'
    },
    {
      title: 'Household',
      icon: 'star',
      link: '/household'
    },
    {
      title: 'Dashboard',
      icon: 'grid-outline',
      link: '/dashboard'
    },
    {
      title: 'Calendar',
      icon: 'calendar-outline',
      link: '/calendar'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
