import wrapLifecycle, { state } from './scout-lifecycle-wrapper';

export default function(componentConstructor) {

  function scoutComponent() {
    componentConstructor.apply(this);
    this.constructor = wrapLifecycle(this.constructor);
  }
  
  scoutComponent.prototype = Object.create(componentConstructor.prototype);

  return scoutComponent;
};
export { state };
