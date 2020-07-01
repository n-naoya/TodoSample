<template>
    <div class="card" @click="selected">
        <div>{{todo.name}}</div>
        <DetailForm
                :show-details="showDetails"
                :todo="todo"
                v-on:closeEvent="showDetails = false"
                ref="detail"
        />
    </div>
</template>

<script>
    import DetailForm from "./DetailForm";

    export default {
        name: "Card",
        components: {
            DetailForm
        },
        data() {
            return {
                showContent: false,
                showDetails: false,
            }
        },
        props: {
            todo: Object
        },
        methods: {
            selected() {
                console.log(this.todo)
                this.showDetails = true;
                this.$refs.detail.display(this.todo);
            }
        }
    }
</script>

<style scoped>
    .card {
        margin: 10px;
        padding: 10px;
        border: solid 1px black;
        background-color: lightgoldenrodyellow;
    }
</style>