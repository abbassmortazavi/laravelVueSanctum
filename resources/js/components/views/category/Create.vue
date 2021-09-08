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
                                <form @submit.prevent="createCategory" @keydown="form.onKeydown($event)">
                                    <div class="form-group">
                                        <label for="">Category Name</label>
                                        <input type="text" v-model="form.name" class="form-control">
                                        <div class="alert alert-danger" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
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
import Form from 'vform'
export default {
    name: "Create",
    data(){
        return{
            form: new Form({
                name: ''
            })
        }
    },
    methods:{
        createCategory(){
            this.form.post('/api/categories')
            .then(res=>{
                //this.$swal('hey!!!');
                toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                });
                this.form.name = "";
                console.log(res);
            }).catch(err=>{
                console.log(err.errors.name);
            })
        }
    }
}
</script>

<style scoped>

</style>
