import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { PassatempoComponent } from './passatempo/passatempo.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreComponent,
    ProfissionalComponent,
    FormacaoComponent,
    PassatempoComponent,
    TecnologiasComponent,
    ProjetosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
