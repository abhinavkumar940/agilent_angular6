import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/_services/data.service";
import { Observable } from "rxjs";
import { map, throttleTime } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  posts: Array<any>;

  constructor(private dataService: DataService) {
    this.posts = this.dataService.getPosts();

    const myObservable = new Observable(observer => {
      setInterval(() => observer.next(new Date()), 100);
    }).pipe(
      throttleTime(1000),
      map((date: Date) => date.getSeconds())
    );

    const subscriber = myObservable.subscribe({
      next: console.log
    });
  }

  ngOnInit() {}
}
