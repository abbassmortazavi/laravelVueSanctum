<template>
    <div>
        <h1>Index page</h1>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/accounts">Account</router-link>
        <div>
            <router-view class="main-view" name="MainView"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndexMain"
}
</script>

<style scoped>

</style>
