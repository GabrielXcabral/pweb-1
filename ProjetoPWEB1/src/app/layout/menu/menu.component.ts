import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface Node {
  name: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'Usuários',
    children: [{ name: 'Cadastrar' }],
  },
  {
    name: 'Aluno',
    children: [{ name: 'Cadastrar Aluno' }],
  },
  {
    name: 'Horários',
    children: [{ name: 'Inserir' }],
  },
  {
    name: 'Listar horários',
    children: [{ name: 'Listar horários' }],
  },
];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  imagemUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.imagemUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/IFPB.png');
    this.dataSource.data = TREE_DATA;
  }

  treeControl = new NestedTreeControl<Node>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();

  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;
}
