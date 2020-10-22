import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
})
export class UiFileUploadModule {}
