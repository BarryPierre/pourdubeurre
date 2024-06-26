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

  emailSend = false;
  
  constructor(
    private emailService: EnvoiedemailService) {}

  envoieDeMail(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ; 
    if (emailPattern.test(this.email)){
          // this.erreurMessage=this.email + " cet email a bient été envoyé"
          
          this.emailService.appelDuBack(this.email).subscribe(
            res => {
            this.emailService.modalSuccess()
            this.emailSend = true
          },(err) => {
            console.log(err)
            this.emailService.modalError()
          })
          
        }
        else {
      // this.erreurMessage=this.email + "cet email est incorrect"
          this.emailService.modalError()
          // console.log("jgjgjhl")
        }
    }

    divIsVisible = false

    showDiv() {
      this.divIsVisible=true
    }
  
}
