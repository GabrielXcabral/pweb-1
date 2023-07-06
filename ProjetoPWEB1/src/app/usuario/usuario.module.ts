import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListagemUsuariosComponent } from "./listagem-usuarios/listagem-usuarios.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatBadgeModule } from "@angular/material/badge";
import { FlexModule } from "@angular/flex-layout";
import { RouterLink } from "@angular/router";
import { CadastrarUsuarioComponent } from "./cadastrar-usuario/cadastrar-usuario.component";
import { AlunoComponent } from "./aluno/aluno.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TableComponent } from "./table/table.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ListarHarariosComponent } from "./listar-horarios/listar-hararios.component";

@NgModule({
  declarations: [
    ListagemUsuariosComponent,
    CadastrarUsuarioComponent,
    TableComponent,
    AlunoComponent,
    ListarHarariosComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    FlexModule,
    RouterLink,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
  ],
  exports: [ListagemUsuariosComponent, CadastrarUsuarioComponent],
})
export class UsuarioModule {}
