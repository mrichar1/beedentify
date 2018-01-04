import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ImageDataService {
  private dataSource = new BehaviorSubject<Array<object>>([]);
  image_data = this.dataSource.asObservable();

  constructor() {}

  changeData(data: any) {
    console.log(data)
    this.dataSource.next(data)
  }
}
