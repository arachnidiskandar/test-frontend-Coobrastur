import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rotas } from './shared/route';
import { LoginComponent } from './core/login/login.component';
import { PainelClientesComponent } from './core/painel-clientes/painel-clientes.component';


const routes: Routes = [
    { path: Rotas.LOGIN, component: LoginComponent },
    { path: Rotas.PAINEL_CLIENTES, component: PainelClientesComponent },
    { path: '**', redirectTo: Rotas.LOGIN },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
