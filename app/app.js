/**
 * ndr jssdk
 */
import lcServer from './lcServer';
import config from './config';
//
let username = 'libin';
document.cookie="name1="+username;
document.cookie="name="+username;
lcServer.setEnv(config.env);
console.log(lcServer.getAssetList());
