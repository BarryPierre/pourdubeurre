import { Component } from '@angular/core'
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { LoaderComponent } from '@components/loader/loader.component'
import { IStaticMethods } from 'preline/preline'
import { TitleService } from './core/service/title'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit()
        },100)
      }
    })
    this.titleService.init()
  } 
  }
