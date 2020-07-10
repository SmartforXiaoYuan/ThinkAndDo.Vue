import HttpRequest from '@/libs/axios'

const baseUrl = webConfig.api[webConfig.appDefaultApi]
const axios = new HttpRequest(baseUrl)

export default axios
