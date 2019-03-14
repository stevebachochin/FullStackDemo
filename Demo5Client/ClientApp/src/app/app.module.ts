import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewpgComponent } from './components/viewpg/viewpg.component';
import { FormpgComponent } from './components/formpg/formpg.component';
import { QuotesService } from './services/quotes.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './services/app.config.service';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    ViewpgComponent,
    FormpgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    QuotesService,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
