import { Injectable, Inject } from '@angular/core';
import { FirebaseApp } from '../../../node_modules/angularfire2';
import * as firebase from '../../../node_modules/firebase';

@Injectable()
export class UploadService {

  constructor(@Inject(FirebaseApp) fba: any) { }

  selectedFile: File = null;
  storageService = firebase.storage();
  storageRef = this.storageService.ref();

  selectFile(event) {

    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  uploadFile() {
    
    this.storageRef.child(`images/${this.selectedFile.name}`)
        .put(this.selectedFile)
        .then((snapshot) => console.log('Upload complete', snapshot));
  }
}
