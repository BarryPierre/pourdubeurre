import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvoiedemailService {

  constructor() { }
  appelDuBack (email:string):void{
    console.log(email)
}
}
