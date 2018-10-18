import './styles/index.scss';
import components from './components/components';

const Andromeda = {
    install(Vue) {

        for (const key in components) {
            const component = components[key];
            Vue.component(component.name, component);
        }

    }
}

export default Andromeda;

