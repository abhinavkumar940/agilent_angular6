import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/_services/data.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post;

  constructor(
    private dataService: DataService,
    private activedRoute: ActivatedRoute
  ) {
    this.activedRoute.params.subscribe(newParams => {
      if (newParams.id) {
        console.log(newParams.id);
        const castedId = +newParams.id;

        this.post = dataService.getPost(castedId);

        console.log(this.post);
      }
    });
  }

  ngOnInit() {}
}
