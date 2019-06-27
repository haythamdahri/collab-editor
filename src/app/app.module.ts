import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from 'ckeditor4-angular';
import {AuthService} from './services/auth/auth.service';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CollaborateComponent} from './collaborate/collaborate.component';
import {PageGuardService} from './services/auth/page-guard.service';
import {AuthenticatedGuardService} from './services/auth/authenticated-guard.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { CollaborateListComponent } from './collaborate-list/collaborate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent,
    CollaborateComponent,
    CollaborateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule
  ],
  providers: [PageGuardService, AuthenticatedGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
