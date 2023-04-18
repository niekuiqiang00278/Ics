import {Login} from "../base/Api";
import {UecWrapper} from "./base/wrapper/UecWrapper";

export interface Kfkw{
    us:string
    aka:string
    por:string
}
export interface Lsdc {
    us:string
    pw:string
    ws:boolean
    login:boolean
    aka:string
    por:string
    keep:boolean
}
interface Oes {
    aka:string
    por:string
    ws:any
}
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        args.push('ccw')
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
class MyApp {
    private cache: Oes;
    constructor() {
        this.cache = {}
    }
    @methodDecorator
    login(us: string, pw: string,ccw:string='ccw') {
        console.log(ccw);
        return Login({us,pw})

    }
    ws(k:Lsdc){
        const ws = new WebSocket(`ws://192.168.31.208:8082/ffw/test/${k.aka}`)
        const self = this
        ws.onopen = ()=>{
            k.ws = false;
            k.keep = true
            self.cache[k.aka] = {por:k.aka,ws}
            console.log(self.cache);
        }

    }
}


export const apm = new MyApp();