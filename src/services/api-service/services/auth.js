export default {
    authCheck: {
        url: '/user/exists',
        method: 'post'
        // auth : true ,
    },
    otpRequest:{
        url: '/user/otp',
        method: 'post'
    },
    otpCheck:{
        url: '/user/otp/check',
        method: 'post'
    },
    registerCheck:{
        url: '/user/register',
        method: 'post'
    },
    loginCheck:{
        url: '/user/login',
        method: 'post'
    },
    resetPassword:{
        url: '/user/password/reset',
        method: 'post'
    },
}
