import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector : '[apphighlight]'
})
export class HighlightDirective{

    constructor(private elementRef : ElementRef){
        // console.log("App Highlight", this.elementRef.nativeElement);
        this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }
}