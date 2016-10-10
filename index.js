import * as skate from 'skatejs';

skate.define('x-hello', {
  props: {
    name: { attribute: true }
  },
  render(elem) {
    // skate.h('div', `Hello, ${elem.name}`);
    skate.vdom.text(`Hi, ${elem.name}`)
  }
});
