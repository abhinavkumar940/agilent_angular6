import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/_services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  posts: Array<any>;

  constructor(private dataService: DataService) {
    this.posts = this.dataService.getPosts();
  }

  ngOnInit() {}
}
