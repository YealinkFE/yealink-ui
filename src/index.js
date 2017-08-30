import Input from './components/input';
import { Select, Option } from './components/select';

const components = {
    Input,
    Select,
    Option: Option
};

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(components, { install });