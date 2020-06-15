// src/util/axios.js

import axios from "axios";

// 当前项目请求都是 post 方式, 服务器已经添加了跨域操作

// 此时对于 前端传递数据的 header 有严格要求, 必须是:

export const axios_instance = axios.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  baseURL: "http://www.codeboy.com/mfresh/data/"
});
