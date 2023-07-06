import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent {
  imagemUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.imagemUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/hifpb.png');
  }
}
