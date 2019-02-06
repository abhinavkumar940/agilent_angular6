import { Directive, ElementRef } from "@angular/core";
import { fromEvent } from "rxjs";

@Directive({
  selector: "[appBanana]"
})
export class BananaDirective {
  constructor(private el: ElementRef) {
    const observable = fromEvent(this.el.nativeElement, "click");

    observable.subscribe({
      next: console.log
    });

    observable.subscribe().unsubscribe();
  }
}
