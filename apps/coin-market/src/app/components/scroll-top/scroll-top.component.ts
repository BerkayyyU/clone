import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'coin-market-scroll-top',
    templateUrl: './scroll-top.component.html',
    styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent implements OnInit {
    windowScrolled: boolean;
    constructor(@Inject(DOCUMENT) private document: Document) {}
    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop > 500
        ) {
            this.windowScrolled = true;
        } else if (
            (this.windowScrolled && window.pageYOffset) ||
            document.documentElement.scrollTop ||
            document.body.scrollTop < 10
        ) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll =
                document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 100) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - currentScroll / 8);
            }
        })();
    }

    ngOnInit(): void {}
}
