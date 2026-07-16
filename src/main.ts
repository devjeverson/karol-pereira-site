import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { addIcons } from 'ionicons';
import {
  logoInstagram,
  logoLinkedin,
  logoTiktok,
  logoWhatsapp
} from 'ionicons/icons';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

addIcons({
  'logo-instagram': logoInstagram,
  'logo-linkedin': logoLinkedin,
  'logo-tiktok': logoTiktok,
  'logo-whatsapp': logoWhatsapp
});
