<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h1 class="mb-0">Category</h1>
                        <router-link class="btn btn-dark btn-sm float-right" :to="{ name: 'Create' }">Create Product</router-link>
                    </div>

                    <div class="card-body">
                        <div class="table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>slug</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>1</td>
                                    <td>Laravel</td>
                                    <td>laravel-vue</td>
                                    <td>
                                        <a href="" class="btn btn-sm btn-info">Edit</a>
                                        <a href="" class="btn btn-sm btn-danger">Delete</a>
                                    </td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
