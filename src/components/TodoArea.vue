<template>
    <div class="statuses">
        <div class="one-block" v-for="(status, index) in statuses" v-bind:key="index">
            <Status :status="status" :todos="todos" v-on:selected="selected"/>
        </div>
    </div>
</template>

<script>
    import Status from "./Status";

    export default {
        name: "TodoArea",
        components: {
            Status
        },
        props: {
            todos: Array
        },
        data() {
            return {
                statuses: [
                    {name: 'Todo', num: 1},
                    {name: 'Doing', num: 2},
                    {name: 'Review', num: 3},
                    {name: 'Done', num: 4}
                ]
            }
        },
        methods: {
            selected(todo) {
                this.$emit('selected', todo);
            }
        }
    }
</script>

<style scoped>
    .statuses {
        display: flex;
        justify-content: space-between;
        border: solid 1px black;
    }

    .one-block {
        padding: 20px;
    }
</style>