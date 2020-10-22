import { Component } from '@angular/core';

@Component({
  selector: 'ng-lmf-utils-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onFileChanged(event: any) {
    console.log({event})
  }
}
