<template>
    <div>
        <div v-show="showDetails" @click="closeModalDetails">
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
                <button v-on:click="closeModalDetails">キャンセル</button>
                <button v-on:click="changeItem">保存</button>
                <button v-on:click="removeItem">削除</button>
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
                this.$emit('changeEvent', this.todo);
            },
            removeItem() {
                this.$emit('removeEvent', this.todo);
            }
        }
    }
</script>

<style scoped>

</style>