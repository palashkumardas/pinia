<template>
    <div>
        <P class="text-3xl font-bold text-center text-blue-500">{{count }}</P>
        <button @click="store.increament" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
        Counter Value:{{ count }}
        <button @click="store.decreament" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">-</button>
        <br>
        <p>The length :{{ store.length }}</p>
        <p>The Double Count Value :{{ store.doubleCount }}</p>

    </div>
</template>

<script setup>
// import { computed } from 'vue';
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia';
const store=useCounterStore();

const { count } = storeToRefs(store);
/* function increament(){
    store.count++;
}
function decreament(){
    store.count--;
} */
// const length=computed(()=>store.count.toString().length);
// const length=store.count.toString().length;
</script>

<style lang="scss" scoped>

</style>