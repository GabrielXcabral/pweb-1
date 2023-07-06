import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';

interface Horario {
  horario: string;
  data: string;
  aluno: string;
  interprete: string;
}

@Component({
  selector: 'app-listar-hararios',
  templateUrl: './listar-hararios.component.html',
  styleUrls: ['./listar-hararios.component.css']
})
export class ListarHarariosComponent {
  displayedColumns: string[] = ["Horario", "Data", "Aluno", "Interprete"];
  dataSource: Horario[] = [
    { horario: '09:00', data: "10/11/2023", aluno: 'João', interprete: 'Maria' },
    { horario: '10:00', data: "10/11/2023", aluno: 'Pedro', interprete: 'Ana' },
    { horario: '11:00', data: "10/11/2023", aluno: 'Mariana', interprete: 'José' },
    // Adicione mais dados aqui, se necessário
  ];

}
