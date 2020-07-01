<template>
    <div class="statuses">
        <div class="one-block" v-for="(status, index) in statuses" v-bind:key="index">
            <Lane :status="status" :todos="todos"/>
        </div>
    </div>
</template>

<script>
    import Lane from "./Lane";

    export default {
        name: "Kanban",
        components: {
            Lane
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
        created() {
            const todos = [
                {id: 1, name: "画期的なデザインに変更", contents: "背景色を青に変える", status: 1},
                {id: 2, name: "ストーリー2", contents: "内容2", status: 1},
                {id: 3, name: "ストーリー3", contents: "内容3", status: 2},
                {id: 4, name: "ストーリー4", contents: "内容4", status: 3},
                {id: 5, name: "ストーリー5", contents: "内容5", status: 3},
                {id: 6, name: "ストーリー6", contents: "内容6", status: 4},
                {id: 7, name: "ストーリー7", contents: "内容7", status: 4}
            ];

            this.$store.commit('setTodos', todos);
        },
        computed: {
            todos: function () {
                return this.$store.getters.getTodos;
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