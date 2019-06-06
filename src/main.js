// import _ from 'lodash';
import Vue from 'vue';
import VueResource from 'vue-resource';
import Vant from 'vant';
import 'vant/lib/index.css';
// import 'assets/styles/main.sass';
// import Auth from './utils/auth';
import App from './App';
// import store from './store';
// import router from './router';
// import decidedByDomain from './utils/decided-by-domain';
// import 'icons/style.css';

// import { mapGetters } from 'vuex';

// Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Vant);

Vue.mixin({
    data () {
        return {
            // ...commonMixin,
            // ...Eventlog.mixins,
        };
    },
    computed: {
        // ...mapGetters({
        //     env: 'env'
        // }),
        // isLogout () {
        //     return this.$route.name === 'logout';
        // },
        // isLogin () {
        //     return this.$route.name === 'login';
        // },
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // router,
    // store,
    components: { App },
    template: '<App/>'
});

