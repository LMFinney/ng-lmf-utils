import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-lmf-utils-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() fileUploadDisabled: boolean | undefined;
  /**
   * A string that defines the file types the file input should accept. This string is a
   * comma-separated list of unique file type specifiers. Because a given file type may be
   * identified in more than one manner, it's useful to provide a thorough set of type specifiers
   * when you need files of a given format.
   */
  @Input() accept: string | undefined;
  @Input() altText = 'File Upload';
  @Input() icon = 'cloud_upload';
  @Output() fileChanged = new EventEmitter<string>();
}
