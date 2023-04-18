import request from "utils/Request";

interface Login {
    us:string
    pw:string
}
export interface Auth {
    aka:string
    por:string
}

export function Login(data:Login) {
    return request({
        url:'/god/login',
        method:"post",
        data
    })
}
export function Keep(data:Auth) {
    return request({
        url:'/god/keep',
        method:"post",
        data
    })
}
export function Userlist() {
    return request({
        url:'/god/userlist',
        method:"post",
    })
}