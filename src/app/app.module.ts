import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FirebaseModule } from './firebase.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { OfferDetailsComponent } from './components/market/offer-details/offer-details.component';
import { CreateOfferComponent } from './components/actions/create-offer/create-offer.component';
import { EditOfferComponent } from './components/actions/edit-offer/edit-offer.component';
import { HomeComponent } from './components/home/home.component';

import { SignUpService } from './core/services/sign-up.service';
import { AuthService } from './core/services/auth.service';
import { ProfileComponent } from './components/user/profile/profile.component';
import { FbActionsService } from './core/services/fb-actions.service';
import { SellOffersListComponent } from './components/market/sell-offers-list/sell-offers-list.component';
import { BuyOffersListComponent } from './components/market/buy-offers-list/buy-offers-list.component';
import { EditProfileComponent } from './components/actions/edit-profile/edit-profile.component';
import { ConfirmDeleteDialogComponent } from './components/shared/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    SignUpComponent,
    BuyOffersListComponent,
    OfferDetailsComponent,
    CreateOfferComponent,
    EditOfferComponent,
    HomeComponent,
    ProfileComponent,
    SellOffersListComponent,
    EditProfileComponent,
    ConfirmDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FirebaseModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SignUpService, AuthService, FbActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
