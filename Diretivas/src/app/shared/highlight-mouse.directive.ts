import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  //Escuta um evento de uma tag e realiza algo
  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
      );*/
      this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
      );*/
      this.backgroundColor = 'white';
  }

  //modifica alguma propriedade de alguma tag
  //@HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra;
    return this.backgroundColor;
  }
  private backgroundColor: string = '';

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer
    ) { }


}
