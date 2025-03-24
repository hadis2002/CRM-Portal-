<template>
    <div dir="rtl" class="h-full">
        <headerBox class="!h-[15%]"></headerBox>
        <div
            class="h-[8%] w-full px-14 max-[600px]:px-5 flex items-center justify-between border-t border-b border-[#E7F0F9] max-[600px]:h-[15%] max-[600px]:flex-col"
        >
            <div class="w-full h-full flex items-center max-[600px]:justify-center">
                <div class="relative flex w-[50%] max-xl:w-[70%] max-sm:w-[55%] items-center h-[80%] max-[600px]:h-[50%]">
                    <div class="absolute start-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                stroke="#9B9A9A"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M21 20.9999L16.65 16.6499" stroke="#9B9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <input
                        v-model.trim="search"
                        type="text"
                        class="form-input border border-[#9B9A9A] ps-12 pe-3 h-full placeholder:text-[#9B9A9A]"
                        placeholder="جستجو"
                    />
                </div>
            </div>
            <div
                class="flex h-full w-full mx-auto items-center justify-end gap-5 max-[600px]:gap-5 max-[900px]:gap-2 max-[600px]:h-[50%] max-[600px]:justify-center"
            >
                <button v-if="hasAccess" class="!h-full">
                    <div class="dropdown flex items-center h-full">
                        <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                            <button type="button" class="!h-full flex items-center dropdown-toggle">
                                <span class="text-[#5a5a5a] w-max !border-none min-[1280px]:text-[18px] max-[1280px]:text-[15px] max-[650px]:text-[13px]"
                                    >عملیات چندتایی</span
                                >
                                <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M14.5695 18.1643C14.2418 18.4452 13.7583 18.4452 13.4306 18.1643L5.26396 11.1643C4.89705 10.8499 4.85455 10.2975 5.16905 9.93055C5.48354 9.56364 6.03593 9.52115 6.40284 9.83565L14.0001 16.3476L21.5973 9.83565C21.9642 9.52115 22.5166 9.56365 22.8311 9.93056C23.1456 10.2975 23.1031 10.8499 22.7362 11.1643L14.5695 18.1643Z"
                                        fill="#5a5a5a"
                                    />
                                </svg>
                            </button>
                            <template #content="{ close }">
                                <ul @click="close()" class="whitespace-nowrap">
                                    <li class="flex items-center gap-2 py-1 px-4" @click="remove_rows">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.87793 3C7.18681 2.12611 8.02024 1.5 8.9999 1.5C9.97956 1.5 10.813 2.12611 11.1219 3"
                                                stroke="#757575"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                            />
                                            <path d="M15.3751 4.5H2.625" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                            <path
                                                d="M14.125 6.375L13.78 11.5493C13.6473 13.5405 13.5809 14.5361 12.9322 15.1431C12.2834 15.75 11.2856 15.75 9.29001 15.75H8.70999C6.71439 15.75 5.71659 15.75 5.06783 15.1431C4.41907 14.5361 4.3527 13.5405 4.21996 11.5493L3.875 6.375"
                                                stroke="#757575"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                            />
                                            <path d="M7.125 8.25L7.5 12" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M10.875 8.25L10.5 12" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>
                                        <a class="!p-0" href="javascript:;">حذف</a>
                                    </li>
                                </ul>
                            </template>
                        </Popper>
                    </div>
                </button>
                <button class="!h-full">
                    <div class="dropdown">
                        <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start'" offsetDistance="0" class="align-middle">
                            <button type="button" class="flex items-center">
                                <span class="text-[#5a5a5a] w-max !border-none min-[1280px]:text-[18px] max-[1280px]:text-[15px] max-[650px]:text-[13px]"
                                    >ستون ها</span
                                >
                                <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M14.5695 18.1643C14.2418 18.4452 13.7583 18.4452 13.4306 18.1643L5.26396 11.1643C4.89705 10.8499 4.85455 10.2975 5.16905 9.93055C5.48354 9.56364 6.03593 9.52115 6.40284 9.83565L14.0001 16.3476L21.5973 9.83565C21.9642 9.52115 22.5166 9.56365 22.8311 9.93056C23.1456 10.2975 23.1031 10.8499 22.7362 11.1643L14.5695 18.1643Z"
                                        fill="#5a5a5a"
                                    />
                                </svg>
                            </button>
                            <template #content>
                                <ul class="whitespace-nowrap">
                                    <template v-for="(col, i) in cols" :key="i">
                                        <li v-if="i !== cols.length - 1">
                                            <div class="flex items-center px-4 py-1">
                                                <label class="cursor-pointer mb-0">
                                                    <input
                                                        type="checkbox"
                                                        class="form-checkbox"
                                                        :id="`chk-${i}`"
                                                        :value="col.field"
                                                        @change="(event) => handleCheckboxChange(event, col)"
                                                        :checked="!col.hide"
                                                    />
                                                    <span :for="`chk-${i}`" class="ltr:ml-2 rtl:mr-2">{{ col.title }}</span>
                                                </label>
                                            </div>
                                        </li>
                                    </template>
                                </ul>
                            </template>
                        </Popper>
                    </div>
                </button>
                <button v-if="insertOption.hasAdd" type="button" @click="create" class="flex items-center gap-1.5">
                    <p class="text-[18px] w-max font-semibold text-[#0985AA] max-[1280px]:text-[15px] max-[800px]:text-[13px]">
                        ایجاد {{ textTitle.createBtnTitle }}
                    </p>
                    <svg
                        class="max-[1280px]:w-[20px] max-[1280px]:h-[20px]"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.3 24.1502C13.3 24.7301 13.7701 25.2002 14.35 25.2002C14.9298 25.2002 15.4 24.7301 15.4 24.1502L15.4 15.4002L24.15 15.4002C24.7298 15.4002 25.2 14.9301 25.2 14.3502C25.2 13.7703 24.7298 13.3002 24.15 13.3002L15.4 13.3002L15.4 4.55019C15.4 3.97031 14.9298 3.50019 14.35 3.50019C13.7701 3.50019 13.3 3.97031 13.3 4.55019L13.3 13.3002L4.54995 13.3002C3.97007 13.3002 3.49995 13.7703 3.49995 14.3502C3.49995 14.9301 3.97007 15.4002 4.54995 15.4002L13.3 15.4002L13.3 24.1502Z"
                            fill="#0985AA"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div class="text-[28px] text-[#616161] h-[15%] flex justify-center items-center max-[1280px]:text-[22px]">{{ textTitle.dataTableTitle }}</div>
        <div class="datatable w-[90%] mx-auto h-[62%] flex pb-3 max-[600px]:h-[55%]">
            <vue3-datatable
                class="cursor-pointer w-full"
                :rows="rows"
                :columns="cols"
                :totalRows="rows?.length"
                :hasCheckbox="true"
                :sortable="true"
                ref="dataTable"
                sortColumn="id"
                sortDirection="desc"
                :search="search"
                :stickyHeader="true"
                skin="whitespace-nowrap bh-table-hover bh-table-compact"
                firstArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
                lastArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M11 19L17 12L11 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M6.99976 19L12.9998 12L6.99976 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg> '
                previousArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M15 5L9 12L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
                nextArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
            >
                <template #menu="data">
                    <div class="dropdown">
                        <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                            <button type="button" class="w-5 Z-50 flex justify-center dropdown-toggle">
                                <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.89543 18 -3.91405e-08 17.1046 -8.74228e-08 16C-1.35705e-07 14.8954 0.89543 14 2 14Z"
                                        fill="#757575"
                                    />
                                    <path
                                        d="M2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.89543 11 -3.4512e-07 10.1046 -3.93403e-07 9C-4.41685e-07 7.89543 0.89543 7 2 7Z"
                                        fill="#757575"
                                    />
                                    <path
                                        d="M2 -8.74228e-08C3.10457 -1.35705e-07 4 0.895429 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 -6.511e-07 3.10457 -6.99382e-07 2C-7.47665e-07 0.89543 0.89543 -3.91405e-08 2 -8.74228e-08Z"
                                        fill="#757575"
                                    />
                                </svg>
                            </button>
                            <template #content="{ close }">
                                <ul @click="close()" class="whitespace-nowrap flex flex-col !py-2 !text-[#757575] text-[15px]">
                                    <li @click="go_edit_page(data)" class="flex items-center !gap-2 !px-3 !py-2">
                                        <div>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_2025_9803)">
                                                    <path
                                                        d="M10.77 3.05899L11.4652 2.36383C12.617 1.21206 14.4844 1.21206 15.6362 2.36383C16.7879 3.51561 16.7879 5.38301 15.6362 6.53479L14.941 7.22995M10.77 3.05899C10.77 3.05899 10.8569 4.53621 12.1604 5.83963C13.4638 7.14306 14.941 7.22995 14.941 7.22995M10.77 3.05899L4.37912 9.44992C3.94625 9.8828 3.72981 10.0992 3.54367 10.3379C3.3241 10.6194 3.13585 10.924 2.98226 11.2463C2.85205 11.5195 2.75526 11.8099 2.56167 12.3906L1.74136 14.8516M14.941 7.22995L8.55008 13.6209C8.1172 14.0538 7.90077 14.2702 7.66212 14.4563C7.38061 14.6759 7.07602 14.8641 6.75373 15.0177C6.48052 15.1479 6.19014 15.2447 5.60938 15.4383L3.14844 16.2586M3.14844 16.2586L2.54688 16.4592C2.26108 16.5544 1.94599 16.48 1.73297 16.267C1.51995 16.054 1.44557 15.7389 1.54084 15.4531L1.74136 14.8516M3.14844 16.2586L1.74136 14.8516"
                                                        stroke="#757575"
                                                        stroke-width="1.5"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2025_9803">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p>ویرایش</p>
                                    </li>
                                    <li v-if="hasAccess" @click="delete_row(data)" class="flex items-center !gap-2 !px-3 !py-2">
                                        <div>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.87793 3C7.18681 2.12611 8.02024 1.5 8.9999 1.5C9.97956 1.5 10.813 2.12611 11.1219 3"
                                                    stroke="#757575"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path d="M15.3751 4.5H2.625" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                <path
                                                    d="M14.125 6.375L13.78 11.5493C13.6473 13.5405 13.5809 14.5361 12.9322 15.1431C12.2834 15.75 11.2856 15.75 9.29001 15.75H8.70999C6.71439 15.75 5.71659 15.75 5.06783 15.1431C4.41907 14.5361 4.3527 13.5405 4.21996 11.5493L3.875 6.375"
                                                    stroke="#757575"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path d="M7.125 8.25L7.5 12" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M10.875 8.25L10.5 12" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                        <p>حذف</p>
                                    </li>
                                </ul>
                            </template>
                        </Popper>
                    </div>
                </template>
            </vue3-datatable>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, computed, PropType } from 'vue';
    import { checkRoles, checkPermissions } from '@/plugins/rolepermissioncontrol/helperAccess.js';
    import { defineProps } from 'vue';
    import Swal from 'sweetalert2';
    import headerBox from './headerBox.vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import '@bhplugin/vue3-datatable/dist/style.css';
    import { useAppStore } from '@/stores/index';
    import { taxios } from '@/plugins/taxios';
    import { useRouter } from 'vue-router';
    const store = useAppStore();
    const router = useRouter();
    const search = ref('');
    const dataTable = ref<any>('');
    const rows = ref([]);
    interface Column {
        field: string;
        title: string;
        hide: boolean;
    }
    const props = defineProps({
        cols: {
            type: Array as PropType<Column[]>,
            default: [],
        },
        textTitle: {
            type: Object,
            default: {
                dataTableTitle: '',
                createBtnTitle: '',
            },
        },
        insertOption: {
            type: Object,
            default: {
                hasAdd: true,
            },
        },
        sourceData: {
            type: String,
            default: 'users',
        },
        hasAccess: {
            type: Object as PropType<{ roles: string; permissions: string[] }>,
            default: {
                roles: '',
                permissions: [],
            },
        },
    });

    const hasAccess = computed(() => {
        const hasRole = checkRoles(props.hasAccess.roles);
        const hasPermissions = checkPermissions(props.hasAccess.permissions);
        return hasRole || hasPermissions;
    });

    let Id;
    const go_edit_page = (data) => {
        Id = data.value.id;
        router.push({ path: `edit/${Id}` });
    };

    const translate_roles = (role) => {
        return {
            ADMIN: 'ادمین',
            COMPANY_MANAGER: 'مدیر شرکت',
            BRANCH_MANAGER: 'مدیر شعبه',
            DIRECTORATE: 'هیت مدیره',
            STAFF: 'کارمند',
            CUSTOMER: 'مشتری',
        }[role];
    };

    const modifyFetchdData = (data) => {
        let changedData = data;
        if (props.sourceData == 'companies') {
            changedData = data.map((item) => {
                return { ...item, allBranches: item.branches.map((branch) => branch.name).join(',') };
            });
        }
        if (props.sourceData == 'branches') {
            changedData = data.map((item) => {
                return { ...item, isActive: item.isActive ? 'فعال' : 'غیرفعال' };
            });
        }
        if (props.sourceData == 'users') {
            changedData = data.map((item) => {
                return { ...item, roles: item.roles ? translate_roles(item.roles[0]) : '' };
            });
        }
        return changedData;
    };

    const fetch_data = () => {
        taxios()
            ?.get(`/${props.sourceData}`)
            .then((res) => {
                let data = res.data.content;
                rows.value = modifyFetchdData(data);
                if (data.length === 0) {
                    const tdElement = document.querySelector("td[colspan='5']") as HTMLTableCellElement;
                    if (tdElement) {
                        tdElement.innerText = 'داده ای یافت نشد.';
                    }
                }
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };
    
    const delete_row = (data) => {
        const toast = Swal.mixin({
            position: 'center',
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonText: 'انصراف',
            confirmButtonText: 'تایید',
            customClass: {
                actions: 'swal-actions',
            },
        });
        toast
            .fire({
                title: 'آیا از حذف اطمینان دارید',
            })
            .then((res) => {
                if (res.isConfirmed) {
                    taxios()
                        ?.delete(`/${props.sourceData}/?ids=${JSON.stringify([data.value.id])}`)
                        .then((res) => {
                            fetch_data();
                        })
                        .catch((error) => {
                            showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                        });
                }
            });
    };

    const create = () => {
        router.push({ path: `add` });
    };

    const remove_rows = () => {
        if (dataTable.value.getSelectedRows().length <= 0) {
            showAlert('هیچ آیتمی انتخاب نشده');
            return;
        }
        const toast = Swal.mixin({
            position: 'center',
            showConfirmButton: true,
            confirmButtonText: 'تایید',
            showCancelButton: true,
            cancelButtonText: 'انصراف',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
        toast
            .fire({
                title: 'آیا از حذف اطمینان دارید؟',
            })
            .then((res: any) => {
                if (res.isConfirmed) {
                    const ids = dataTable.value.getSelectedRows().map((item) => item.id);
                    taxios()
                        ?.delete(`/${props.sourceData}/?ids=${JSON.stringify(ids)}`)
                        .then((res) => {
                            showAlert('عملیات با موفقیت انجام شد.');
                            fetch_data();
                        })
                        .catch((error) => {
                            showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                        });
                }
            });
    };

    const handleCheckboxChange = (event, col) => {
        const input = event.target as HTMLInputElement;
        col.hide = !input.checked;
    };

    const showAlert = async (message) => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
        toast.fire({
            title: message,
            padding: '2em',
        });
    };

    onMounted(() => {
        fetch_data();
    });
</script>

<style>
    @media (max-width: 400px) {
        .bh-pagination-number {
            display: none !important;
        }
    }
    .bh-datatable {
        height: 100% !important;
    }
    .bh-table-responsive {
        height: 100%;
    }
    thead {
        height: 10% !important;
        color: #616161;
        font-size: 18px;
    }
    tbody {
        height: 90% !important;
        color: #757575;
        font-size: 16px;
    }
    tbody tr td {
        padding: 22px !important;
    }
    thead tr th {
        padding: 22px !important;
    }
    table thead tr,
    table tfoot tr {
        background-color: white !important;
        box-shadow: 0px 2px 8px 0px rgba(10, 102, 194, 0.07);
    }
    thead td {
        padding: 10px !important;
    }
    table thead th:last-child {
        opacity: 0;
    }
    table thead th:first-child {
        background-color: transparent !important;
    }
    .bh-pagination {
        margin: 0px auto;
        width: fit-content;
        display: flex;
        align-items: center;
        height: 15% !important;
    }
    .bh-pagination div {
        flex-direction: row !important;
    }
    .bh-pagination-info span {
        display: none;
        position: fixed !important;
        bottom: 50px;
    }
    .bh-table-responsive {
        height: 85% !important;
    }
    .dropdown {
        display: flex;
        justify-content: end;
    }
    .swal-actions {
        display: flex !important;
        gap: 10px;
    }
</style>
