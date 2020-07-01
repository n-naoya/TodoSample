<template>
    <div>
        <h2>かんばんボード</h2>
        <p>このボードは、テクコン部新人3名によるVue.jsの演習成果物である。</p>
        <Kanban />
    </div>
</template>

<script>
    import Kanban from "./Kanban";

    export default {
        name: "MainPage",
        components: {
            Kanban
        }
    }
</script>

<style scoped>

</style>