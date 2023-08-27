import { defineStore } from "pinia";


export const useCounterStore=defineStore("counter",{
    
    state:()=>({
        count:10
    }),
    getters:{
        doubleCount:(state)=>state.count*2,
        length:(state)=>state.count.toString().length
    },
    actions:{
        increament(){
            this.count++;
        },
        decreament(){
            this.count--;
        }
    }
})