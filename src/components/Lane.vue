<template>
    <div>
        <h4>{{status.name}}</h4>
        <div v-for="(todo, index) in todos" v-bind:key="index">
            <Card v-if="status.num === todo.status" :todo="todo" />
        </div>
    </div>
</template>

<script>
    import Card from "./Card";

    export default {
        name: "Lane",
        components: {
            Card
        },
        props: {
            status: Object,
            todos: Array
        }
    }
</script>

<style scoped>

</style>