import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef) {
    console.log('directiva llamada');
    // elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @Input("appResaltado") nuevoColor?: string;

  @HostListener('mouseenter') mouseEntro(){
    console.log(this.nuevoColor);
    this.resaltar( this.nuevoColor || 'yellow' );
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
    // this.elementRef.nativeElement.style.backgroundColor = null;
  }

  private resaltar(color: any) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
