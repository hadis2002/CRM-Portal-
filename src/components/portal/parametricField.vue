<template>
    <div class="h-full flex flex-col">
        <div class="flex flex-col gap-3 w-full items-center h-[20%] max-md:justify-center">
            <label class="text-lg text-gray-700 max-lg:text-base" for="">ایجاد {{ props.createTitle }}:</label>
            <input
                @keypress.enter="append_data"
                v-model="inputValue"
                class="border border-gray-400 rounded-lg p-2.5 w-[30%] max-lg:py-2 placeholder:max-lg:text-xs max-md:w-[45%]"
                type="text"
                :placeholder="placeholderText"
            />
        </div>
        <div class="h-[80%] flex flex-col justify-center items-center">
            <div
                ref="dataComponentScroll"
                class="h-full place-content-baseline overflow-auto grid grid-cols-3 place-items-center w-[70%] py-5 gap-5 scroll-smooth max-xl:w-[80%] max-lg:w-[100%] max-md:w-[90%] max-sm:w-full max-md:grid-cols-2 max-sm:px-5"
            >
                <button
                    v-for="(data, index) in updateData"
                    @focus="select_item(index)"
                    :key="data.id"
                    class="shadow min-w-[170px] max-w-[170px] flex items-center justify-center gap-2 text-center p-3 rounded-lg border border-orange-600 cursor-pointer"
                >
                    <div v-show="itemEditIcon == index" @click="remove_item(data)">
                        <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 6.5H3.49988" stroke="#FF3333" stroke-width="1.5" stroke-linecap="round" />
                            <path
                                d="M18.8333 9L18.3734 15.8991C18.1964 18.554 18.1079 19.8815 17.2429 20.6907C16.3778 21.5 15.0474 21.5 12.3866 21.5H11.6133C8.95248 21.5 7.62207 21.5 6.75707 20.6907C5.89206 19.8815 5.80356 18.554 5.62657 15.8991L5.16663 9"
                                stroke="#FF3333"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                            <path d="M9.5 11.5L10 16.5" stroke="#FF3333" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M14.5 11.5L14 16.5" stroke="#FF3333" stroke-width="1.5" stroke-linecap="round" />
                            <path
                                d="M6.5 6.5C6.55588 6.5 6.58382 6.5 6.60915 6.49936C7.43259 6.47849 8.15902 5.95491 8.43922 5.18032C8.44784 5.15649 8.45667 5.12999 8.47434 5.07697L8.57143 4.78571C8.65431 4.53708 8.69575 4.41276 8.75071 4.3072C8.97001 3.88607 9.37574 3.59364 9.84461 3.51877C9.96213 3.5 10.0932 3.5 10.3553 3.5H13.6447C13.9068 3.5 14.0379 3.5 14.1554 3.51877C14.6243 3.59364 15.03 3.88607 15.2493 4.3072C15.3043 4.41276 15.3457 4.53708 15.4286 4.78571L15.5257 5.07697C15.5433 5.12992 15.5522 5.15651 15.5608 5.18032C15.841 5.95491 16.5674 6.47849 17.3909 6.49936C17.4162 6.5 17.4441 6.5 17.5 6.5"
                                stroke="#FF3333"
                                stroke-width="1.5"
                            />
                        </svg>
                    </div>
                    <div v-if="itemEditIcon == index">
                        <input
                            @blur="itemEditIcon = null"
                            @keypress.enter="update_data($event, data)"
                            v-model="data.title"
                            type="text"
                            ref="activeInput"
                            class="px-3 py-1.5 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div v-else class="w-full">
                        <p class="break-words">{{ data.title }}</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, defineProps, nextTick, defineEmits } from 'vue';
    import { ref } from 'vue';
    import Swal from 'sweetalert2';
    import { taxios } from '@/plugins/taxios';

    const inputValue = ref('');
    let itemEditIcon = ref(null);
    const dataComponentScroll = ref<HTMLElement | null>(null);
    const activeInput = ref(null);
    const emit = defineEmits(["update-dataList"]);

    const props = defineProps({
        createTitle: {
            default: '',
            type: String,
        },
        placeholderText: {
            default: '',
            type: String,
        },
        data: {
            default: [],
            type: Array,
        },
        dataType: {
            default: '',
            type: String,
        },
    });

    let baseUrl = props.dataType == 'contactTypes' ? import.meta.env.VITE_MAIN_URL : import.meta.env.VITE_CRM_BACKEND;
    const dataList = ref([...props.data]);

    const select_item = (index) => {
        itemEditIcon.value = index;
        nextTick(() => {
            activeInput.value[0].focus();
        });
    };

    const append_data = () => {
        if (!inputValue.value.trim()) return;
        create_data();
        inputValue.value = '';
    };

    const update_data = (e, data) => {
        data.title = e.target.value;
        itemEditIcon.value = null;
        edit_data(data);
    };

    const remove_item = (data) => {
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
                    taxios(baseUrl)
                        ?.delete(`${props.dataType}/${data.id}`)
                        .then((res) => {
                            emit('update-dataList', dataList.value);
                            itemEditIcon.value = null;
                        })
                        .catch((error) => {
                            if (error?.response?.data?.info?.[0]?.message) {
                                showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                            }
                        });
                }
            });
    };

    const create_data = () => {
        let payload = props.dataType == 'failureReasons' ? { title: inputValue.value } : { title: inputValue.value, icon: '' };
        taxios(baseUrl)
            ?.post(`${props.dataType}`, payload)
            .then((res) => {
                dataList.value.push(res.data.content);
                emit('update-dataList', dataList.value);
                scroll_to_bottom();
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    const edit_data = (data) => {
        taxios(baseUrl)
            ?.put(`${props.dataType}/${data.id}`, { title: data.title, icon: '' })
            .then((res) => {
                emit('update-dataList', dataList.value);
                scroll_to_bottom();
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
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

    const scroll_to_bottom = () => {
         setTimeout(() => {
            const treeElement = dataComponentScroll.value;
            if (treeElement) {
                treeElement.scrollTop = treeElement.scrollHeight;
            }
         }, 200);
    };

    const updateData = computed(() => {
        return props.data || [];
    });
</script>

<style>
    body {
        scroll-behavior: smooth !important;
    }
</style>
