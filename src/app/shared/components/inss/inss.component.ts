import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InssItem {
  label: string;
  description: string;
  icon: 'bpc' | 'maternidade' | 'aposentadoria' | 'doenca' | 'pensao' | 'acidente';
}

@Component({
  selector: 'app-inss',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inss.component.html',
  styleUrl: './inss.component.scss'
})
export class InssComponent {
  readonly items: InssItem[] = [
    {
      label: 'BPC/LOAS',
      description: 'Benefício de prestação continuada para idosos e pessoas com deficiência em situação de vulnerabilidade.',
      icon: 'bpc'
    },
    {
      label: 'Salário-Maternidade',
      description: 'Orientação e requerimento do benefício devido às seguradas gestantes, adotantes ou em caso de aborto.',
      icon: 'maternidade'
    },
    {
      label: 'Aposentadorias',
      description: 'Por idade, tempo de contribuição, invalidez e demais modalidades previstas na legislação previdenciária.',
      icon: 'aposentadoria'
    },
    {
      label: 'Auxílio-Doença',
      description: 'Benefício por incapacidade temporária para o trabalho, com acompanhamento de perícias e recursos.',
      icon: 'doenca'
    },
    {
      label: 'Pensão por Morte',
      description: 'Requerimento e defesa do benefício devido aos dependentes do segurado falecido.',
      icon: 'pensao'
    },
    {
      label: 'Auxílio-Acidente',
      description: 'Indenização mensal por sequelas de acidente que reduzam a capacidade para o trabalho.',
      icon: 'acidente'
    }
  ];
}
