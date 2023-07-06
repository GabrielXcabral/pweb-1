import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListagemUsuariosComponent } from "./usuario/listagem-usuarios/listagem-usuarios.component";
import { CadastrarUsuarioComponent } from "./usuario/cadastrar-usuario/cadastrar-usuario.component";
import { CadastrarHorarioComponent } from "./horario/cadastrar-horario/cadastrar-horario.component";
import { CalendarioComponent } from "./home/calendario/calendario.component";
import { TableComponent } from './usuario/table/table.component';
import { AlunoComponent } from "./usuario/aluno/aluno.component";
import { ListarHarariosComponent } from "./usuario/listar-horarios/listar-hararios.component";
const routes: Routes = [
  {
    path: "usuario/cadastro",
    component: CadastrarUsuarioComponent,
  },
  {
    path: "aluno/cadastro",
    component: AlunoComponent,
  },
  {
    path: "usuario/editar/:id",
    component: CadastrarUsuarioComponent,
  },
  {
    path: "",
    component: TableComponent,
  },
  {
    path: "horarios/inserir",
    component: CadastrarHorarioComponent,
  },
  {
    path: "horarios",
    component: CalendarioComponent,
  },
  {
    path: "listarHorarios",
    component: ListarHarariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
