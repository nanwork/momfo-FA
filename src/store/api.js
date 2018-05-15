import axios from 'axios'

const instance = axios.create({
  baseURL: '/momfo/',
  timeout: 1000
});

export default {
  //申请匹配项目
  applyProject: params => instance.post('user/register', params),
  //申请匹配资金
  applyCapital: params => instance.post('user/register', params),
}