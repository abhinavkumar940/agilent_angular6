import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post-preview",
  templateUrl: "./post-preview.component.html",
  styleUrls: ["./post-preview.component.css"]
})
export class PostPreviewComponent implements OnInit {
  @Input() post;

  constructor() {}

  ngOnInit() {}
}
