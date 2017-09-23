import {Component, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {PageScrollInstance, PageScrollService} from 'ng2-page-scroll';
import {DOCUMENT} from '@angular/common';

declare let $: any;

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit{



    constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
    }

  ngOnInit() {
  }



  onClickMenu(target){
      const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
          document: this.document,
          scrollTarget: target
      });
      this.pageScrollService.start(pageScrollInstance);

      $(window).scrollTop($(window).scrollTop() - 200);

  }


}
