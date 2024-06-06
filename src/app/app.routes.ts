import { Routes } from '@angular/router'
import { AdminLayoutComponent } from './admin-layout/admin-layout.component'
import { AuthLayoutComponent } from './auth-layout/auth-layout.component'
import { AuthGuard } from './core/guards/auth.guard'
import { LayoutComponent } from './landing-layout/layout.component'
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
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
    data: {
      title: 'AeroPage - Tailwind CSS Multipurpose One Page Landing Template',
    },
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./landing/landing.route').then((mod) => mod.PAGE_ROUTES),
  },
  {
    path: '',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./admin/admin.route').then((mod) => mod.ADMIN_ROUTES),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./account/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
]
