import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatItem {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly stats: StatItem[] = [
    { icon: 'badge', label: '+5 anos de experiência' },
    { icon: 'people', label: 'Atendimento personalizado' },
    { icon: 'scale', label: 'Foco em resultados e segurança jurídica' },
  ];

  readonly address = 'Karol Pereira - Escritora, Av. Santa Aurora - Monte das Oliveiras, Manaus - AM, 69017-130';
  readonly mapEmbedSrc =
    'https://maps.app.goo.gl/UPa32urvyTf6wjBXA';
  readonly mapLinkHref =
    'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(this.address);
}
