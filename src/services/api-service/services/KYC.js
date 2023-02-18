export default {

    kycCheck: {
        url: '/verification/status',
        method: 'get',
        auth: true
    },
    kycReport: {
        url: '/verification',
        method: 'get',
        auth: true
    },
    acceptRules: {
        url: '/verification/accept_rules',
        method: 'post',
        auth: true
    },
    identityInfo: {
        url: '/verification/identity_data',
        method: 'post',
        auth: true
    },
    selfie: {
        url: '/verification/selfie',
        method: 'post',
        auth: true
    },
    checkCredit: {
        url: '/banks',
        method: 'get',
        auth: true
    },
    bankInfo: {
        url: '/verification/credit_card',
        method: 'post',
        auth: true
    },
    sendEmailCode: {
        url: '/verification/send_email_code',
        method: 'post',
        auth: true
    },
    confirmEmailCode: {
        url: '/verification/confirm_email_code',
        method: 'post',
        auth: true
    }
}
