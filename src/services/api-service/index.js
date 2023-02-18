import axios from 'axios'
import services from './services'
import AsyncStorage from '@react-native-async-storage/async-storage'

axios.defaults.baseURL = 'https://exchange.arzfinex.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const apiService = axios.create({
    baseURL: 'https://aj.atozcrypto.net/api/v2',
    timeout: 0,
    headers: { Accept: '*/*', 'Content-Type': 'application/json' }
})

/**  Axios Interceptors : Request  **/
webService.interceptors.request.use(
    async (config) => {

        const service = services[config.name]
        if (!service) throw new Error(`Service: ${config.name} => Not Found !`)

        /**  Set Request Method   **/
        config.method = service.method || 'POST'

        /** Set Request Url (Resolver For Insert Inline Params) **/
        // TODO insertResolver
        config.url = !config.insertParams ? service.url : 'insertResolver(service.url, config.insertParams)'

        /**  Set Request baseURL Based on Service   **/
        if (service.baseURL) config.baseURL = service.baseURL

        /**  Set Request Headers Based on Service   **/
        if (service.headers) config.headers = { ...config.headers, ...service.headers }

        /**  Set Request Authorization Props   **/
        const storageToken = await AsyncStorage.getItem('@token')
        if (service.auth) config.headers.Authorization = 'Bearer '+storageToken

        console.log(config)

        return config
    },
    (error) => {
        console.log('Interseptor Rejection!')
    }
)

/**  Axios Interceptors : Response  **/
webService.interceptors.response.use(
    (response) => {
        console.log('resolved', '\n', response)
        return { ...response, success: true }
    },
    (error) => {
        console.log('rejected', '\n', error)
        const message = error

        return { ...error.response, success: false, message }
    }
)

export default apiService
