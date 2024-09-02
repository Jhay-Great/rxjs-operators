import { Injectable } from '@angular/core';
import { of, from, interval, Observable, take, merge, concat } from 'rxjs';

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
  // this operator is usually used to create a sequence of value or single values
   rxjsOf () {
    // return this.source$;
    return of(1, 2, 3);
   }

  //  creates and returns an observable using the 'from' creation observable
  // creates an observable from an array or iterables or async data
   rxjsFrom () {
    return from(['Aqua', 'Blue', 'Crimson', 'Dark Green', 'Teal']);
   }

  //  returns a stream of data every second
  // take operator is used to limit the number of values emitted from the interval observable
   rxjsInterval () {
    return interval(1000).pipe(take(5));
   }

   concat () {
    const colors$ = this.rxjsFrom();
    const numbers$ = this.rxjsOf();

    return concat(colors$, numbers$);
    
   }

  //  rxjsSubscription () {
  //   this.source$.subscribe(
  //     value => console.log(value),
  //     error => console.log(error.message),
  //     () => console.log('completed...')
  //   )
  //  }
}
