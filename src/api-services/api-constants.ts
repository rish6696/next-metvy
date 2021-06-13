const  GET_URL={
    0 :'https://api2.metvy.com',
    1: 'http://api-staging.metvy.com',
    2: 'http://192.168.1.3:3000'
}

const env = 0;

export const BASE_URL= GET_URL[env]