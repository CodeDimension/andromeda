import './styles/index.scss';
import Vue from 'vue';
import components from './components/components';

const Andromeda = {
    install(Vue) {

        for (const key in components) {
            const component = components[key];
            Vue.component(component.name, component);
        }

    }
}

if (process.browser && window.Vue) {
    Vue.use(Andromeda);
}

export default Andromeda;

