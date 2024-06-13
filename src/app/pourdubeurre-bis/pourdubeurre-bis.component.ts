import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
@Component({
  selector: 'app-pourdubeurre-bis',
  standalone: true,
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './pourdubeurre-bis.component.html',
  styleUrl: './pourdubeurre-bis.component.scss',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class PourdubeurreBisComponent {
  email: string=""
  contenuEmail: string= "@"
  erreurMessage: string=""
  year = new Date().getFullYear()
  Solutions = [
    {
      title: 'Search Engine Optimization',
      icon: 'newspaper',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Social Media Marketing',
      icon: 'folder-kanban',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'E-commerce Solutions',
      icon: 'clipboard-pen-line',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Pay-Per-Click Advertising',
      icon: 'store',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Branding Strategy',
      icon: 'contact-2',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Marketing Copywriting',
      icon: 'image',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
  ]

  envoieDeMail(){
    if (this.email.includes(this.contenuEmail)){
          console.log ("votre e-mail à bien été envoyer")
          this.erreurMessage=this.email + " votre mail a bient été envoyé"
        }
        else {
          console.log(this.email)
      this.erreurMessage=this.email + "votre mail est incorrect"
        }
    }
  
}
