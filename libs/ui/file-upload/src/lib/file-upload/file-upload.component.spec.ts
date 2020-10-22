import { async, TestBed } from '@angular/core/testing';

import { FileUploadComponent } from './file-upload.component';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUploadComponent],
    });

    component = TestBed.inject(FileUploadComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
