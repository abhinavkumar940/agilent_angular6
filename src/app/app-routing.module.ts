import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./_components/home/home.component";
import { AboutComponent } from "./_components/about/about.component";
import { PostComponent } from "./_components/post/post.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./_components/login/login.component";
import { LayoutComponent } from "./_components/layout/layout.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "posts/:id",
        component: PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
