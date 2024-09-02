import { Injectable } from '@angular/core';
import { of, from, interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsOperatorsService {

  private source$!: Observable<number>;

  data$ = new Observable()

  constructor() { 
    // declares the of observable to create a stream of number observable data
    // this.source$ = of(1, 2, 3);
   }

  //  creates and returns an observable using the of creation observable
   rxjsOf () {
    // return this.source$;
    return of(1, 2, 3);
   }

  //  creates and returns an observable using the 'from' creation observable
   rxjsFrom () {
    return from(['a', 'b', 'c', 'd']);
   }

  //  rxjsSubscription () {
  //   this.source$.subscribe(
  //     value => console.log(value),
  //     error => console.log(error.message),
  //     () => console.log('completed...')
  //   )
  //  }
}
