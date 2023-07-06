import { Component, OnInit, ɵConsole } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IUsuario } from "src/app/shared/interfaces/IUsuario";
import { UsuarioService } from "src/app/shared/services/usuario.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/shared/services/alert.service";
import { UsuarioFirestoreService } from "src/app/shared/services/usuario-firestore.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-cadastrar-usuario",
  templateUrl: "./cadastrar-usuario.component.html",
  styleUrls: ["./cadastrar-usuario.component.css"],
})
export class CadastrarUsuarioComponent implements OnInit {
  usuarioDeManutencao: IUsuario;
  estahCadastrando = true;
  nomeBotaoManutencao = "SALVAR";
  IdUsuarioEditar: any = "";
  maxDate: Date = new Date();
  formCadastro: FormGroup = {} as FormGroup;

  constructor(
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
    private usuarioService: UsuarioFirestoreService,
    private alertService: AlertService
  ) {
    this.usuarioDeManutencao = {} as IUsuario;
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get("id");
    const rota = this.rotaAtual.snapshot.url[1].path;

    if (rota == "editar" && idParaEdicao) {
      this.usuarioService
        .pesquisarPorParametro(idParaEdicao)
        .subscribe((usuario) => {
          this.usuarioDeManutencao = usuario;
          console.log(this.usuarioDeManutencao);
        });
      this.IdUsuarioEditar = idParaEdicao;
      this.estahCadastrando = false;
    }
  }

  ngOnInit() {
    this.formCadastro = new FormGroup({
      nomeCompleto: new FormControl("", [
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(3),
      ]),
      idade: new FormControl("", [Validators.required, Validators.min(1)]),
      // dataNascimento: new FormControl("", [Validators.required]),
      cpf: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$"),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"),
      ]),
    });
  }

  manter(): void {
    try {
      if (this.estahCadastrando && this.usuarioDeManutencao) {
        this.usuarioService
          .inserir(this.usuarioDeManutencao)
          .subscribe((usuario) => {
            this.alertService.successAlert("Usuário cadastrado com sucesso!");
            this.roteador.navigate([""]);
          });
      }
    } catch (error) {
      this.alertService.warningAlert(error as string);
    }

    //this.nomeBotaoManutencao = 'Cadastrar';
    //this.roteador.navigate(['listagemusuarios']);
  }

  atualizar() {
    if (this.usuarioDeManutencao) {
      this.usuarioService
        .atualizar(this.usuarioDeManutencao)
        .subscribe((usuario) => {
          this.alertService.successAlert("Usuário atualizado com sucesso!");
          this.roteador.navigate([""]);
        });
    }
  }
}
