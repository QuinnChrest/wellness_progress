import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { Button } from 'primeng/button';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menubar, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  title: string | undefined;
  dark: boolean | undefined;

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.title = 'wellness_progress';

    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        routerLink: ['/'],
      },
      {
        label: 'About',
        icon: PrimeIcons.QUESTION,
        routerLink: ['/about'],
      },
    ];

    const element = document.querySelector('html');
    this.dark = element?.classList.contains('wellness_progress_dark_mode');
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('wellness_progress_dark_mode');
  }
}
