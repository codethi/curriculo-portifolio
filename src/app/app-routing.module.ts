import { ContatoComponent } from './contato/contato.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { PassatempoComponent } from './passatempo/passatempo.component';
import { SobreComponent } from './sobre/sobre.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'sobre', pathMatch: 'full'},
  {path: 'sobre', component:SobreComponent},
  {path: 'passatempos', component: PassatempoComponent},
  {path: 'formacao', component: FormacaoComponent},
  {path: 'profissional', component: ProfissionalComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'tecnologias', component: TecnologiasComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
