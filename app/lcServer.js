import Cookies from './cookies';
// import store from './store';
var defaultConfigrations = {
    env: 'dev',
    version: Math.random()
};
var configrations = defaultConfigrations;
export default {
    //设置执行环境变量。
    setEnv: (env) => {
        configrations.env = env;
    },
    getLocalTime: function () {
        return new Date();
    },
    getAssetList: function () {
        console.log(Cookies.setCookie('', 'libin123'));
        console.log(Cookies.getCookie('name'));
        console.log(Cookies.deleteCookie('name'));
        console.log(Cookies.getCookie('name'));
        console.log(Cookies.clearCookie());
        // store.clear();
        //console.log(Cookies.deleteCookie(''));
        // console.log(Cookies);
        // Cookies.clearCookie('name1');
        // return Cookies.getCookie('name1');
    }
}