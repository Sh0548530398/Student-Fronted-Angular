import { Route, RouterModule } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { ProfileComponent } from "./profile/profile.component";
import { ErrorPageComponent } from "src/app/error-page/error-page.component";
import { NgModule } from "@angular/core";
import { LogInComponent } from "./log-in/log-in.component";
import { CanActivateGaurd } from "./canActivateGaurd.service";






const SET_ROUTES: Route[]=[
    {path:"", redirectTo:"acount", pathMatch:"full"},
    {path:"acount", component: AccountComponent, canActivate:[CanActivateGaurd]},
    {path:"favorites", component: FavoritesComponent},
    {path:"profile", component: ProfileComponent},
    {path:"login",component:LogInComponent},
    {path:"**", component:ErrorPageComponent}

]

@NgModule({
    imports:[RouterModule.forChild(SET_ROUTES)],
    exports:[RouterModule]
})

export class SetRoutingModule{

}