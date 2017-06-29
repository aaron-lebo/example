import m from 'mithril';

import Counter from './views/Counter';

class Layout {
    view(vnode) {
        return m('main',
            m('nav',
              m('a[href=/title]', {oncreate: m.route.link}, 'title'),
              m('br'),
              m('a[href=/counter/1]', {oncreate: m.route.link}, 'counter')
            ),
            m('div', vnode.children)
        );
    }
}

m.route(document.body, '/title', {
    '/title': {
        render() {
            return m(Layout, m('input', {oninput: m.withAttr('value', v => document.title = v)}));
        }
    },
    '/counter/:value': {
        render(vnode) {
            return m(Layout, m(Counter, vnode.attrs));
        }
    }
});
