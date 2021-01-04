import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ToastService {

  constructor(private toastr: ToastrService) {}

  showSuccess(title: string, msg: string) {
    this.toastr.toastrConfig.preventDuplicates = true;
    this.toastr.success(msg, title);
  }

  showInfo(msg: string, title: string) {
    this.toastr.toastrConfig.preventDuplicates = true;
    this.toastr.info(msg, title, {
    });
  }


  showError(msg: string, title: string) {
    this.toastr.toastrConfig.preventDuplicates = true;
    this.toastr.info(msg, title);
   }


}
