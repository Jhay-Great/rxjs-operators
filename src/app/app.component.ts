import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// local module imports
import { RxjsOperatorsService } from './services/rxjs-operators.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxj-basics';

  constructor (
    private rxjsOperators: RxjsOperatorsService,
  ) {
    // this.ofOperator();
    // this.fromOperator();
    // this.intervalOperator();
    // this.combinedOperation();
    // this.error();
    
    // console.log('rxjs data: ', this.rxjsOperators.rxjsSubscription())
    // this.rxjsOperators.rxjsSubscription();
    // this.emitRxjsData();
  };

  ofOperator () {
    const subscriber = this.rxjsOperators.rxjsOf().subscribe(
      val => {
        val += 2;
      console.log(val);
    },
    error => {
      console.log(error);
    },
    () => {
      console.log('finished...')
    }
  );

  subscriber.unsubscribe();


  }

  // subscribes to the returned of observable and logs the emitted value, error and completed
  // it also unsubscribes to the observable to prevent memory leaks
  fromOperator () {
    const subscription = this.rxjsOperators.rxjsFrom().subscribe(
      value => console.log(value),
      error => console.log(error.message),
      () => console.log('completed...'),
    )

    subscription.unsubscribe();
  }

  intervalOperator () {
    const subscription = this.rxjsOperators.rxjsInterval().subscribe(
      val => console.log(val),
      error => console.log(error.message),
      () => 'completed value emission'
    );

    // subscription.unsubscribe(); no need because of the take();
  }

  combinedOperation () {
    const subscription = this.rxjsOperators.concat().subscribe(
      val => console.log(val),
      error => console.log(error),
      () => console.log('completed...'),
    );

    subscription.unsubscribe();
  }

  error () {
    const subscription = this.rxjsOperators.errorHandler().subscribe(
      val => console.log(val),
      error => console.error(error.message),
      () => ('finished emitting all the values'),
    );

    subscription.unsubscribe();
  }


  

}
