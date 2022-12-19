import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject = new Subject<any>();

  sendAddTaskEvent(value:any) {
    this.subject.next(value);
  }

  getAddTaskEvent():Observable<any> {
    return this.subject.asObservable();
  }
}
