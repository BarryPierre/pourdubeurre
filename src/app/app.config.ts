import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router'
import { routes } from './app.routes'
import { ErrorInterceptor } from './core/helper/error.interceptor'
import { FakeBackendProvider } from './core/helper/fake-backend'
import { JwtInterceptor } from './core/helper/jwt.interceptor'

// Scroll
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig)

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    FakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    importProvidersFrom(HttpClientModule),
  ],
}
