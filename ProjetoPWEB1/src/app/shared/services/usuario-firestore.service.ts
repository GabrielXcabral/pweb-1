import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { IUsuario } from "../interfaces/IUsuario";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { map } from "rxjs/operators";
import { IHorario } from "../interfaces/IHorario";

@Injectable({
  providedIn: "root",
})
export class UsuarioFirestoreService {
  colecaoUsuarios: AngularFirestoreCollection<IUsuario>;
  NOME_COLECAO = "usuarios";

  constructor(private afs: AngularFirestore) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<IUsuario[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoUsuarios.valueChanges({ idField: "id" });
  }

  inserir(usuario: IUsuario): Observable<object> {
    // removendo id pois ele está undefined, já que um novo usuário
    delete usuario.id;
    // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoUsuarios.add({ ...usuario }));
  }

  inserirHorario(usuario: IUsuario): Observable<void> {
    console.log(usuario);
    return from(
      this.colecaoUsuarios.doc(usuario.id).update(Object.assign({}, usuario))
    );
  }

  apagar(id: string): Observable<void> {
    return from(this.colecaoUsuarios.doc(id).delete());
  }

  pesquisarPorParametro(parametro: string | undefined): Observable<IUsuario> {
    // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
    //  para o tipo usuário
    return this.colecaoUsuarios
      .doc(parametro)
      .get()
      .pipe(
        map((document) => Object.assign({ id: document.id }, document.data()))
      );
  }

  atualizar(usuario: IUsuario): Observable<void> {
    const id = usuario.id;
    // removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
    delete usuario.id;
    return from(
      this.colecaoUsuarios.doc(id).update(Object.assign({}, usuario))
    );
  }

  listarMaioresDeIdade(): Observable<IUsuario[]> {
    let usuariosMaioresIdade: AngularFirestoreCollection<IUsuario>;
    // fazendo pesquisas usando o where. Um where pode ser encadeado com outro
    usuariosMaioresIdade = this.afs.collection(this.NOME_COLECAO, (ref) =>
      ref.where("idade", ">", "17 ")
    );
    return usuariosMaioresIdade.valueChanges();
  }
}
