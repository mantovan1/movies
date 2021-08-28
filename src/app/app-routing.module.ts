import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFilmesComponent } from './components/filmes/cadastrar-filmes/cadastrar-filmes.component';
import { ListarFilmesComponent } from './components/filmes/listar-filmes/listar-filmes.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'filmes', component: ListarFilmesComponent},
  {path:'filmes/cadastrar', component: CadastrarFilmesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
