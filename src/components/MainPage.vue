<template>
    <div>
        <h2>かんばんボード</h2>
        <p>このボードは、テクコン部新人3名によるVue.jsの演習成果物である。</p>
        <Kanban :todos="todos" v-on:selected="selected"/>
        <DetailForm
                :show-details="showDetails"
                :selectedTodo="selectedTodo"
                v-on:closeEvent="showDetails = false"
                v-on:changeEvent="change"
                v-on:removeEvent="remove"
                ref="new"
        />
    </div>
</template>

<script>
    import DetailForm from "./DetailForm";
    import Kanban from "./Kanban";

    export default {
        name: "MainPage",
        components: {
            DetailForm,
            Kanban
        },
        data() {
            return {
                showContent: false,
                showDetails: false,
                storyCount: 100,
                todos:
                    [
                        {id: 1, name: "画期的なデザインに変更", contents: "背景色を青に変える", status: 1},
                        {id: 2, name: "ストーリー2", contents: "内容2", status: 1},
                        {id: 3, name: "ストーリー3", contents: "内容3", status: 2},
                        {id: 4, name: "ストーリー4", contents: "内容4", status: 3},
                        {id: 5, name: "ストーリー5", contents: "内容5", status: 3},
                        {id: 6, name: "ストーリー6", contents: "内容6", status: 4},
                        {id: 7, name: "ストーリー7", contents: "内容7", status: 4}
                    ],
                selectedTodo: {}
            }
        },
        methods: {
            selected(selectedTodo) {
                this.showDetails = true;
                this.selectedTodo = selectedTodo;
                this.$refs.new.display(selectedTodo);
            },
            change(selectedTodo) {
                this.showDetails = false;
                this.todos = this.todos.map(todo => todo.id === selectedTodo.id ? selectedTodo : todo);
            },
            remove(selectedTodo) {
                this.showDetails = false;
                this.todos = this.todos.filter(todo => todo.id !== selectedTodo.id);
            }
        }
    }
</script>

<style scoped>

</style>