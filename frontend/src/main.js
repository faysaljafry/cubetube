import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
// import { Field, Form } from 'vee-validate';
//const VideoBackground = require('vue-responsive-video-background-player');
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Card from 'primevue/card';
import Sidebar from 'primevue/sidebar';
import NavBar from '../src/components/NavBar.vue';
import './index.css';

// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
// import {
//   //   extend,
//   //   ValidationObserver,
//   //   ValidationProvider,
//   setInteractionMode,
// } from 'vee-validate';

// setInteractionMode('eager');

// extend('required', {
//   ...required,
//   message: 'Enter {_field_}',
// });

// extend('oneOf', {
//   ...oneOf,
// });

// extend('max', {
//   ...max,
//   message: '{_field_} may not be greater than {length} characters',
// });

// extend('min', {
//   ...min,
//   message: '{_field_} may not be less than {length} characters',
// });

// extend('email', {
//   ...email,
//   message: 'Email must be valid',
// });

// extend('password', {
//   params: ['target'],
//   validate(value, { target }) {
//     return value === target;
//   },
//   message: 'Password does not match',
// });

// extend('size', {
//   ...size,
//   message: 'video size should be less than 5 MB!',
// });

const app = createApp(App);
// app.config.productionTip = false;
// app.component('ValidationProvider', ValidationProvider);
// app.component('ValidationObserver', ValidationObserver);
app.use(router);
app.use(PrimeVue);
app.use(store);
app.component('NavBar', NavBar);
app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Sidebar', Sidebar);
app.component('RadioButton', RadioButton);
app.component('Checkbox', Checkbox);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Card', Card);
//app.component('video-background', VideoBackground);
// App.use(router);
app.mount('#app');
