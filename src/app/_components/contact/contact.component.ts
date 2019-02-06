import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  enquiry = {
    name: "",
    email: "",
    phone: "",
    message: "",
    category: null
  };

  formError = "";

  categories = [
    {
      id: 1,
      name: "Business Enquiry"
    },
    {
      id: 2,
      name: "Career Enquiry"
    },
    {
      id: 3,
      name: "Everything else"
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  submit() {
    alert(`Hey ${this.enquiry.name}, Thank you for your enquiry`);
    this.router.navigate([""]);
  }

  getData() {
    return JSON.stringify(this.enquiry);
  }
}
