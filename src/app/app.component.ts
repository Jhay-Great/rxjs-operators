import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// local module imports
import { RxjsOperatorsService } from './services/rxjs-operators.service';

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
    this.ofOperator();
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

  // emitRxjsData () {
  //   console.log(this.rxjsOperators.rxjsSubscription())
  // }
}
