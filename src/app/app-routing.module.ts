import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { CreateOfferComponent } from './components/actions/create-offer/create-offer.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { BuyOffersListComponent } from './components/market/buy-offers-list/buy-offers-list.component';
import { SellOffersListComponent } from './components/market/sell-offers-list/sell-offers-list.component';
import { OfferDetailsComponent } from './components/market/offer-details/offer-details.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { EditOfferComponent } from './components/actions/edit-offer/edit-offer.component';
import { EditProfileComponent } from './components/actions/edit-profile/edit-profile.component';


const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  {
    path: "user", component: EditProfileComponent,
    children: [
      { path: "**", component: EditProfileComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: SignUpComponent },
  { path: "create", component: CreateOfferComponent },
  { path: "market/buy", component: BuyOffersListComponent },
  { path: "market/sell", component: SellOffersListComponent },
  {
    path: "details", component: OfferDetailsComponent,
    children: [
      { path: "**", component: OfferDetailsComponent }
    ]
  },
  {
    path: "edit", component: EditOfferComponent,
    children: [
      { path: "**", component: EditOfferComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
