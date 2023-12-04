import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReceipesComponent } from "./receipes/receipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ReceipeStartComponent } from "./receipes/receipe-start/receipe-start.component";
import { ReceipeDetailComponent } from "./receipes/receipe-detail/receipe-detail.component";
import { ReceipeEditComponent } from "./receipes/receipe-edit/receipe-edit.component";
import { ReceipeResolverServer } from "./receipes/receipe-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
  { path: '', redirectTo: '/receipes', pathMatch: 'full' },
  {
    path: 'receipes', component: ReceipesComponent, canActivate: [AuthGuard], children: [
      { path: '', component: ReceipeStartComponent },
      { path: 'new', component: ReceipeEditComponent, resolve: [ReceipeResolverServer] },
      { path: ':id', component: ReceipeDetailComponent, resolve: [ReceipeResolverServer] },
      { path: ':id/edit', component: ReceipeEditComponent },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}