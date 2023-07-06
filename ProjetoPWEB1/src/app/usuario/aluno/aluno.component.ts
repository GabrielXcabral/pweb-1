import { Component, OnInit, ɵConsole } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IAluno } from "src/app/shared/interfaces/IAluno";
import { UsuarioService } from "src/app/shared/services/usuario.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/shared/services/alert.service";
import { AlunoFirestoreService } from "src/app/shared/services/aluno-firestore.service";


@Component({
  selector: "app-aluno",
  templateUrl: "./aluno.component.html",
  styleUrls: ["./aluno.component.css"],
})
export class AlunoComponent implements OnInit {
  usuarioAluno: IAluno;
  estahCadastrando = true;
  nomeBotaoManutencao = "SALVAR";
  IdUsuarioEditar: any = "";
  maxDate: Date = new Date();
  formCadastro: FormGroup = {} as FormGroup;

  constructor(
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
    private usuarioService: AlunoFirestoreService,
    private alerta: AlertService
  ) 
  
  {
    this.usuarioAluno = {} as IAluno;
  }

  ngOnInit() {
    this.formCadastro = new FormGroup({
      nomeCompleto: new FormControl("", [
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(3),
      ]),
    });
  }

  manter(): void {
    try{
      if (this.estahCadastrando && this.usuarioAluno) {
        this.usuarioAluno.nomeCompleto = this.usuarioAluno.nomeCompleto?.trim();
        this.usuarioService.inserir(this.usuarioAluno).subscribe((aluno) => {
          this.alerta.successAlert("Aluno cadastrado com sucesso");
          this.roteador.navigate([""]);
        });
      }

    }catch (error){
      this.alerta.warningAlert(error as string)

    }
    
    //this.nomeBotaoManutencao = 'Cadastrar';
    //this.roteador.navigate(['listagemusuarios']);
  }

  atualizar() {
    if (this.usuarioAluno) {
      this.usuarioService
        .atualizar(this.usuarioAluno)
        .subscribe((aluno) => {
          this.roteador.navigate([""]);
        });
    }
  }
}
