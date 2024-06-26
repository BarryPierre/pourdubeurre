import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';

const URL_BACKEND = environment.urlBackEnd;
@Injectable({
  providedIn: 'root'
})
export class EnvoiedemailService {

  constructor(private http: HttpClient) { }
  appelDuBack (email:string): Observable<void>{
    return this.http.post<void>(`${URL_BACKEND}/landing/email`, { email, message:"" });
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

}