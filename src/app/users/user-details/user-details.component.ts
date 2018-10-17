import { Component, OnInit } from '@angular/core';
import { User } from '../../../../node_modules/firebase';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  user: User;

  constructor(private _uploadService: UploadService) { }

  onFileSelected() {
    this._uploadService.selectFile(event);
  }

  onUpload() {
    this._uploadService.uploadFile();
  }

  ngOnInit() {}

}
