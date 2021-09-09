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
                                    <tr v-for="cat in categories" :key="cat.id">
                                        <td>{{ cat.id }}</td>
                                        <td>{{ cat.name }}</td>
                                        <td>{{ cat.slug }}</td>
                                        <td>
                                            <router-link :to="{name: 'Edit' , params:{'id':cat.id}}" class="btn btn-sm btn-info">Edit</router-link>
                                            <a @click="deleteCategory(cat)" class="btn btn-sm btn-danger">Delete</a>
                                        </td>
                                    </tr>
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
    name: "Index",
    data(){
        return{
            categories :[]
        }
    },
    methods:{
        getAllCategory(){
            axios.get('/api/categories')
            .then(res=>{
                console.log(res);
                this.categories = res.data;
            }).catch(err=>{
                console.log(err);
            });
        },
        deleteCategory(cat){
            axios.delete('/api/categories/' + cat.id)
            .then(res=>{
                this.getAllCategory();
                toast.fire({
                    icon: 'success',
                    title: 'Deleted in successfully'
                });
                // let index = this.categories.indexOf(cat);
                // this.categories.splice(index , 1);
            }).catch(err=>{
                console.log(err);
            });
        }
    },
    mounted(){
        this.getAllCategory();
    }
}
</script>

<style scoped>

</style>
