<template>
    <div>
        <h2>かんばんボード</h2>
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
