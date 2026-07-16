import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceItem {
  label: string;
  ref: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly services: ServiceItem[] = [
    {
      label: 'Pessoa com Deficiência',
      ref: 'PCD · Inclusão',
      description: 'Defesa de direitos, benefícios previdenciários, acessibilidade e efetivação de garantias fundamentais.'
    },
    {
      label: 'Proteção de Dados',
      ref: 'LGPD',
      description: 'Consultoria e pareceres em privacidade, conformidade e tratamento de dados pessoais.'
    },
    {
      label: 'Direitos Sociais',
      ref: 'Constitucional',
      description: 'Atuação em benefícios sociais, políticas públicas e fortalecimento das garantias constitucionais.'
    },
    {
      label: 'Acessibilidade',
      ref: 'Consultoria',
      description: 'Orientação a empresas e instituições sobre adequação e práticas inclusivas.'
    },
    {
      label: 'Direito Digital',
      ref: 'Cível',
      description: 'Questões contratuais e cíveis relacionadas ao ambiente digital e à proteção do usuário.'
    },
    {
      label: 'Pesquisa Jurídica',
      ref: 'Pareceres',
      description: 'Estudos e pareceres técnicos para casos que exigem fundamentação aprofundada.'
    }
  ];
}
