import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WritingItem {
  date: string;
  title: string;
  summary: string;
}

@Component({
  selector: 'app-filantropia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filantropia.component.html',
  styleUrl: './filantropia.component.scss'
})
export class FilantropiaComponent {
  // TODO: substituir pelos textos e ações reais da Dra. Karol Pereira
  readonly writings: WritingItem[] = [
    {
      date: '2026',
      title: 'LGPD e inclusão: dados pessoais de pessoas com deficiência',
      summary: 'Reflexão sobre o tratamento de dados sensíveis e a proteção da pessoa com deficiência à luz da LGPD.'
    },
    {
      date: '2026',
      title: 'Ação social — orientação jurídica gratuita',
      summary: 'Mutirão de atendimento voltado a famílias em situação de vulnerabilidade.'
    },
    {
      date: '2025',
      title: 'Acessibilidade como direito fundamental',
      summary: 'Artigo sobre a efetivação das garantias constitucionais de acessibilidade.'
    }
  ];
}
