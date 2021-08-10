import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
      /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
    /* SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: ptbrLocale
    } */
    { provide: LOCALE_ID, useValue: 'pt' } // necessário a partir do Angular v5 pt-BR nao é mais suportado
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
