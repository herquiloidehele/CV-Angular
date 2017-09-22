import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {ConhecimentoComponent} from './conhecimento/conhecimento.component';

const ROTAS: Routes = [

    {path: '', component: AppComponent},
    {path: 'conhecimento', component: ConhecimentoComponent},
    {path: 'cabecalho', component: CabecalhoComponent}
];

export const RoutingModule = RouterModule.forRoot(ROTAS);
