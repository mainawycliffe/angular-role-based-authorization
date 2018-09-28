import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { WritterComponent } from './writter/writter.component';
import { AuthorComponent } from './author/author.component';
import { GuestComponent } from './guest/guest.component';
import { AuthorizationService } from './authorization.service';
import { AuthorizationGuard } from './authorization.guard';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WritterComponent,
    AuthorComponent,
    GuestComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({})
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
