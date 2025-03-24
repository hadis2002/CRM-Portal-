<template>
    <div dir="rtl" class="h-screen flex justify-center items-center bg-[linear-gradient(117deg,_#e7f0f9_-5.98%,_#efefef_107.97%)]">
        <div class="bg-white rounded-3xl w-[85%] h-[80%] shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] max-[700px]:h-full max-[700px]:w-full max-[700px]:rounded-none">
            <dataTable  :cols="cols" :text-title="textTitle" :insert-option="insertOption" :source-data="sourceData" :has-access="hasAccess"></dataTable>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import dataTable from '@/components/portal/dataTable.vue';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
    const sourceData = 'companies'
    const cols =
        ref([
            { field: 'id', title: 'شناسه', isUnique: true , type: 'number'},
            { field: 'companyName', title: 'نام' , type: 'string' },
            { field: 'phoneNumber', title: 'تلفن', type: 'number'},
            { field: 'email', title: 'ایمیل', type: 'string' },
            { field: 'allBranches', title: 'شعبه ها', type: 'string' },    
            { field: 'menu', title: '' },
            
        ]) || [];
    const insertOption = ref({
        hasAdd: true,
    })
    const textTitle = ref({
        dataTableTitle: 'شرکت ها',
        createBtnTitle: 'شرکت',
    })
    const hasAccess = ref({
        roles: 'ADMIN',
        permissions: ['']
    })
</script>

<style>
.multiselect__tags{
    border: none;
}
.custom-multiselect{
    border:0px none transparent !important;
}
</style>
