<template>
    <div>
        <h4>{{status.name}}</h4>
        <div v-for="(todo, index) in todos" v-bind:key="index">
            <div v-if="status.num === todo.status" @click="$emit('selected', todo)">{{todo.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Status",
        props: {
            status: Object,
            todos: Array
        }
    }
</script>

<style scoped>

</style>