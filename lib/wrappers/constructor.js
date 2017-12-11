import prototypeExtender from '../prototypeExtender';

export default function (componentConstructor) {
  function scoutComponent() {
    componentConstructor.apply(this);
    this.constructor = prototypeExtender(this.constructor);
  }

  scoutComponent.prototype = Object.create(componentConstructor.prototype);

  return scoutComponent;
}
