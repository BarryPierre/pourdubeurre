import { Routes } from '@angular/router'
import { PourdubeurreBisComponent } from './pourdubeurre-bis/pourdubeurre-bis.component'
import { PourdubeurreComponent } from './pourdubeurre/pourdubeurre.component'

export const routes: Routes = [
  
  {
    path: 'pourdubeurre',
    component:PourdubeurreComponent
  },
  {
    path: 'pourdubeurrebis',
    component:PourdubeurreBisComponent
  },
 
]
