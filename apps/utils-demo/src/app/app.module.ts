import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {UiFileUploadModule} from '@ng-lmf-utils/ui/file-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, UiFileUploadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
