// 本地测试API
const devBaseURL = 'http://localhost:3200';
const proBaseURL = 'http://localhost:3200';
// 已经部署到服务器上的API
// const devBaseURL = 'http://musicapi.zaixianlive.fun/'
// const proBaseURL = 'http://musicapi.zaixianlive.fun/'
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
// 区分生产环境还是开发环境
export const TIMEOUT = 8000;
