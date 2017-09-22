import { Component } from '@angular/core';
import {ScrollEvent, ScrollEventModule} from 'ngx-scroll-event';
import {PageScrollService} from 'ng2-page-scroll';

declare let jquery: any;

import {rolandoScroll} from './../assets/scripts/funcoes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {




  constructor(private pageScrollService: PageScrollService){

  }


  onScrollPage(event: ScrollEvent){
    rolandoScroll();
  }


}
