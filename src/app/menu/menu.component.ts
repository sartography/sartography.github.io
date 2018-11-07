import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
  }

  scroll(anchor: string) {
    if (anchor) {
      this.viewportScroller.scrollToAnchor(anchor);
    } else {
      this.viewportScroller.scrollToPosition([0, 0]);
    }
  }
}
