import global from './global'
import auth from "./auth";
import KYC from './KYC'

const services = {
    ...global, ...auth, ...KYC
}

export default services
