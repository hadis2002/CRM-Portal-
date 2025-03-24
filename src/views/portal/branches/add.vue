<template>
    <div
        dir="rtl"
        class="main-container bg-[linear-gradient(117deg,_#e7f0f9_-5.98%,_#efefef_107.97%)] overflow-hidden h-screen flex justify-center items-center"
    >
        <div
            class="inner-container shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] w-[100%] flex flex-col bg-[#FAFAFA] h-full min-[700px]:flex-row min-[700px]:h-[72%] min-[700px]:rounded-3xl min-[700px]:w-[85%] min-[1024px]:w-[75%] min-[1280px]:w-[70%] min-[1280px]:h-[75%]"
        >
            <div
                class="right-box z-50 shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] flex flex-col justify-center items-center bg-white max-[700px]:h-[30%] min-[700px]:w-[30%] min-[700px]:h-full min-[700px]:rounded-s-3xl min-[1024px]:w-[25%]"
            >
                <div class="flex flex-col gap-7 max-[700px]:gap-2 items-center w-[50%]">
                    <div class="flex relative justify-center items-center">
                        <div
                            class="flex justify-center border border-gray-100 items-center rounded-full max-[700px]:w-20 max-[700px]:h-20 max-[1280px]:w-24 max-[1280px]:h-24"
                        >
                            <img
                                class="company-profile object-cover rounded-full"
                                :src="authStore.loginInfo.companyLogo || defaultProfile"
                                alt=""
                                @error="handleImageError"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col min-[700px]:gap-5 max-[700px]:gap-3 items-center justify-center">
                        <div class="flex flex-col min-[700px]:gap-4 max-[700px]:gap-3 items-center text-center">
                            <button
                                v-tippy:click
                                class="text-[26px] cursor-pointer text-[#0985AA] font-semibold w-max max-[700px]:text-[16px] max-[1150px]:text-[18px]"
                            >
                                {{ truncatedName }}
                            </button>
                            <tippy target="click" trigger="click">{{ branchForm.name }}</tippy>
                        </div>
                        <div class="flex gap-2 text-[#2375C8] font-semibold">
                            <button @click="submit_branch_form" type="submit" class="border border-[#2375C8] rounded px-5 py-1.5 flex gap-1 items-center">
                                ذخیره
                            </button>
                            <button @click="cancel" type="button" class="border border-[#2375C8] rounded px-4 py-1.5 flex gap-1 items-center">انصراف</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="left-box w-[77%] max-[700px]:w-full max-[700px]:h-[70%] min-[700px]:w-[70%] min-[700px]:h-[100%] min-[1024px]:w-[75%]">
                <div class="h-full relative md:rounded-l-3xl flex flex-col items-center justify-between shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] w-full">
                    <div class="h-[10%] w-full flex items-center justify-end pe-8 shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] bg-white md:rounded-tl-3xl">
                        <button class="">
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
                    <div class="h-[90%] w-full min-[700px]:h-[90%] flex justify-center items-center">
                        <div
                            class="form-box overflow-y-auto overflow-x-hidden h-[90%] w-[70%] min-[700px]:flex min-[700px]:items-start min-[700px]:justify-center max-lg:w-[90%] max-[700px]:overflow-auto max-[700px]:w-[85%] min-[1024px]:w-[80%] min-[1024px]:items-start"
                        >
                            <form
                                class="grid grid-cols-2 gap-x-3 max-[699px]:h-full min-[1024px]:w-[100%] gap-y-5 max-[700px]:grid-cols-1 min-[700px]:grid-cols-2"
                                @submit.prevent="submit_branch_form()"
                            >
                                <div>
                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customBranchName"
                                        >نام شعبه:<sup class="text-red-500">*</sup></label
                                    >
                                    <div class="relative flex items-center">
                                        <input
                                            :class="{ 'border border-red-400 !bg-white': $branchFormValidation.branchForm.name.$error }"
                                            id="customBranchName"
                                            type="text"
                                            class="form-input p-2 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1150px]:p-2"
                                            v-model.trim="branchForm.name"
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
                                                    d="M21 22V6C21 4.11438 21 3.17157 20.4143 2.58579C19.8285 2 18.8857 2 17 2H15C13.1144 2 12.1716 2 11.5858 2.58579C11.1143 3.05733 11.0223 3.76022 11.0044 5"
                                                    stroke="#2375C8"
                                                    stroke-width="1.5"
                                                />
                                                <path
                                                    d="M15 22V9C15 7.11438 15 6.17157 14.4142 5.58579C13.8284 5 12.8856 5 11 5H7C5.11438 5 4.17157 5 3.58579 5.58579C3 6.17157 3 7.11438 3 9V22"
                                                    stroke="#2375C8"
                                                    stroke-width="1.5"
                                                />
                                                <path d="M9 22V19" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M6 8H12" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M6 11H12" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M6 14H12" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <template v-if="isSubmitBranchForm && $branchFormValidation.branchForm.name.$error">
                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا نام شعبه را وارد نمایید.</p>
                                    </template>
                                </div>
                                <div>
                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customInstance">نام نمونه:</label>
                                    <div class="relative flex items-center">
                                        <input
                                            id="customInstance"
                                            type="text"
                                            class="form-input p-2 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1150px]:p-2"
                                            v-model.trim="branchForm.instance"
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
                                                <path
                                                    d="M12 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V7.95M12 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7V7.95M12 3V21"
                                                    stroke="#2375C8"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path d="M7 21H17" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <template v-if="isSubmitBranchForm && $branchFormValidation.branchForm.instance.$error">
                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا نام نمونه را وارد نمایید.</p>
                                    </template>
                                </div>
                                <div>
                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customManager"
                                        >مدیر شعبه:<sup class="text-red-500">*</sup></label
                                    >
                                    <div
                                        :class="{ 'border border-red-400': $branchFormValidation.branchForm.managerId.$error }"
                                        class="relative bg-white z-40 h-[38px] max-[1500px]:h-[40px] max-[1150px]:h-[38px] rounded-lg flex items-center"
                                    >
                                        <multiselect
                                            v-model="branchForm.manager"
                                            @update:model-value="update_selected_manager"
                                            id="customeBranchName"
                                            :options="managers"
                                            class="custom-multiselect relative z-50 max-[1150px]:py-[0px] rounded-lg font-semibold"
                                            :searchable="true"
                                            :preselect-first="true"
                                            :allow-empty="false"
                                            selected-label=""
                                            label="firstName"
                                            track-by="id"
                                            select-label=""
                                            deselect-label=""
                                            placeholder="نام مدیر شعبه را انتخاب نمایید"
                                        ></multiselect>
                                    </div>
                                    <template v-if="isSubmitBranchForm && $branchFormValidation.branchForm.managerId.$error">
                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا نام مدیر شعبه را وارد نمایید.</p>
                                    </template>
                                </div>
                                <div :class="{ 'has-error': $branchFormValidation.branchForm.economicCode.$error }">
                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customeEconomicCode">کد اقتصادی:</label>
                                    <div class="relative flex items-center">
                                        <input
                                            id="customeEconomicCode"
                                            type="text"
                                            class="form-input p-2 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1150px]:p-2"
                                            v-model.trim="branchForm.economicCode"
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
                                                <path
                                                    d="M16.755 2H7.24502C6.08614 2 5.50671 2 5.03939 2.16261C4.15322 2.47096 3.45748 3.18719 3.15795 4.09946C3 4.58055 3 5.17705 3 6.37006V20.3742C3 21.2324 3.985 21.6878 4.6081 21.1176C4.97417 20.7826 5.52583 20.7826 5.8919 21.1176L6.375 21.5597C7.01659 22.1468 7.98341 22.1468 8.625 21.5597C9.26659 20.9726 10.2334 20.9726 10.875 21.5597C11.5166 22.1468 12.4834 22.1468 13.125 21.5597C13.7666 20.9726 14.7334 20.9726 15.375 21.5597C16.0166 22.1468 16.9834 22.1468 17.625 21.5597L18.1081 21.1176C18.4742 20.7826 19.0258 20.7826 19.3919 21.1176C20.015 21.6878 21 21.2324 21 20.3742V6.37006C21 5.17705 21 4.58055 20.842 4.09946C20.5425 3.18719 19.8468 2.47096 18.9606 2.16261C18.4933 2 17.9139 2 16.755 2Z"
                                                    stroke="#2375C8"
                                                    stroke-width="1.5"
                                                />
                                                <path d="M10.5 11L17 11" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M7 11H7.5" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M7 7.5H7.5" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M7 14.5H7.5" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M10.5 7.5H17" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M10.5 14.5H17" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <template v-if="isSubmitBranchForm && $branchFormValidation.branchForm.economicCode.$error">
                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا کد اقتصادی را وارد نمایید.</p>
                                    </template>
                                </div>
                                <div :class="{ 'has-error': $branchFormValidation.branchForm.nationalCode.$error }">
                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customeNationalCode">شناسه ملی:</label>
                                    <div class="relative flex items-center">
                                        <input
                                            id="customeNationalCode"
                                            type="text"
                                            class="form-input p-2 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1150px]:p-2"
                                            v-model.trim="branchForm.nationalCode"
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
                                                <circle cx="9" cy="9" r="2" stroke="#2375C8" stroke-width="1.5" />
                                                <path
                                                    d="M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z"
                                                    stroke="#2375C8"
                                                    stroke-width="1.5"
                                                />
                                                <path
                                                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                                    stroke="#2375C8"
                                                    stroke-width="1.5"
                                                />
                                                <path d="M19 12H15" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M19 9H14" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M19 15H16" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <template v-if="isSubmitBranchForm && $branchFormValidation.branchForm.nationalCode.$error">
                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا شناسه ملی را وارد نمایید.</p>
                                    </template>
                                </div>
                                <div :class="{ 'has-error': $branchFormValidation.branchForm.registrationCode.$error }">
                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customeRegistrationCode"
                                        >شماره ثبت:</label
                                    >
                                    <div class="relative flex items-center">
                                        <input
                                            id="customeRegistrationCode"
                                            type="text"
                                            class="form-input p-2 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1150px]:p-2"
                                            v-model.trim="branchForm.registrationCode"
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
                                                <path
                                                    d="M9.78133 3.89076C10.3452 3.41023 10.6271 3.16997 10.9219 3.02907C11.6037 2.7032 12.3963 2.7032 13.0781 3.02907C13.3729 3.16997 13.6548 3.41023 14.2187 3.89076C14.4431 4.08201 14.5553 4.17764 14.6752 4.25796C14.9499 4.44209 15.2584 4.56988 15.5828 4.63393C15.7244 4.66188 15.8713 4.6736 16.1653 4.69706C16.9038 4.75599 17.273 4.78546 17.5811 4.89427C18.2936 5.14594 18.8541 5.7064 19.1058 6.41893C19.2146 6.72699 19.244 7.09625 19.303 7.83475C19.3264 8.12868 19.3381 8.27564 19.3661 8.41718C19.4301 8.74163 19.5579 9.05014 19.7421 9.32485C19.8224 9.44469 19.918 9.55691 20.1093 9.78133C20.5898 10.3452 20.8301 10.6271 20.971 10.9219C21.2968 11.6037 21.2968 12.3963 20.971 13.0781C20.8301 13.3729 20.5898 13.6548 20.1093 14.2187C19.918 14.4431 19.8224 14.5553 19.7421 14.6752C19.5579 14.9499 19.4301 15.2584 19.3661 15.5828C19.3381 15.7244 19.3264 15.8713 19.303 16.1653C19.244 16.9038 19.2146 17.273 19.1058 17.5811C18.8541 18.2936 18.2936 18.8541 17.5811 19.1058C17.273 19.2146 16.9038 19.244 16.1653 19.303C15.8713 19.3264 15.7244 19.3381 15.5828 19.3661C15.2584 19.4301 14.9499 19.5579 14.6752 19.7421C14.5553 19.8224 14.4431 19.918 14.2187 20.1093C13.6548 20.5898 13.3729 20.8301 13.0781 20.971C12.3963 21.2968 11.6037 21.2968 10.9219 20.971C10.6271 20.8301 10.3452 20.5898 9.78133 20.1093C9.55691 19.918 9.44469 19.8224 9.32485 19.7421C9.05014 19.5579 8.74163 19.4301 8.41718 19.3661C8.27564 19.3381 8.12868 19.3264 7.83475 19.303C7.09625 19.244 6.72699 19.2146 6.41893 19.1058C5.7064 18.8541 5.14594 18.2936 4.89427 17.5811C4.78546 17.273 4.75599 16.9038 4.69706 16.1653C4.6736 15.8713 4.66188 15.7244 4.63393 15.5828C4.56988 15.2584 4.44209 14.9499 4.25796 14.6752C4.17764 14.5553 4.08201 14.4431 3.89076 14.2187C3.41023 13.6548 3.16997 13.3729 3.02907 13.0781C2.7032 12.3963 2.7032 11.6037 3.02907 10.9219C3.16997 10.6271 3.41023 10.3452 3.89076 9.78133C4.08201 9.55691 4.17764 9.4447 4.25796 9.32485C4.44209 9.05014 4.56988 8.74163 4.63393 8.41718C4.66188 8.27564 4.6736 8.12868 4.69706 7.83475C4.75599 7.09625 4.78546 6.72699 4.89427 6.41893C5.14594 5.7064 5.7064 5.14594 6.41893 4.89427C6.72699 4.78546 7.09625 4.75599 7.83475 4.69706C8.12868 4.6736 8.27564 4.66188 8.41718 4.63393C8.74163 4.56988 9.05014 4.44209 9.32485 4.25796C9.4447 4.17764 9.55691 4.08201 9.78133 3.89076Z"
                                                    stroke="#2375C8"
                                                    stroke-width="1.5"
                                                />
                                                <path
                                                    d="M8.5 12.5L10.5 14.5L15.5 9.5"
                                                    stroke="#2375C8"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <template v-if="isSubmitBranchForm && $branchFormValidation.branchForm.registrationCode.$error">
                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا شماره ثبت را وارد نمایید.</p>
                                    </template>
                                </div>
                                <div :class="{ 'has-error': $branchFormValidation.branchForm.header.$error }">
                                    <div class="flex flex-col">
                                        <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customeHeader">سربرگ:</label>
                                        <div
                                            class="relative bg-white h-[40px] border border-gray-200 rounded-lg max-[1150px]:h-[39px] flex items-center justify-center"
                                            id="customeSign"
                                        >
                                            <input
                                                @change="upload_header($event)"
                                                type="file"
                                                class="z-50 custom-file-container__custom-file__custom-file-input cursor-pointer form-input text-[15px] rounded-lg"
                                                accept=""
                                            />
                                            <div
                                                class="absolute left-4 !border-none w-[40px] h-[40px] flex justify-center items-center md:h-[70px] md:w-[70px]"
                                            >
                                                <img :src="branchForm.header" class="absolute rounded-md !border-none" alt="" />
                                            </div>
                                            <div
                                                class="absolute left-4 !border-none w-[40px] h-[40px] flex justify-center items-center md:h-[70px] md:w-[70px]"
                                            >
                                                <img class="absolute rounded-md" :src="branchForm.headerPreview" v-if="branchForm.headerPreview" />
                                            </div>
                                            <div class="absolute flex items-center gap-3 z-10">
                                                <div>
                                                    <svg
                                                        class="max-[1150px]:w-[16px] max-[1150px]:h-[16px]"
                                                        width="24"
                                                        height="25"
                                                        viewBox="0 0 24 25"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M17 9.50195C19.175 9.51406 20.3529 9.61051 21.1213 10.3789C22 11.2576 22 12.6718 22 15.5002V16.5002C22 19.3286 22 20.7429 21.1213 21.6215C20.2426 22.5002 18.8284 22.5002 16 22.5002H8C5.17157 22.5002 3.75736 22.5002 2.87868 21.6215C2 20.7429 2 19.3286 2 16.5002L2 15.5002C2 12.6718 2 11.2576 2.87868 10.3789C3.64706 9.61051 4.82497 9.51406 7 9.50195"
                                                            stroke="#2375C8"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                        />
                                                        <path
                                                            d="M12 15.5L12 2.5M12 2.5L15 6M12 2.5L9 6"
                                                            stroke="#2375C8"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div class="text-[#2375C8] text-[16px] font-semibold max-[1150px]:text-[14px]">آپلود سربرگ</div>
                                            </div>
                                        </div>
                                    </div>
                                    <template v-if="isSubmitBranchForm && $branchFormValidation.branchForm.header.$error">
                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا سربرگ را وارد نمایید.</p>
                                    </template>
                                </div>
                                <div :class="{ 'has-error': $branchFormValidation.branchForm.stamp.$error }">
                                    <div class="flex flex-col">
                                        <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customeStamp">مهر:</label>
                                        <div
                                            class="relative bg-white border border-gray-200 rounded-lg h-[40px] max-[1150px]:h-[39px] flex items-center justify-center"
                                            id="customeStamp"
                                        >
                                            <input
                                                @change="upload_stamp($event)"
                                                type="file"
                                                class="z-50 custom-file-container__custom-file__custom-file-input form-input cursor-pointer text-[15px] rounded-lg"
                                                accept=""
                                            />
                                            <div
                                                class="absolute left-4 !border-none w-[40px] h-[40px] flex justify-center items-center md:h-[70px] md:w-[70px]"
                                            >
                                                <img :src="branchForm.stamp" class="absolute rounded-md !border-none" alt="" />
                                            </div>
                                            <div
                                                class="absolute left-4 !border-none w-[40px] h-[40px] flex justify-center items-center md:h-[70px] md:w-[70px]"
                                            >
                                                <img class="absolute rounded-md" :src="branchForm.stampPreview" v-if="branchForm.stampPreview" />
                                            </div>
                                            <div class="absolute flex items-center gap-3 z-10">
                                                <div>
                                                    <svg
                                                        class="max-[1150px]:w-[16px] max-[1150px]:h-[16px]"
                                                        width="24"
                                                        height="25"
                                                        viewBox="0 0 24 25"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M17 9.50195C19.175 9.51406 20.3529 9.61051 21.1213 10.3789C22 11.2576 22 12.6718 22 15.5002V16.5002C22 19.3286 22 20.7429 21.1213 21.6215C20.2426 22.5002 18.8284 22.5002 16 22.5002H8C5.17157 22.5002 3.75736 22.5002 2.87868 21.6215C2 20.7429 2 19.3286 2 16.5002L2 15.5002C2 12.6718 2 11.2576 2.87868 10.3789C3.64706 9.61051 4.82497 9.51406 7 9.50195"
                                                            stroke="#2375C8"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                        />
                                                        <path
                                                            d="M12 15.5L12 2.5M12 2.5L15 6M12 2.5L9 6"
                                                            stroke="#2375C8"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div class="text-[#2375C8] text-[16px] font-semibold max-[1150px]:text-[14px]">آپلود مهر</div>
                                            </div>
                                        </div>
                                    </div>
                                    <template v-if="isSubmitBranchForm && $branchFormValidation.branchForm.stamp.$error">
                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا مهر را وارد نمایید.</p>
                                    </template>
                                </div>
                                <div>
                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customAddress">آدرس:</label>
                                    <div class="relative flex items-center">
                                        <textarea
                                            v-model.trim="branchForm.address"
                                            rows="6"
                                            class="form-input p-2 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px]"
                                        ></textarea>
                                    </div>
                                    <template v-if="isSubmitBranchForm && $branchFormValidation.branchForm.address.$error">
                                        <p class="text-danger mt-1 max-[1150px]:text-xs">لطفا آدرس را وارد نمایید.</p>
                                    </template>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, ref, computed } from 'vue';
    import Swal from 'sweetalert2';
    import { taxios } from '@/plugins/taxios';
    import defaultProfile from '../../../../public/assets/images/default-profile.png';
    import { useVuelidate } from '@vuelidate/core';
    import { required } from '@vuelidate/validators';
    import 'flatpickr/dist/flatpickr.css';
    import Multiselect from '@suadelabs/vue3-multiselect';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
    import 'flatpickr/dist/flatpickr.css';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/authentication';
    const authStore = useAuthStore();
    const router = useRouter();
    const datePickerIcon = ref(false);
    const isSubmitBranchForm = ref(false);
    interface IbranchForm {
        name: string;
        instance: string;
        managerId: string;
        economicCode: string;
        nationalCode: string;
        registrationCode: string;
        address: string;
        header: string;
        stamp: string;
        stampPreview?: string;
        headerPreview?: string;
        manager?: object;
    }
    const branchForm = ref<IbranchForm>({
        name: '',
        instance: '',
        managerId: '',
        economicCode: '',
        nationalCode: '',
        registrationCode: '',
        address: '',
        header: '',
        stamp: '',
        manager: {},
    });
    const rules = {
        branchForm: {
            name: { required },
            instance: {},
            managerId: { required },
            economicCode: {},
            nationalCode: {},
            registrationCode: {},
            address: {},
            header: {},
            stamp: {},
        },
    };
    const $branchFormValidation = useVuelidate(rules, { branchForm });
    const submit_branch_form = () => {
        isSubmitBranchForm.value = true;
        $branchFormValidation.value.branchForm.$touch();
        if ($branchFormValidation.value.branchForm.$invalid) {
            isSubmitBranchForm.value = true;
            datePickerIcon.value = true;
        } else {
            create_branch();
            isSubmitBranchForm.value = false;
            datePickerIcon.value = false;
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
        if (branchForm.value.name.length > 15) {
            return `${branchForm.value.name.slice(0, 12)}...`;
        }
        return branchForm.value.name;
    });

    const go_back_portal = () => {
        router.back();
    };

    let _tempData = <IbranchForm>{};
    const cancel = () => {
        branchForm.value = { ..._tempData };
        isSubmitBranchForm.value = false;
        datePickerIcon.value = false;
        router.back();
    };

    let managers = ref([]);
    const fetch_managers = () => {
        taxios()
            ?.get(`/users/branches/company/${authStore.loginInfo.companyId}`)
            .then((res) => {
                managers.value = res.data.content;
            })
            .catch((error) => {
                showAlert(error?.response?.data?.info?.[0]?.message?.fa);
            });
    };

    const update_selected_manager = (data) => {
        branchForm.value.managerId = data.id;
    };

    const upload_stamp = (e) => {
        const file = e.target.files[0];
        branchForm.value.stamp = file;
        branchForm.value.stampPreview = URL.createObjectURL(file);
    };
    const upload_header = (e) => {
        const file = e.target.files[0];
        branchForm.value.header = file;
        branchForm.value.headerPreview = URL.createObjectURL(file);
    };

    const create_branch = () => {
        const formData = new FormData();
        const branchData = { ...branchForm.value };
        delete branchData.manager;
        for (let [key, value] of Object.entries(branchData)) {
            if (value == null || value == undefined) {
                value = '';
            }
            formData.append(key, value);
        }
        taxios(import.meta.env.VITE_MAIN_URL, 'multipart/form-data')
            ?.post('/branches', formData)
            .then((res) => {
                const branch = res.data.content;
                branchForm.value = branch;
                _tempData = { ...branchForm.value };
                showAlert('شعبه با موفقیت ایجاد شد.');
                router.back();
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
        fetch_managers();
    });
</script>

<style>
    @media (max-width: 1150px) {
        .custom-multiselect .multiselect__placeholder {
            font-size: 10px !important;
        }
    }
    .pdp-icon {
        display: none;
    }
    .pdp {
        width: 100%;
    }
    .multiselect__single {
        background-color: inherit;
        font-size: 12px !important;
    }
    .multiselect--disabled {
        background-color: transparent;
    }
    .custom-multiselect .multiselect__placeholder {
        color: #646464 !important;
    }
    .custom-multiselect.multiselect {
        color: #7e7e7e !important;
    }
    .custom-multiselect[role='combobox'] {
        border: none !important;
    }
    .custom-color.custom-multiselect {
        color: #3d3d3d !important;
    }
    .multiselect__tags {
        background-color: inherit !important;
        border: 1px solid rgba(218, 218, 218, 0.623) !important;
    }
    .multiselect__select {
        background-color: inherit !important;
        height: 100% !important;
        top: 0 !important;
    }
    .custom-multiselect .multiselect__single {
        font-size: 15px !important;
    }
    .multiselect__content-wrapper {
        height: 190px !important;
    }
</style>
