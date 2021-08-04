import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[NgElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
    if (!condition){
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>, //Para criar templates
    private _viewContainerRef: ViewContainerRef //Para pegar conteudos de tags
  ) { }


}
