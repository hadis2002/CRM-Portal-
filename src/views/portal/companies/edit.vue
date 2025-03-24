<template>
    <div
        dir="rtl"
        class="main-container bg-[linear-gradient(117deg,_#e7f0f9_-5.98%,_#efefef_107.97%)] h-screen flex justify-center items-center overflow-hidden"
    >
        <div
            class="inner-container shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] max-[699px]:!w-full h-[100%] flex flex-col bg-[#FAFAFA] min-[700px]:flex-row min-[700px]:h-[75%] min-[700px]:rounded-3xl min-[700px]:w-[85%] min-[1024px]:w-[75%] min-[1280px]:w-[70%] min-[1280px]:h-[75%] max-[1150px]:!w-[80%]"
        >
            <div
                class="right-box z-50 shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] flex flex-col justify-center items-center bg-white max-[700px]:w-full max-[700px]:h-[30%] min-[700px]:w-[30%] max-[1200px]:w-[38%] min-[700px]:h-full min-[700px]:rounded-s-3xl min-[1024px]:w-[25%]"
            >
                <div class="flex flex-col gap-4 max-[700px]:gap-1 max-[1280px]:gap-6 items-center w-[50%]">
                    <div class="flex relative justify-center items-center">
                        <div
                            class="flex w-32 h-32 justify-center border border-gray-100 items-center rounded-full max-[700px]:w-20 max-[700px]:h-20 max-[1280px]:w-24 max-[1280px]:h-24"
                        >
                            <img
                                class="company-profile w-full h-full rounded-full"
                                :src="companyForm.companyLogo || tarazIcon || defaultProfile"
                                :alt="companyForm.companyLogoPreview ? '' : ''"
                                @error="handleImageError"
                            />
                            <img
                                class="profile-picture w-[100%] h-[100%] border border-gray-100 rounded-full absolute top-0"
                                :src="companyForm.companyLogoPreview"
                                v-if="companyForm.companyLogoPreview"
                            />
                        </div>
                        <button class="absolute bg-white shadow-md w-5 h-5 right-[8%] bottom-[3%] rounded-full flex items-center justify-center">
                            <input
                                @change="upload_image($event)"
                                type="file"
                                class="custom-file-container__custom-file__custom-file-input z-50 w-full h-full cursor-pointer"
                            />
                            <svg class="w-[60%] h-[60%] absolute" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_583_113408)">
                                    <path
                                        d="M10.77 3.05899L11.4652 2.36383C12.617 1.21206 14.4844 1.21206 15.6362 2.36383C16.7879 3.51561 16.7879 5.38301 15.6362 6.53479L14.941 7.22995M10.77 3.05899C10.77 3.05899 10.8569 4.53621 12.1604 5.83963C13.4638 7.14306 14.941 7.22995 14.941 7.22995M10.77 3.05899L4.37912 9.44992C3.94625 9.8828 3.72981 10.0992 3.54367 10.3379C3.3241 10.6194 3.13585 10.924 2.98226 11.2463C2.85205 11.5195 2.75526 11.8099 2.56167 12.3906L1.74136 14.8516M14.941 7.22995L8.55008 13.6209C8.1172 14.0538 7.90077 14.2702 7.66212 14.4563C7.38061 14.6759 7.07602 14.8641 6.75373 15.0177C6.48052 15.1479 6.19014 15.2447 5.60938 15.4383L3.14844 16.2586M3.14844 16.2586L2.54688 16.4592C2.26108 16.5544 1.94599 16.48 1.73297 16.267C1.51995 16.054 1.44557 15.7389 1.54084 15.4531L1.74136 14.8516M3.14844 16.2586L1.74136 14.8516"
                                        stroke="#2375C8"
                                        stroke-width="1.5"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_583_113408">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-col min-[700px]:gap-6 max-[700px]:gap-2 items-center justify-center">
                        <div class="flex flex-col gap-4 items-center text-center max-[700px]:gap-1">
                            <button
                                v-tippy:click
                                class="text-[22px] cursor-pointer text-[#0985AA] font-semibold text-wrap leading-9 max-[1150px]:leading-6 max-[1536px]:text-[22px] max-[700px]:text-[16px] max-[850px]:text-[16px] max-[1280px]:text-[18px]"
                            >
                                {{ truncatedName }}
                            </button>
                            <tippy target="click" trigger="click">{{ companyForm.companyName }}</tippy>
                        </div>
                        <div class="flex gap-2 text-[#2375C8] font-semibold">
                            <button
                                @click="submit_company_form"
                                type="submit"
                                class="border border-[#2375C8] rounded px-6 py-1.5 flex gap-1 items-center max-[1150px]:px-3 max-[1150px]:text-sm"
                            >
                                ذخیره
                            </button>
                            <button
                                @click="cancel"
                                type="button"
                                class="border border-[#2375C8] rounded px-5 py-1.5 flex gap-1 items-center max-[1150px]:px-3 max-[1150px]:text-sm"
                            >
                                انصراف
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="left-box w-[77%] max-[700px]:w-full max-[700px]:h-[70%] min-[700px]:w-[70%] min-[700px]:h-[100%] min-[1024px]:w-[75%]">
                <div class="!h-full md:rounded-l-3xl max-[700px]:h-0 flex items-center justify-between shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] w-full">
                    <div class="flex items-center justify-center w-full h-full">
                        <div class="w-full h-full">
                            <div
                                class="flex px-8 h-[10%] max-[1536px]:h-[12%] items-center justify-between shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] md:rounded-tl-3xl"
                            >
                                <div class="flex items-center gap-10 max-[850px]:gap-3 max-[1024px]:gap-3">
                                    <div>
                                        <div class="selected-tab flex !outline-none items-center gap-2">
                                            <svg
                                                class="max-[1150px]:w-[22px] max-[1150px]:h-[22px]"
                                                width="29"
                                                height="28"
                                                viewBox="0 0 29 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M18.4584 4.7293L17.9566 5.28677L18.4584 4.7293ZM23.0769 8.88601L22.5752 9.44348L23.0769 8.88601ZM25.7629 11.8465L25.0778 12.1516L25.0778 12.1516L25.7629 11.8465ZM4.20009 24.2999L4.73042 23.7695H4.73042L4.20009 24.2999ZM24.7997 24.2999L24.2694 23.7695L24.7997 24.2999ZM16.8333 24.9167H12.1666V26.4167H16.8333V24.9167ZM3.58325 16.3334V11.6667H2.08325V16.3334H3.58325ZM25.4166 15.8234V16.3334H26.9166V15.8234H25.4166ZM17.9566 5.28677L22.5752 9.44348L23.5786 8.32854L18.9601 4.17182L17.9566 5.28677ZM26.9166 15.8234C26.9166 13.8426 26.9317 12.6274 26.448 11.5414L25.0778 12.1516C25.4014 12.8783 25.4166 13.7101 25.4166 15.8234H26.9166ZM22.5752 9.44348C24.146 10.8572 24.7541 11.4249 25.0778 12.1516L26.448 11.5414C25.9644 10.4553 25.051 9.65362 23.5786 8.32854L22.5752 9.44348ZM12.2013 3.08337C14.0373 3.08337 14.7613 3.09495 15.4086 3.34336L15.946 1.94293C14.9789 1.5718 13.9237 1.58337 12.2013 1.58337V3.08337ZM18.9601 4.17182C17.6861 3.02525 16.9131 2.31402 15.946 1.94293L15.4086 3.34336C16.0561 3.59181 16.5989 4.06483 17.9566 5.28677L18.9601 4.17182ZM12.1666 24.9167C9.94549 24.9167 8.35513 24.9151 7.14592 24.7525C5.95829 24.5929 5.25126 24.2904 4.73042 23.7695L3.66976 24.8302C4.51575 25.6762 5.59208 26.0571 6.94605 26.2392C8.27844 26.4183 9.9879 26.4167 12.1666 26.4167V24.9167ZM2.08325 16.3334C2.08325 18.5121 2.08166 20.2215 2.26079 21.5539C2.44283 22.9079 2.82376 23.9842 3.66976 24.8302L4.73042 23.7695C4.20958 23.2487 3.90709 22.5417 3.74742 21.354C3.58484 20.1448 3.58325 18.5545 3.58325 16.3334H2.08325ZM16.8333 26.4167C19.0119 26.4167 20.7214 26.4183 22.0538 26.2392C23.4078 26.0571 24.4841 25.6762 25.3301 24.8302L24.2694 23.7695C23.7486 24.2904 23.0415 24.5929 21.8539 24.7525C20.6447 24.9151 19.0543 24.9167 16.8333 24.9167V26.4167ZM25.4166 16.3334C25.4166 18.5545 25.415 20.1448 25.2524 21.354C25.0927 22.5417 24.7903 23.2487 24.2694 23.7695L25.3301 24.8302C26.1761 23.9842 26.557 22.9079 26.739 21.5539C26.9182 20.2215 26.9166 18.5121 26.9166 16.3334H25.4166ZM3.58325 11.6667C3.58325 9.44562 3.58484 7.85525 3.74742 6.64604C3.90709 5.45841 4.20958 4.75138 4.73042 4.23054L3.66976 3.16988C2.82376 4.01587 2.44283 5.09221 2.26079 6.44617C2.08166 7.77856 2.08325 9.48802 2.08325 11.6667H3.58325ZM12.2013 1.58337C10.011 1.58337 8.2931 1.58179 6.95518 1.76086C5.59626 1.94273 4.51634 2.3233 3.66976 3.16988L4.73042 4.23054C5.25067 3.71028 5.9599 3.40744 7.15416 3.2476C8.36943 3.08495 9.96874 3.08337 12.2013 3.08337V1.58337Z"
                                                    fill="#757575"
                                                />
                                                <path d="M7.5 16.9166H16.8333" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M7.5 21H13.9167" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                <path
                                                    d="M15.6667 2.91663V5.83329C15.6667 8.58315 15.6667 9.95808 16.521 10.8124C17.3753 11.6666 18.7502 11.6666 21.5001 11.6666H26.1667"
                                                    stroke="#757575"
                                                    stroke-width="1.5"
                                                />
                                            </svg>
                                            <div class="max-[850px]:w-max">
                                                <a
                                                    href="javascript:;"
                                                    class="text-[18px] transition duration-300 max-[1150px]:text-[17px] max-[850px]:text-[14px]"
                                                    >اطلاعات اصلی</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button>
                                    <svg @click="go_back_portal" width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.3333 8H2.66659M2.66659 8L6.66659 4M2.66659 8L6.66659 12"
                                            stroke="#757575"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div class="h-[90%] max-[1536px]:h-[88%]">
                                <div class="w-full h-full max-[700px]:py-5">
                                    <div class="h-[100%] min-[700px]:h-full max-[700px]:h-full flex justify-center items-center">
                                        <div
                                            class="form-box w-[70%] max-[699px]:overflow-y-auto flex justify-center items-center max-lg:w-[85%] max-lg:h-full max-[700px]:w-[85%] min-[1024px]:w-[80%] min-[1024px]:h-[80%]"
                                        >
                                            <form
                                                class="flex flex-col gap-2 w-full max-[700px]:h-full overflow-y-auto overflow-x-hidden h-[100%] max-[1024px]:h-[80%]"
                                                @submit.prevent="submit_company_form()"
                                            >
                                                <div class="w-[50%] max-[700px]:w-full pt-5">
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customCompanyName"
                                                        >نام شرکت:<sup class="text-red-500">*</sup></label
                                                    >
                                                    <div class="relative flex items-center">
                                                        <input
                                                            :class="{ '!border !border-red-400': $companyFormValidation.companyForm.companyName.$error }"
                                                            id="customCompanyName"
                                                            type="text"
                                                            class="form-input p-2 pe-10 rounded-lg text-[15px] text-[#7e7e7e] max-[1150px]:text-[14px] max-[1150px]:p-2"
                                                            v-model.trim="companyForm.companyName"
                                                        />
                                                        <div class="absolute end-1 pe-4 ps-1">
                                                            <svg
                                                                class="max-[1150px]:w-[16px] max-[1150px]:h-[16px]"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M22 22L2 22" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                                <path
                                                                    d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                />
                                                                <path
                                                                    d="M21 22V11.5C21 10.0955 21 9.39331 20.6629 8.88886C20.517 8.67048 20.3295 8.48298 20.1111 8.33706C19.6067 8 18.9045 8 17.5 8"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                />
                                                                <path
                                                                    d="M3 22V11.5C3 10.0955 3 9.39331 3.33706 8.88886C3.48298 8.67048 3.67048 8.48298 3.88886 8.33706C4.39331 8 5.09554 8 6.5 8"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                />
                                                                <path d="M12 22V19" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                                <path d="M10 5H14" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                                <path d="M10 8H14" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                                <path d="M10 11H14" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                                <path d="M10 14H14" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <template v-if="isSubmitCompanyForm && $companyFormValidation.companyForm.companyName.$error">
                                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا نام شرکت را وارد نمایید.</p>
                                                    </template>
                                                </div>
                                                <div class="w-[50%] max-[700px]:w-full pt-5">
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="companyManagerId"
                                                        >نام مدیر:<sup class="text-red-500">*</sup></label
                                                    >
                                                    <div
                                                        :class="[
                                                            { 'border border-red-500': $companyFormValidation.companyForm.companyManagerId.$error },
                                                            !checkRoles('ADMIN') ? 'cursor-not-allowed !bg-transparent' : 'bg-white',
                                                        ]"
                                                        class="relative bg-white z-40 h-[41px] max-[1500px]:h-[40px] max-[1150px]:h-[38px] rounded-lg border border-[#E0E0E0] flex items-center"
                                                    >
                                                        <multiselect
                                                            :disabled="!checkRoles('ADMIN')"
                                                            v-model="companyForm.manager"
                                                            id="customePosition"
                                                            @update:model-value="update_selected_company_manager"
                                                            :options="usersCompany"
                                                            class="custom-multiselect bg-transparent relative z-50 py-1 max-[1150px]:py-[0px] text-[15px] rounded-lg max-[1150px]:text-[14px] font-semibold"
                                                            :searchable="true"
                                                            :preselect-first="true"
                                                            :allow-empty="false"
                                                            selected-label=""
                                                            label="firstName"
                                                            track-by="id"
                                                            select-label=""
                                                            deselect-label=""
                                                            placeholder="مدیر شرکت را انتخاب نمایید"
                                                        ></multiselect>
                                                    </div>
                                                    <template v-if="isSubmitCompanyForm && $companyFormValidation.companyForm.companyManagerId.$error">
                                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا نام مدیر شرکت را وارد نمایید.</p>
                                                    </template>
                                                </div>
                                                <div class="relative flex items-center mt-12">
                                                    <div class="flex flex-col gap-2">
                                                        <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customCompanyName">
                                                            شعبه های مربوطه:</label
                                                        >
                                                        <span
                                                            v-if="companyForm?.branches?.length == 0"
                                                            class="text-sm font-normal text-[#616161] max-[1150px]:text-[14px]"
                                                            >فاقد شعبه</span
                                                        >
                                                        <div
                                                            v-for="item in companyForm.branches"
                                                            :key="item.id"
                                                            class="flex items-center gap-4"
                                                            :class="item.isActive ? '' : 'opacity-40'"
                                                        >
                                                            <span
                                                                :class="item.isActive ? 'text-green-600' : ''"
                                                                class="cursor-pointer rounded-md border-gray-300 border p-2 text-center hover:bg-gray-600 hover:text-white"
                                                                @click="
                                                                    () => {
                                                                        router.push({ name: 'branches-edit', params: { Id: item.id } });
                                                                    }
                                                                "
                                                                >{{ item.name }}</span
                                                            >
                                                            <span :class="item.isActive ? 'text-green-600' : ''" v-if="checkRoles('ADMIN')">{{
                                                                item.isActive ? 'فعال' : 'غیرفعال'
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref, computed } from 'vue';
    import { checkRoles, checkPermissions } from '@/plugins/rolepermissioncontrol/helperAccess.js';
    import Multiselect from '@suadelabs/vue3-multiselect';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
    import defaultProfile from '../../../../public/assets/images/default-profile.png';
    import tarazIcon from '../../../../public/assets/images/taraz-logo.png';
    import Swal from 'sweetalert2';
    import { taxios } from '@/plugins/taxios';
    import { useVuelidate } from '@vuelidate/core';
    import { required } from '@vuelidate/validators';
    import 'flatpickr/dist/flatpickr.css';
    import 'flatpickr/dist/flatpickr.css';
    import { useRouter } from 'vue-router';
    import { useRoute } from 'vue-router';
    import { useAuthStore } from '@/stores/authentication';
    const router = useRouter();
    const route = useRoute();
    const authStore = useAuthStore();
    const isSubmitCompanyForm = ref(false);
    interface Ibranch {
        id: string;
        name: string;
        isActive: boolean;
    }
    interface IcompanyForm {
        companyName: string;
        companyLogo: string;
        companyLogoPreview?: string;
        branches?: Ibranch[];
        manager?: Object;
        companyManagerId?: string;
    }
    let companyForm = ref<IcompanyForm>({
        companyName: '',
        companyLogo: '',
        branches: [],
        manager: {},
        companyManagerId: '',
    });
    const rules = {
        companyForm: {
            companyName: { required },
            companyLogo: {},
            companyManagerId: { required },
        },
    };
    const $companyFormValidation = useVuelidate(rules, { companyForm });
    const submit_company_form = async () => {
        isSubmitCompanyForm.value = true;
        $companyFormValidation.value.companyForm.$touch();
        if ($companyFormValidation.value.companyForm.$invalid) {
            isSubmitCompanyForm.value = true;
        } else {
            const res = await edit_company_data();
            isSubmitCompanyForm.value = false;
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

    const truncatedName = computed(() => {
        if (companyForm.value.companyName.length > 18) {
            return `${companyForm.value.companyName.slice(0, 15)}...`;
        }
        return companyForm.value.companyName;
    });

    const go_back_portal = () => {
        router.back();
    };

    let _tempData = <IcompanyForm>{};
    const cancel = () => {
        companyForm.value = { ..._tempData };
        isSubmitCompanyForm.value = false;
        router.back();
    };

    const upload_image = (e) => {
        const file = e.target.files[0];
        companyForm.value.companyLogo = file;
        companyForm.value.companyLogoPreview = URL.createObjectURL(file);
    };

    const edit_company_data = async () => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            const form = { ...companyForm.value };
            delete form.branches;
            delete form.manager;
            for (let [key, value] of Object.entries(form)) {
                formData.append(key, value);
            }
            taxios(import.meta.env.VITE_MAIN_URL, 'multipart/form-data')
                ?.put('/companies/' + route.params.Id, formData)
                .then((res) => {
                    const company = res.data.content;
                    let { companyName, companyLogo, companyManagerId, manager } = company;
                    companyForm.value = {
                        companyName,
                        companyLogo,
                        companyManagerId,
                        manager,
                    };
                    companyForm.value.companyManagerId = company.manager.id.toString();
                    _tempData = { ...companyForm.value };
                    resolve('ok');
                    showAlert('تغییرات با موفقیت ذخیره شد.');
                    router.back();
                })
                .catch((error) => {
                    if (error?.response?.data?.info?.[0]?.message) {
                        showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                    }
                });
        });
    };

    const fetch_company_data = () => {
        taxios()
            ?.get('/companies/' + route.params.Id)
            .then((res) => {
                const company = res.data.content;
                let { companyName, companyLogo, branches, manager } = company;
                companyForm.value = {
                    companyName,
                    companyLogo,
                    branches,
                    manager,
                };
                companyForm.value.companyManagerId = company.manager.id.toString();
                _tempData = { ...companyForm.value };
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    const update_selected_company_manager = (data) => {
        companyForm.value.companyManagerId = data.id.toString();
    };

    let usersCompany = ref([]);
    const fetch_usersCompany = () => {
        taxios()
            ?.get(`/users/custom/usersCompany/${authStore.loginInfo.companyId}`)
            .then((res) => {
                usersCompany.value = res.data.content;
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    const handleImageError = (event: Event) => {
        const target = event.target as HTMLImageElement;
        if (target) {
            target.src = defaultProfile;
        }
    };

    onMounted(() => {
        fetch_company_data();
        fetch_usersCompany();
    });
</script>

<style>
    .tab:focus svg {
        filter: invert(23%) sepia(48%) saturate(7069%) hue-rotate(200deg) brightness(91%) contrast(92%);
    }
    .tab:hover a {
        background-color: transparent !important;
    }
    .selected-tab:hover a {
        background-color: transparent !important;
    }
    .multiselect__tags {
        background-color: transparent !important;
        border: none !important;
    }
    .multiselect__single {
        background: none !important;
    }
</style>
