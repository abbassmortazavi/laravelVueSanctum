<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3 class="mb-0">Create Category</h3>
                        <router-link class="btn btn-sm btn-outline-warning" to="/category">Category List</router-link>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="createCategory">
                                    <div class="form-group">
                                        <label for="">Category Name</label>
                                        <input type="text" v-model="name" class="form-control">
                                        <span v-if="errors.name">{{ errors.name }}</span>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-sm btn-success">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Create",
    data(){
        return{
            name: '',
            errors: ''
        }
    },
    methods:{
        createCategory(){
            axios.post('/api/categories' , {name:this.name})
            .then(res=>{
                console.log(res);
            }).catch(err=>{
                this.errors = err.errors.name;
                console.log(this.errors);
            });
        }
    }
}
</script>

<style scoped>

</style>
