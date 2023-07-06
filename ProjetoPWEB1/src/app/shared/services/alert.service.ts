import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import {IMensagem} from '../interfaces/IMensagem'

@Injectable({
  providedIn: 'root'
})
export class AlertService implements IMensagem {

  constructor() { }

  public warningAlert(textLine: string, isShowCancel?: boolean) {
    return Swal.fire({ title: 'Error!',
    text: textLine,
    icon: 'error'
    });
  }

  public successAlert(textLine: string){
    return Swal.fire({ title: 'Sucesso!',
    text: textLine,
    icon: 'success'
    });
  }
}
