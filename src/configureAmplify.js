
export const config = {
    "aws_project_region": "ap-south-1",
    "aws_cognito_identity_pool_id": "ap-south-1:7c21e215-c9e4-433d-9c39-20b9c0f8ca4b",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_99wvtqHQd",
    "aws_user_pools_web_client_id": "4dma9kljjjklvf5sto8fbnkdri",
    "oauth": {
        "domain": "saasnextapp3b8ca1dc-3b8ca1dc-dev.auth.ap-south-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/",
        "redirectSignOut": "http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "ssr":true
};

import Amplify from 'aws-amplify';

Amplify.configure(config);
