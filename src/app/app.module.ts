import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./_components/home/home.component";
import { AboutComponent } from "./_components/about/about.component";
import { PostPreviewComponent } from "./_components/post-preview/post-preview.component";
import { PostComponent } from "./_components/post/post.component";
import { NavigationComponent } from "./_components/navigation/navigation.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { LoginComponent } from "./_components/login/login.component";
import { LayoutComponent } from "./_components/layout/layout.component";
import { BananaDirective } from "./_directives/banana.directive";
import { ContactComponent } from "./_components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PostPreviewComponent,
    PostComponent,
    NavigationComponent,
    FooterComponent,
    LoginComponent,
    LayoutComponent,
    BananaDirective,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
