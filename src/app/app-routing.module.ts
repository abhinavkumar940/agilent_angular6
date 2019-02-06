import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./_components/home/home.component";
import { AboutComponent } from "./_components/about/about.component";
import { PostComponent } from "./_components/post/post.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./_components/login/login.component";
import { LayoutComponent } from "./_components/layout/layout.component";
import { AuthGuard } from "./_guards/auth.guard";
import { ContactComponent } from "./_components/contact/contact.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
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
        path: "contact",
        component: ContactComponent
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
