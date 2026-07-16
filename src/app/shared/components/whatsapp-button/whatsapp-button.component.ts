import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsappButtonComponent {
  /** Número no formato internacional, apenas dígitos. Ex.: 5511999999999 */
  @Input() phone = '5511999999999';
  @Input() message = 'Olá! Gostaria de falar sobre uma orientação jurídica.';

  get href(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  }
}
