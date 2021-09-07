<template>
    <div id="myApp">
        <h1>Main Page</h1>
        <p>
            <router-link to="/register">Register</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/dashboard">Dashboard</router-link>
        </p>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
