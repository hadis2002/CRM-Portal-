<template>
    <div dir="rtl" class="h-screen flex items-center justify-center bg-[linear-gradient(117deg,_#e7f0f9_-5.98%,_#efefef_107.97%)]">
        <div
            class="bg-white flex flex-col w-[80%] h-[80%] rounded-[55px] shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] max-[700px]:w-full max-[700px]:h-full max-[700px]:rounded-none"
        >
            <div class="h-[85%] flex justify-center items-center max-[700px]:flex-col">
                <div class="border-e border-[#E0E0E0] flex justify-center items-center h-[100%] w-[50%] max-[700px]:w-full max-[700px]:h-[40%]">
                    <div class="h-[65%] flex flex-col gap-10 w-[60%] overflow-auto max-[700px]:gap-5 max-[700px]:h-full max-[700px]:justify-center">
                        <div
                            class="flex flex-col gap-2 max-[700px]:gap-1"
                            :class="{ 'has-error': $v1.groupForm.title.$error, '': isSubmitForm && !$v1.groupForm.title.$error }"
                        >
                            <label class="text-[#9B9A9A] text-[18px] flex items-center gap-1" for="title">
                                <span class="max-[1024px]:text-sm">عنوان</span>
                                <sub class="text-red-500 text-[18px]">*</sub>
                            </label>
                            <input
                                id="title"
                                type="text"
                                class="form-input rounded-lg py-4 max-[700px]:py-2 shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] text-[#797979]"
                                v-model.trim="groupForm.title"
                            />
                            <template v-if="isSubmitForm && $v1.groupForm.title.$error">
                                <p class="text-danger text-sm mt-0.5 max-[1024px]:text-xs">لطفا عنوان مورد نظر را وارد نمایید.</p>
                            </template>
                        </div>
                        <div
                            class="flex flex-col gap-2 max-[700px]:gap-1"
                            :class="{ 'has-error': $v1.groupForm.apps.$error, '': isSubmitForm && !$v1.groupForm.apps.$error }"
                        >
                            <label class="text-[#9B9A9A] text-[18px] flex items-center gap-1" for="apps">
                                <span class="max-[1024px]:text-sm">برنامه ها</span>
                                <sub class="text-red-500 text-[18px]">*</sub>
                            </label>
                            <multiselect
                                v-model="groupForm.apps"
                                :options="subSystems"
                                class="custom-multiselect text-[#BDBDBD] rounded-lg shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] max-[1024px]:!text-xs"
                                :searchable="true"
                                :multiple="true"
                                :preselect-first="true"
                                :allow-empty="false"
                                selected-label=""
                                select-label=""
                                deselect-label=""
                                label="name"
                                track-by="id"
                                placeholder="انتخاب برنامه‌ها"
                            />
                            <template v-if="isSubmitForm && $v1.groupForm.apps.$error">
                                <p class="text-danger text-sm mt-0.5 max-[1024px]:text-xs">لطفا برنامه مورد نظر را انتخاب نمایید.</p>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="w-[50%] h-[100%] max-[700px]:h-[50%] max-[700px]:w-full">
                    <div class="h-[15%] flex items-center justify-between px-8 max-[700px]:justify-around">
                        <button class="flex items-center gap-2">
                            <div class="text-[#0985AA] text-[20px] font-semibold max-[1024px]:text-[15px]">انتخاب اعضا</div>
                            <div>
                                <svg
                                    class="max-[1024px]:w-5 max-[1024px]:h-5"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.4001 20.6996C11.4001 21.1967 11.8031 21.5996 12.3001 21.5996C12.7971 21.5996 13.2001 21.1967 13.2001 20.6996L13.2001 13.1996L20.7001 13.1996C21.1972 13.1996 21.6001 12.7967 21.6001 12.2996C21.6001 11.8026 21.1972 11.3996 20.7001 11.3996L13.2001 11.3996L13.2001 3.89961C13.2001 3.40257 12.7972 2.99961 12.3001 2.99961C11.8031 2.99961 11.4001 3.40257 11.4001 3.89961L11.4001 11.3996L3.9001 11.3996C3.40306 11.3996 3.0001 11.8026 3.0001 12.2996C3.0001 12.7967 3.40306 13.1996 3.9001 13.1996L11.4001 13.1996L11.4001 20.6996Z"
                                        fill="#0985AA"
                                    />
                                </svg>
                            </div>
                        </button>
                        <button @click="go_back">
                            <svg
                                class="max-[1024px]:w-5 max-[1024px]:h-5"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div class="h-[85%] overflow-auto pt-5 w-[100%] mx-auto max-[700px]:pt-2 max-[700px]:w-[80%]">
                        <button
                            v-for="user in allUsers"
                            @click="toggle_user(user)"
                            :key="user.id"
                            :class="['user-row-box', 'flex', 'items-center', 'px-10', 'py-4', 'w-full', 'gap-4', { 'bg-[#F2F9FF]': isUserSelected(user) }]"
                            class="max-[700px]:py-2"
                        >
                            <div>
                                <input type="checkbox" :checked="isUserSelected(user)" class="form-checkbox" @change="toggle_user(user)" />
                            </div>
                            <div>
                                <img
                                    class="rounded-full h-14 w-14 max-[700px]:w-10 max-[700px]:h-10"
                                    :src="user.profileImage || defaultProfile"
                                    alt=""
                                    @error="handleImageError"
                                />
                            </div>
                            <div class="user-name text-[#616161] text-[18px] max-[700px]:text-[16px]">{{ user.firstName }}</div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="h-[15%] flex justify-center items-center">
                <button type="submit" @click="submitForm" class="bg-[#3B85CE] flex items-center gap-2 px-5 py-2 rounded-sm max-[700px]:py-1">
                    <span class="text-white text-lg max-[1024px]:text-[15px]">ادامه</span>
                    <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 15L0.999999 8L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import Swal from 'sweetalert2';
    import { useRouter } from 'vue-router';
    import defaultProfile from '../../../../public/assets/images/default-profile.png'
    import { useRoute } from 'vue-router';
    import { taxios } from '@/plugins/taxios';
    import { useVuelidate } from '@vuelidate/core';
    import { required, email, sameAs } from '@vuelidate/validators';
    import Multiselect from '@suadelabs/vue3-multiselect';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
    const router = useRouter();
    const route = useRoute();
    const allUsers = ref<User[]>([]);
    const selectedUsers = ref<User[]>([]);
    
    interface IgroupForm {
        title: string;
        apps: number[];
        users: Array<{ id: number | null; firstName: string; profileImage: string }>;
        levelUsers: number | null;
    }
    interface User {
        id: number;
        firstName: string;
        profileImage: string;
    }
    const groupForm = ref<IgroupForm>({
        title: '',
        apps: [],
        users: [{ id: null, firstName: '', profileImage: '' }],
        levelUsers: null,
    });
    const isSubmitForm = ref(false);
    const rules1 = {
        groupForm: {
            title: { required },
            apps: { required },
            users: { required },
            levelUsers: {},
        },
    };

    const $v1 = useVuelidate(rules1, { groupForm });
    const submitForm = () => {
        isSubmitForm.value = true;
        $v1.value.groupForm.$touch();
        if ($v1.value.groupForm.$invalid || groupForm.value.users.length < 1) {
            return false;
        }
        localStorage.setItem('groups-access-selected-users', JSON.stringify(selectedUsers.value));
        sessionStorage.setItem('form', JSON.stringify(groupForm.value));
        router.push({ name: 'groups-editRoles' });
    };

    const fetch_group_data = () => {
        taxios(import.meta.env.VITE_MAIN_URL, 'multipart/form-data')
            ?.get('/groups/' + route.params.Id)
            .then((res) => {
                groupForm.value.title = res.data.content.title
                groupForm.value.apps = res.data.content.subSystems
                groupForm.value.users = res.data.content.users
                selectedUsers.value = res.data.content.users
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    const isUserSelected = (user) => {
        return selectedUsers.value.some((selectedUser) => selectedUser.id === user.id);
    };

    const toggle_user = (user) => {
        if (isUserSelected(user)) {
            selectedUsers.value = selectedUsers.value.filter((selectedUser) => selectedUser.id !== user.id);
        } else {
            selectedUsers.value.push(user);
        }
    };

    const subSystems = ref([]);
    const fetch_subSystems_data = () => {
        taxios()
            ?.get(`/subSystems`)
            .then((res) => {
                subSystems.value = res.data.content;
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    const fetch_user_data = () => {
        taxios()
            ?.get(`/users`)
            .then((res) => {
                allUsers.value = res.data.content;
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    const go_back = () => {
        router.back();
    };

    const handleImageError = (event: Event) => {
        const target = event.target as HTMLImageElement;
        if (target) {
            target.src = defaultProfile;
        }
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
        fetch_user_data();
        fetch_group_data();
        fetch_subSystems_data();
    });
</script>

<style>
    @media (max-width: 700px) {
        .custom-multiselect {
            height: 39px !important;
        }
    }
    @media (min-width: 700px) {
        .custom-multiselect {
            height: 53px !important;
        }
    }
    .user-row-box:focus .user-name {
        color: #0a66c2;
    }
    .multiselect--above {
        overflow: hidden;
    }
    .custom-multiselect {
        width: auto !important;
        border: 1px solid rgba(221, 221, 221, 0.658) !important;
        display: flex;
        align-items: center;
    }
    .multiselect__tags {
        border: none !important;
        padding-right: 0 !important;
    }
    .multiselect__select {
        left: 5px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        top: 0 !important;
    }
    .multiselect__select::before {
        top: 0 !important;
        margin-top: 0 !important;
    }
    .custom-multiselect .multiselect__single,
    .custom-multiselect .multiselect__option {
        background-color: transparent;
    }
    .custom-multiselect .multiselect__tag {
        background-color: transparent !important;
        border: none !important;
        color: black;
    }
    .multiselect__tags-wrap {
        display: flex;
        flex-direction: row-reverse;
    }
    .custom-multiselect .multiselect__tag-icon {
        display: none;
    }
    .custom-multiselect .multiselect__content-wrapper {
        margin-top: 180px;
    }
    .multiselect__tags {
        padding-right: 15px !important;
        width: 100% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
    }
    .has-error .custom-multiselect {
        border: 1px solid red !important;
    }
</style>
