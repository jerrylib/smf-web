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
        console.log(Cookies.setCookie('name', 'demo'));
        console.log(Cookies.getCookie('name'));
        console.log(Cookies.deleteCookie('name'));
        console.log(Cookies.getCookie('name'));
        console.log(Cookies.clearCookie());
    }
}