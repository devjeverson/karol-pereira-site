import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent {

  year = new Date().getFullYear();

  socials = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/karol',
      icon: 'logo-instagram'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/karol',
      icon: 'logo-linkedin'
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@karol',
      icon: 'logo-tiktok'
    }
  ];

}