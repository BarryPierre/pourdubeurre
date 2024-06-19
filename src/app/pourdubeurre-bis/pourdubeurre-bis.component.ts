import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnvoiedemailService } from '@services/envoiedemail.service';
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

  constructor(private emailService: EnvoiedemailService, private erroMail: EnvoiedemailService, private validationMail: EnvoiedemailService) {}

  envoieDeMail(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ; 
    if (emailPattern.test(this.email)){
          console.log ("votre e-mail à bien été envoyer")
          // this.erreurMessage=this.email + " cet email a bient été envoyé"
          this.validationMail.modalSuccess()
          this.emailService.appelDuBack(this.email)
        }
        else {
          console.log(this.email)
      // this.erreurMessage=this.email + "cet email est incorrect"
          this.erroMail.modalError()
          // console.log("jgjgjhl")
        }
    }

    divIsVisible = false

    showDiv() {
      this.divIsVisible=true
    }
  
    multipliParDeux(n : number):number{
      return n*2
    }
}
