import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EnvoiedemailService {

  constructor() { }
  appelDuBack (email:string):void{
    console.log(email)
}

variable = 3;

modalError() : void{
  Swal.fire({
    icon: "error",
    title: "Erreur ... ",
    text: "Votre adresse mail doit etre incorrect !!!",
    footer: "pense a bien vérifier ton adresse mail avant de l'envoyer "
  })
  
}

modalSuccess() : void{
  Swal.fire({
    icon: "success",
    title: "Validé",
    text: "Ton adresse mail nous a bien été envoyé !!",
    footer: "tu seras tenu au courant pour la suite de PDB !  "
  })
  
}

modalWarning() : void{
  Swal.fire({
    icon: "warning",
    title: "Oops...",
    text: "Nous avons déja ton adresse mail !",
    footer: " patience l'application arrive bientôt !"
  })
  
}

renvoiUnTruc() : number {
  this.variable++
  return 3
}
}