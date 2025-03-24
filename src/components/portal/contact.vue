<template>
    <div class="h-[100%] max-[700px]:h-full flex justify-center items-center">
        <div
            class="form-box max-[700px]:py-5 w-[70%] h-[80%] flex flex-col gap-5 min-[700px]:items-start min-[700px]:justify-start max-lg:w-[85%] max-lg:h-full max-[700px]:overflow-auto max-[700px]:w-[85%] min-[1024px]:w-[80%] min-[700px]:h-[80%] min-[1024px]:items-start"
        >
            <div class="flex h-[20%] items-center justify-center gap-3 w-full max-md:gap-1">
                <div class="multibox-container bg-white border border-gray-200 rounded-lg p-[3px]">
                    <multiselect
                        v-model="contacts.contactType"
                        :options="props.contactTypes"
                        @update:model-value="update_selected_contact_type"
                        class="custom-multiselect cursor-pointer"
                        :searchable="false"
                        :preselect-first="false"
                        :allow-empty="true"
                        selected-label=""
                        select-label=""
                        deselect-label=""
                        label="title"
                        track-by="id"
                        placeholder="راه ارتباطی"
                    >
                    </multiselect>
                </div>
                <div class="w-[55%] max-md:w-[50%]">
                    <div class="relative flex items-center">
                        <div class="w-full">
                            <input
                                @keypress.enter="append_contact_option"
                                v-model.trim="contacts.value"
                                type="text"
                                ref="contactInput"
                                class="w-full py-3 px-4 pe-10 !border !border-gray-200 rounded-lg placeholder:text-[#161616] placeholder:font-semibold placeholder:text-xs max-[800px]:placeholder:text-[9px]"
                                placeholder="راه ارتباطی خود را وارد نمایید."
                            />
                        </div>
                        <div class="absolute end-5">
                            <svg
                                class="max-[900px]:w-4 max-[800px]:h-4"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.43417 2C8.45604 2 8.47799 2 8.5 2L16.5658 2C17.4523 1.99995 18.2161 1.99991 18.8278 2.08215C19.4833 2.17028 20.1117 2.36902 20.6213 2.87868C21.131 3.38835 21.3297 4.0167 21.4179 4.67221C21.5001 5.28388 21.5001 6.0477 21.5 6.9342L21.5 7.95C21.5 8.50229 21.0523 8.95 20.5 8.95C19.9477 8.95 19.5 8.50229 19.5 7.95V7.00001C19.5 6.02893 19.4979 5.40122 19.4357 4.93871C19.3774 4.50497 19.2832 4.36902 19.2071 4.2929C19.131 4.21677 18.995 4.12263 18.5613 4.06431C18.0988 4.00213 17.4711 4 16.5 4H13.5V21C13.5 21.5523 13.0523 22 12.5 22C11.9477 22 11.5 21.5523 11.5 21V4H8.5C7.52893 4 6.90122 4.00213 6.43871 4.06431C6.00497 4.12263 5.86902 4.21677 5.7929 4.2929C5.71677 4.36902 5.62263 4.50497 5.56431 4.93871C5.50213 5.40122 5.5 6.02893 5.5 7.00001V7.95C5.5 8.50229 5.05229 8.95 4.5 8.95C3.94772 8.95 3.5 8.50229 3.5 7.95V7.00001C3.5 6.97799 3.5 6.95604 3.5 6.93418C3.49995 6.04769 3.49991 5.28387 3.58215 4.67221C3.67028 4.0167 3.86902 3.38835 4.37868 2.87868C4.88835 2.36902 5.5167 2.17028 6.17221 2.08215C6.78387 1.99991 7.54769 1.99995 8.43417 2Z"
                                    fill="#0985AA"
                                />
                                <path d="M7.5 21H17.5" stroke="#0985AA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="w-[15%] flex gap-2 items-center max-md:w-[20%]">
                    <button
                        @click="append_contact_option"
                        class="w-full bg-[#3B85CE] text-white py-3 rounded-lg text-[14px] font-semibold max-[800px]:text-[12px] max-[800px]:py-2.5"
                    >
                        تایید
                    </button>
                    <button
                        @click="cancel_editing_contact"
                        v-if="cancelEditingContactBtn"
                        class="w-full border border-[#3B85CE] text-[#3B85CE] py-2.5 rounded-lg text-[14px] font-semibold"
                    >
                        انصراف
                    </button>
                </div>
            </div>
            <form class="grid grid-cols-2 overflow-auto px-3 gap-x-8 min-[1024px]:w-[100%] gap-y-7 max-[700px]:grid-cols-1 min-[700px]:grid-cols-2">
                <div @click="select_contact(index, item)" class="h-fit z-10 w-[100%] cursor-pointer" v-for="(item, index) in localContactsList" :key="index">
                    <label class="text-[16px] font-normal flex items-center justify-between text-[#616161]" for="custome">
                        <div class="max-[1150px]:text-[14px]">{{ item.contactType?.title }}:</div>
                        <button @click.stop="remove_contact(item)" v-if="deleteComWayIcon === index" type="button">
                            <svg
                                class="max-[1150px]:w-[17px] max-[1150px]:h-[17px]"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.64258 3.33329C7.98578 2.3623 8.91181 1.66663 10.0003 1.66663C11.0888 1.66663 12.0149 2.3623 12.3581 3.33329"
                                    stroke="#9B9A9A"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                                <path d="M17.0837 5H2.91699" stroke="#9B9A9A" stroke-width="1.5" stroke-linecap="round" />
                                <path
                                    d="M15.6946 7.08337L15.3113 12.8326C15.1638 15.0451 15.09 16.1513 14.3692 16.8257C13.6483 17.5 12.5397 17.5 10.3223 17.5H9.67787C7.46054 17.5 6.35187 17.5 5.63103 16.8257C4.91019 16.1513 4.83644 15.0451 4.68895 12.8326L4.30566 7.08337"
                                    stroke="#9B9A9A"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                                <path d="M7.91699 9.16663L8.33366 13.3333" stroke="#9B9A9A" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M12.0837 9.16663L11.667 13.3333" stroke="#9B9A9A" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </button>
                    </label>
                    <div class="relative flex items-center">
                        <input
                            :class="{ 'border !border-blue-500': selectedIndex === index }"
                            @keyup="select_contact(index, item)"
                            id="custome"
                            type="text"
                            class="form-input p-3 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[13px]"
                            v-model.trim="item.value"
                        />
                        <div class="absolute end-1 pe-4 ps-1 bg-white">
                            <img :src="contactIcons[item.contactType.icon]" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, defineProps, defineEmits, PropType } from 'vue';
    import Swal from 'sweetalert2';
    import Multiselect from '@suadelabs/vue3-multiselect';
    import phoneIcon from '../icon/Phone.svg';
    import mailIcon from '../icon/email.svg';
    import websiteIcon from '../icon/website.svg';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
    const deleteComWayIcon = ref(null);
    const cancelEditingContactBtn = ref(false);
    const contactInput = ref(null);
    const selectedIndex = ref(null);
    let contactIcons = ref({
        phoneIcon,
        mailIcon,
        websiteIcon,
    });
    const props = defineProps({
        contactsList: {
            type: Array as PropType<Icontacts[]>,
            default: [],
        },
        contactTypes: {
            type: Array,
            default: [],
        },
    });
    interface Icontacts {
        value: string;
        contactTypeId: string;
        contactType?: IcontactType;
    }
    interface IcontactType {
        id: number;
        title: string;
        icon: string;
    }
    let contacts = ref<Icontacts>({
        value: '',
        contactTypeId: '',
        contactType: { id: 0, title: 'راه های ارتباطی', icon: '' },
    });

    const emit = defineEmits(['update-contacts']);
    const localContactsList = ref<Icontacts[]>([...props.contactsList]);

    const append_contact_option = () => {
        if (!contacts.value.value) {
            showAlert('لطفا راه ارتباطی را وارد نمایید.');
            return;
        }
        if (!contacts.value.contactTypeId && !cancelEditingContactBtn.value) {
            showAlert('لطفا نوع راه ارتباطی را وارد نمایید.');
            return;
        }
        if (contacts.value.value.trim().length > 1 && !cancelEditingContactBtn.value) {
            localContactsList.value.push({ ...contacts.value });
            emit('update-contacts', localContactsList.value);
            contacts.value = {
                value: '',
                contactTypeId: '',
            };
            cancelEditingContactBtn.value = false;
            deleteComWayIcon.value = false as any;
            return;
        }
        if (contacts.value.value.trim().length > 1 && cancelEditingContactBtn.value) {
            Object.assign(selectedContact, contacts.value);
            emit('update-contacts', localContactsList.value);
            contacts.value = {
                value: '',
                contactTypeId: '',
            };
            cancelEditingContactBtn.value = false;
            deleteComWayIcon.value = false as any;
            contactInput.value?.classList.remove('!border-blue-500');
            selectedIndex.value = null;
        }
    };

    const update_selected_contact_type = (data) => {
        contacts.value.contactTypeId = data.id;
    };

    let selectedContact;
    const select_contact = (index, item) => {
        selectedContact = item;
        contacts.value = { ...item };
        cancelEditingContactBtn.value = true;
        contactInput.value?.focus();
        contactInput.value?.classList.add('!border-blue-500');
        selectedIndex.value = index;
        deleteComWayIcon.value = deleteComWayIcon.value === index ? null : index;
    };

    const cancel_editing_contact = () => {
        contacts.value = {
            value: '',
            contactTypeId: '',
        };
        cancelEditingContactBtn.value = false;
        deleteComWayIcon.value = false as any;
        contactInput.value?.classList.remove('!border-blue-500');
        selectedIndex.value = null;
    };

    const remove_contact = (contact) => {
        localContactsList.value = localContactsList.value.filter((item) => contact !== item);
        contacts.value.value = '';
        cancelEditingContactBtn.value = false;
        emit('update-contacts', localContactsList.value);
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
</script>

<style>
    @media (max-width: 1024px) {
        .multiselect__placeholder,
        .custom-multiselect.multiselect,
        .custom-multiselect .multiselect__input,
        .custom-multiselect .multiselect__single {
            font-size: 10px !important;
            width: max-content;
        }
    }
    .multibox-container .custom-multiselect .multiselect__content-wrapper {
        height: auto !important;
    }
    .multiselect__placeholder {
        width: max-content;
    }
</style>
