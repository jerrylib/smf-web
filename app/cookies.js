// /**
//  * 封装cookie和localStorage
//  */
class Cookies {
    constructor() {};
    static setCookie(key, value) {
        // Canvas绘制代码
        if(!key){
            console.error(`cookie的key不可为[${key}]`);
            return;
        }
        document.cookie = `${key}=${value}`;
    };

    /**
     * 获取cookie的值
     */
    static getCookie(key) {
        if(!key){
            console.error(`cookie的key不可为[${key}]`);
            return;
        }
        let arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    };
    /**
     * 删除特定的cookie的值
     */
    static deleteCookie(key) {
        let exp = new Date();
        exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
        var cval = this.getCookie(keyname);
        document.cookie = key + "=" + cval + "; expires=" + exp.toGMTString();
    };
    /**
     * 清除所有cookie
     */
    static clearCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys&&keys.length>0) {
            for (var i = keys.length; i--;){
                this.deleteCookie(keys[i]);
            }
        }
    }
}
export default Cookies;