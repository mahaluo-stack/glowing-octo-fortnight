import { ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';

@Injectable()
export class ComponentService {

  viewContainerRef!: ViewContainerRef;

  constructor() { }

  createDynamicComponent(component: Type<any>): Promise<ComponentRef<any>> {
    this.viewContainerRef.clear();
    return Promise.resolve(this.viewContainerRef.createComponent(component));
  }
}
