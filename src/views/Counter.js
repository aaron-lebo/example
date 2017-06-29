import m from 'mithril';

import model from '../models/Counter';

class Counter {
    oninit(vnode) {
        model.value = vnode.attrs.value || 1;
    }

    view() {
        return m('h1', {onclick: model.inc}, model.value);
    }
}

export default Counter;
