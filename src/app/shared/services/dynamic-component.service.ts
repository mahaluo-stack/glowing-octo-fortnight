import { ComponentRef, Injectable, Component, Type, ViewContainerRef } from '@angular/core';

@Injectable()
export class DynamicFoodDataComponentService {

  viewContainerRef!: ViewContainerRef;

  constructor() { }

  createDynamicComponent(component: Type<any>): Promise<ComponentRef<any>> {

    return Promise.resolve(this.viewContainerRef.createComponent(component));
  }
}
