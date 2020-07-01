<template>
    <div class="overlay">
        <div class="content" v-show="showDetails" @click="closeModalDetails">
            <div @click="stopModal">
                <h2>詳細</h2>
                <p>ストーリー名</p>
                <textarea v-model="todo.name" rows="1" cols="20"></textarea>
                <p>作業項目</p>
                <select v-model="todo.status">
                    <option disabled value="">作業項目を選んでください</option>
                    <option v-for="(option, index) in options" v-bind:value="option.id" v-bind:key="index">
                        {{ option.name }}
                    </option>
                </select>
                <p>内容</p>
                <textarea v-model="todo.contents" rows="4" cols="40"></textarea>
                <div class="buttons">
                    <button v-on:click="closeModalDetails">キャンセル</button>
                    <button v-on:click="changeItem">保存</button>
                    <button v-on:click="removeItem">削除</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailForm",
        props: {
            showDetails: Boolean
        },
        data() {
            return {
                options: [
                    {id: 1, name: 'Todo'},
                    {id: 2, name: 'Doing'},
                    {id: 3, name: 'Review'},
                    {id: 4, name: 'Done'}
                ],
                todo: {}
            }
        },
        methods: {
            display(selectedTodo) {
                this.todo = JSON.parse(JSON.stringify(selectedTodo));
            },
            stopModal() {
                event.stopPropagation()
            },
            closeModalDetails() {
                this.$emit('closeEvent');
            },
            changeItem() {
                this.$store.commit('updateTodo', this.todo);
                this.$emit('closeEvent');
            },
            removeItem() {
                this.$store.commit('removeTodo', this.todo);
                this.$emit('closeEvent');
            }
        }
    }
</script>

<style scoped>
    .content {
        z-index: 2;
        width: 50%;
        background-color: #ffffcc;
    }

    .buttons {
        display: flex;
        justify-content: center;
    }

    button {
        margin: 0 5px 0 5px;
    }
</style>