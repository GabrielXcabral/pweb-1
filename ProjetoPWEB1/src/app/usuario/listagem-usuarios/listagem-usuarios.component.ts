import { Component, OnChanges, OnInit } from "@angular/core";
import { UsuarioService } from "../../shared/services/usuario.service";
import { IUsuario } from "src/app/shared/interfaces/IUsuario";
import { map, Observable } from "rxjs";
import { UsuarioFirestoreService } from "src/app/shared/services/usuario-firestore.service";

@Component({
  selector: "app-listagem-usuarios",
  templateUrl: "./listagem-usuarios.component.html",
  styleUrls: ["./listagem-usuarios.component.css"],
})
export class ListagemUsuariosComponent {
  // usuarios: IUsuario[] = [];
  usuarios: Observable<IUsuario[]>;
  quantidadeDeUsuarios: Observable<number>;

  constructor(private usuarioService: UsuarioFirestoreService) {
    this.usuarios = usuarioService.listar();
    this.quantidadeDeUsuarios = this.usuarios.pipe(
      map((usuarios) => usuarios.length)
    );
  }

  excluir(usuarioARemover: IUsuario): void {
    // if (usuarioARemover.id) {
    //   this.usuarioService
    //     .apagar(usuarioARemover.id)
    //     .subscribe((usuarioRemovido) => {
    //       const indx = this.usuarios.findIndex(
    //         (usuario) => usuario.id === usuarioARemover.id
    //       );
    //       this.usuarios.splice(indx, 1);
    //     });
    // }
  }

  inserir(usuario: IUsuario): void {
    if (usuario != null) {
      console.log(this.usuarioService.inserir(usuario));
    }
  }

  atualizar(usuario: IUsuario) {
    if (usuario != null) {
      this.usuarioService.atualizar(usuario);
    }
  }
}
