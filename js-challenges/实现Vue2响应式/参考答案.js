

// 核心劫持函数，递归给所有属性加getter/setter
function observer(obj){
    if(typeof obj !== "object" || obj===null){
        return 
    }

    Object.keys(obj).forEach((key)=>{
        defineReactive(obj,key,obj[key])
    })
}

// 利用defineProperty给单条属性加响应式
function defineReactive(obj,key,value){
    observer(value)
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(newValue){
            if(newValue===value){
                return
            }
            value=newValue
        },
        enumerable:true,
        configurable:true
    })
}

// 每条属性都对应一个Dep实例，用于维护该条属性的依赖者（订阅者）
class Dep{
    static target
    constructor(){
        this.subs=[]
    }

    // 增加订阅者
    addSub(){

    }

    // 通知所有订阅者更新
    notify(){

    }
}


class Watcher{
    constructor(vm,cb,){

    }
}