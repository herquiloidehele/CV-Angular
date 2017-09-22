import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponentComponent} from './menu-component/menu-component.component';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {SobreMinComponent} from './sobre-min/sobre-min.component';
import {ConhecimentoComponent} from './conhecimento/conhecimento.component';
import {FormacaoComponent} from './formacao/formacao.component';
import {ContactosComponent} from './contactos/contactos.component';
import {RodapeComponent} from './rodape/rodape.component';
import {ScrollEventModule} from 'ngx-scroll-event';
import {SmoothScrollToDirective, SmoothScrollDirective} from 'ng2-Smooth-Scroll';
import {RouterModule} from '@angular/router';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponentComponent,
        CabecalhoComponent,
        SobreMinComponent,
        ConhecimentoComponent,
        FormacaoComponent,
        ContactosComponent,
        RodapeComponent,
        SmoothScrollToDirective,
        SmoothScrollDirective,

    ],
    imports: [
        BrowserModule,
        ScrollEventModule,
        RouterModule,
        Ng2PageScrollModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
