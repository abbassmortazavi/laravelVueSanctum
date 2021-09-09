<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3 class="mb-0">Edit Category</h3>
                        <router-link class="btn btn-sm btn-outline-warning" to="/category">Category List</router-link>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="updateCategory" @keydown="form.onKeydown($event)">
                                    <div class="form-group">
                                        <label for="">Category Name</label>
                                        <input type="text" v-model="form.name" class="form-control">
                                        <div class="alert alert-danger" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-sm btn-success">Update</button>
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
        editCategory(){
            let id = this.$route.params.id;
            axios.get(`/api/categories/${id}/edit`)
            .then(res=>{
                this.form.name = res.data.name;
            }).catch(err=>{
                console.log(err);
            });
        },
        updateCategory(){
            let id = this.$route.params.id;
            this.form.put('/api/categories/' + id)
            .then(res=>{
                toast.fire({
                    icon: 'success',
                    title: 'Updated in successfully'
                });
            }).catch(err=>{
                console.log(err);
            });
        }
    },
    mounted(){
        this.editCategory();
    }
}
</script>

<style scoped>

</style>
