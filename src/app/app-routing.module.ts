import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './views/main/main.component';
import {JokeComponent} from './views/joke/joke.component';
import {SecretComponent} from './views/secret/secret.component';
import {KeeperOfSecretsGuard} from './controller/keeper-of-secrets.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: MainComponent, children: [
      {path: 'joke', component: JokeComponent},
      {path: 'secret', component: SecretComponent, canActivate:[KeeperOfSecretsGuard],
        }
    ]},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
