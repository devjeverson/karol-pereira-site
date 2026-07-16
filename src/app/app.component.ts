import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { InssComponent } from './shared/components/inss/inss.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { FilantropiaComponent } from './shared/components/filantropia/filantropia.component';
import { CtaBandComponent } from './shared/components/cta-band/cta-band.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    InssComponent,
    AboutComponent,
    ServicesComponent,
    FilantropiaComponent,
    CtaBandComponent,
    FooterComponent,
    WhatsappButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'karol-pereira-site';
}
