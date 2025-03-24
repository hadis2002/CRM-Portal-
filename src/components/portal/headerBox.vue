<template>
    <div
        class="header-box flex ps-8 pe-5 justify-between items-center h-[12%] min-[700px]:h-[18%] min-[790px]:h-[20%] min-[1024px]:h-[15%] min-[1280px]:h-[14%]"
    >
        <div class="w-12">
            <img @click="checkPreUrl" class="h-full w-full cursor-pointer" src="../../../public/assets/images/taraz-logo.png" alt="" />
        </div>
        <div class="box-icon flex gap-5 max-[800px]:gap-4 items-center justify-end">
            <div class="flex items-center gap-4 max-[800px]:gap-3">
                <button @click="settingModal = true" type="button">
                    <svg
                        class="max-[1024px]:w-7 max-[1024px]:h-7 max-[800px]:w-6 max-[800px]:h-6"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M20 7L4 7" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M20 12L4 12" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M20 17L4 17" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </button>
                <TransitionRoot appear :show="settingModal" as="template">
                    <Dialog as="div" class="relative z-50">
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <DialogOverlay class="fixed inset-0 bg-[black]/20" />
                        </TransitionChild>

                        <div class="fixed inset-0 flex justify-center items-center">
                            <div
                                class="flex items-center justify-center px-4 py-8 h-[60%] max-[1024px]:h-[70%] w-[28%] max-[1536px]:w-[35%] max-[1280px]:w-[41%] max-[1024px]:w-[55%] max-[800px]:w-[58%] max-[700px]:w-[80%] max-[700px]:h-[60%]"
                            >
                                <TransitionChild
                                    as="template"
                                    enter="duration-300 ease-out"
                                    enter-from="opacity-0 scale-95"
                                    enter-to="opacity-100 scale-100"
                                    leave="duration-200 ease-in"
                                    leave-from="opacity-100 scale-100"
                                    leave-to="opacity-0 scale-95"
                                >
                                    <DialogPanel class="panel h-fit border-0 rounded-3xl w-[100%]">
                                        <div class="modal-setting w-full flex flex-col gap-7 h-full">
                                            <div class="flex justify-between items-center">
                                                <button @click="settingModal = false">
                                                    <svg
                                                        class="max-[700px]:w-3 max-[700px]:h-3"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 1L15 15M1.00003 15L8.00003 8L15 1"
                                                            stroke="#757575"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                        />
                                                    </svg>
                                                </button>
                                                <button class="flex items-center gap-2">
                                                    <div>
                                                        <svg
                                                            class="max-[700px]:w-5 max-[700px]:h-5"
                                                            width="30"
                                                            height="30"
                                                            viewBox="0 0 30 30"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle cx="15" cy="15" r="3.75" stroke="#757575" stroke-width="1.5" />
                                                            <path
                                                                d="M17.2068 2.6903C16.7474 2.5 16.165 2.5 15.0001 2.5C13.8353 2.5 13.2528 2.5 12.7934 2.6903C12.1808 2.94404 11.6941 3.43072 11.4404 4.04329C11.3246 4.32293 11.2793 4.64813 11.2615 5.12249C11.2354 5.8196 10.8779 6.46487 10.2738 6.81366C9.66967 7.16246 8.93211 7.14942 8.31536 6.82345C7.89568 6.60163 7.59138 6.47828 7.29129 6.43877C6.63392 6.35223 5.9691 6.53037 5.44307 6.934C5.04855 7.23672 4.75734 7.74112 4.17491 8.74991C3.59249 9.75871 3.30127 10.2631 3.23636 10.7561C3.14982 11.4135 3.32796 12.0783 3.73159 12.6043C3.91583 12.8444 4.17475 13.0463 4.5766 13.2988C5.16737 13.67 5.54748 14.3023 5.54745 15C5.54741 15.6977 5.16731 16.3299 4.5766 16.7011C4.17468 16.9536 3.91572 17.1554 3.73147 17.3956C3.32784 17.9216 3.1497 18.5864 3.23624 19.2438C3.30115 19.7368 3.59236 20.2412 4.17479 21.25C4.75722 22.2588 5.04843 22.7632 5.44295 23.0659C5.96898 23.4695 6.6338 23.6477 7.29117 23.5611C7.59124 23.5216 7.89552 23.3983 8.31517 23.1765C8.93196 22.8505 9.66957 22.8375 10.2737 23.1863C10.8779 23.5351 11.2354 24.1804 11.2615 24.8776C11.2793 25.3519 11.3246 25.6771 11.4404 25.9567C11.6941 26.5693 12.1808 27.056 12.7934 27.3097C13.2528 27.5 13.8353 27.5 15.0001 27.5C16.165 27.5 16.7474 27.5 17.2068 27.3097C17.8194 27.056 18.3061 26.5693 18.5598 25.9567C18.6756 25.6771 18.721 25.3519 18.7387 24.8775C18.7648 24.1804 19.1222 23.5351 19.7263 23.1863C20.3305 22.8374 21.0682 22.8504 21.685 23.1764C22.1046 23.3982 22.4089 23.5216 22.7089 23.5611C23.3663 23.6476 24.0311 23.4695 24.5571 23.0658C24.9517 22.7631 25.2429 22.2587 25.8253 21.2499C26.4077 20.2411 26.6989 19.7367 26.7638 19.2437C26.8504 18.5863 26.6723 17.9215 26.2686 17.3955C26.0844 17.1554 25.8254 16.9535 25.4235 16.701C24.8328 16.3298 24.4527 15.6975 24.4528 14.9999C24.4528 14.3023 24.8329 13.6701 25.4235 13.299C25.8255 13.0464 26.0845 12.8446 26.2687 12.6044C26.6724 12.0784 26.8505 11.4136 26.764 10.7562C26.6991 10.2632 26.4079 9.75879 25.8254 8.75C25.243 7.74121 24.9518 7.23681 24.5573 6.93409C24.0312 6.53045 23.3664 6.35231 22.709 6.43886C22.409 6.47836 22.1047 6.6017 21.685 6.8235C21.0683 7.14949 20.3306 7.16252 19.7265 6.8137C19.1223 6.46488 18.7648 5.81958 18.7387 5.12242C18.721 4.6481 18.6756 4.32291 18.5598 4.04329C18.3061 3.43072 17.8194 2.94404 17.2068 2.6903Z"
                                                                stroke="#757575"
                                                                stroke-width="1.5"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div class="text-[#757575] text-[18px] max-[700px]:text-[15px]">تنظیمات</div>
                                                </button>
                                            </div>
                                            <div class="w-[70%] h-[100%] mx-auto flex flex-col">
                                                <div>
                                                    <button
                                                        
                                                        type="button"
                                                        class="w-full flex items-center text-[#757575] text-[18px] h-14"
                                                        :class="{ 'p-4': accordian === 2 }"
                                                        @click="accordian === 2 ? (accordian = null) : (accordian = 2)"
                                                    >
                                                        <div class="flex items-center gap-3">
                                                            <div>
                                                                <svg
                                                                    class="max-[700px]:w-5 max-[700px]:h-5"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M22 22L2 22" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                    <path
                                                                        d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22"
                                                                        stroke="#757575"
                                                                        stroke-width="1.5"
                                                                    />
                                                                    <path
                                                                        d="M21 22V11.5C21 10.0955 21 9.39331 20.6629 8.88886C20.517 8.67048 20.3295 8.48298 20.1111 8.33706C19.6067 8 18.9045 8 17.5 8"
                                                                        stroke="#757575"
                                                                        stroke-width="1.5"
                                                                    />
                                                                    <path
                                                                        d="M3 22V11.5C3 10.0955 3 9.39331 3.33706 8.88886C3.48298 8.67048 3.67048 8.48298 3.88886 8.33706C4.39331 8 5.09554 8 6.5 8"
                                                                        stroke="#757575"
                                                                        stroke-width="1.5"
                                                                    />
                                                                    <path d="M12 22V19" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                    <path d="M10 5H14" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                    <path d="M10 8H14" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                    <path d="M10 11H14" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                    <path d="M10 14H14" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                </svg>
                                                            </div>
                                                            <div class="max-[700px]:text-[15px]">سازمان ها</div>
                                                        </div>
                                                        <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': accordian === 2 }">
                                                            <svg
                                                                class="max-[700px]:w-5 max-[700px]:h-5"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M19 9L12 15L5 9"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <vue-collapsible :isOpen="accordian === 2">
                                                        <div class="personnel-box bg-[#FAFAFA] rounded-b-xl flex flex-col gap-3 px-5 py-5">
                                                            <button
                                                                v-if="checkRoles('COMPANY_MANAGER')"
                                                                @click="go_to_index('company')"
                                                                class="flex items-center gap-3"
                                                            >
                                                                <div>
                                                                    <svg
                                                                        class="max-[700px]:w-5 max-[700px]:h-5"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path d="M22 22L2 22" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                        <path
                                                                            d="M21 22V6C21 4.11438 21 3.17157 20.4143 2.58579C19.8285 2 18.8857 2 17 2H15C13.1144 2 12.1716 2 11.5858 2.58579C11.1143 3.05733 11.0223 3.76022 11.0044 5"
                                                                            stroke="#757575"
                                                                            stroke-width="1.5"
                                                                        />
                                                                        <path
                                                                            d="M15 22V9C15 7.11438 15 6.17157 14.4142 5.58579C13.8284 5 12.8856 5 11 5H7C5.11438 5 4.17157 5 3.58579 5.58579C3 6.17157 3 7.11438 3 9V22"
                                                                            stroke="#757575"
                                                                            stroke-width="1.5"
                                                                        />
                                                                        <path d="M9 22V19" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                        <path d="M6 8H12" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                        <path d="M6 11H12" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                        <path d="M6 14H12" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                    </svg>
                                                                </div>
                                                                <div class="text-[#757575] max-[700px]:text-[13px]">اطلاعات شرکت</div>
                                                            </button>
                                                            <button
                                                                v-if="checkRoles('BRANCH_MANAGER') || checkPermissions(['show-branch'])"
                                                                @click="go_to_index('branches')"
                                                                class="flex items-center gap-3"
                                                            >
                                                                <svg
                                                                    class="max-[700px]:w-5 max-[700px]:h-5"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M22 22L2 22" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                    <path
                                                                        d="M3 21.9998V11.347C3 10.4901 3.36644 9.67408 4.00691 9.10478L10.0069 3.77144C11.1436 2.76108 12.8564 2.76108 13.9931 3.77144L19.9931 9.10478C20.6336 9.67408 21 10.4901 21 11.347V21.9998"
                                                                        stroke="#757575"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                    />
                                                                    <path d="M10 9H14" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                    <path d="M9 15.5H15" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                    <path d="M9 18.5H15" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                                                                    <path
                                                                        d="M18 22V16C18 14.1144 18 13.1716 17.4142 12.5858C16.8284 12 15.8856 12 14 12H10C8.11438 12 7.17157 12 6.58579 12.5858C6 13.1716 6 14.1144 6 16V22"
                                                                        stroke="#757575"
                                                                        stroke-width="1.5"
                                                                    />
                                                                </svg>
                                                                <div class="text-[#757575] max-[700px]:text-[13px]">شعبه ها</div>
                                                            </button>
                                                            <button
                                                                v-if="checkRoles('BRANCH_MANAGER') || checkPermissions(['show-user'])"
                                                                @click="go_to_index('personnel')"
                                                                class="flex items-center gap-3"
                                                            >
                                                                <div>
                                                                    <svg
                                                                        class="max-[700px]:w-5 max-[700px]:h-5"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
                                                                            stroke="#757575"
                                                                            stroke-width="1.5"
                                                                        />
                                                                        <path
                                                                            d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6"
                                                                            stroke="#757575"
                                                                            stroke-width="1.5"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <div class="text-[#757575] max-[700px]:text-[13px]">کارمندان</div>
                                                            </button>
                                                        </div>
                                                    </vue-collapsible>
                                                </div>
                                                <button
                                                    v-if="checkRoles('BRANCH_MANAGER') || checkPermissions(['show-group'])"
                                                    @click="go_to_index('groups')"
                                                    class="flex items-center gap-3 text-[#757575] text-[18px] h-14"
                                                >
                                                    <div>
                                                        <svg
                                                            class="max-[700px]:w-5 max-[700px]:h-5"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clip-path="url(#clip0_4559_26302)">
                                                                <ellipse cx="12" cy="6" rx="4" ry="4" stroke="#757575" stroke-width="1.5" />
                                                                <path
                                                                    d="M18 9C19.6569 9 21 7.88071 21 6.5C21 5.11929 19.6569 4 18 4"
                                                                    stroke="#757575"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                />
                                                                <path
                                                                    d="M6 9C4.34315 9 3 7.88071 3 6.5C3 5.11929 4.34315 4 6 4"
                                                                    stroke="#757575"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                />
                                                                <ellipse cx="12" cy="17" rx="6" ry="4" stroke="#757575" stroke-width="1.5" />
                                                                <path
                                                                    d="M20 19C21.7542 18.6153 23 17.6411 23 16.5C23 15.3589 21.7542 14.3847 20 14"
                                                                    stroke="#757575"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                />
                                                                <path
                                                                    d="M4 19C2.24575 18.6153 1 17.6411 1 16.5C1 15.3589 2.24575 14.3847 4 14"
                                                                    stroke="#757575"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_4559_26302">
                                                                    <rect width="24" height="24" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <div class="max-[700px]:text-[15px]">گروه</div>
                                                </button>
                                                <button
                                                    @click="go_to_index('parametricFields')"
                                                    v-if="checkRoles('BRANCH_MANAGER')"
                                                    class="flex items-center gap-3 text-[#757575] text-[18px] h-14"
                                                >
                                                    <div>
                                                        <svg class="max-[700px]:w-5 max-[700px]:h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z" stroke="#757575" stroke-width="1.5"/>
                                                            <path d="M5 4.07617C4.02491 4.17208 3.36857 4.38885 2.87868 4.87873C2 5.75741 2 7.17163 2 10.0001V14.0001C2 16.8285 2 18.2427 2.87868 19.1214C3.36857 19.6113 4.02491 19.828 5 19.9239" stroke="#757575" stroke-width="1.5"/>
                                                            <path d="M19 4.07617C19.9751 4.17208 20.6314 4.38885 21.1213 4.87873C22 5.75741 22 7.17163 22 10.0001V14.0001C22 16.8285 22 18.2427 21.1213 19.1214C20.6314 19.6113 19.9751 19.828 19 19.9239" stroke="#757575" stroke-width="1.5"/>
                                                            <path d="M9 13H15" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                                            <path d="M9 9H15" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                                            <path d="M9 17H12" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
                                                        </svg>
                                                    </div>
                                                    <div class="max-[700px]:text-[15px]">فیلدهای پارامتریک</div>
                                                </button>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </Dialog>
                </TransitionRoot>
            </div>
            <div class="dropdown">
                <Popper :placement="store.rtlClass === 'rtl' ? 'left-start' : 'right-start'" offsetDistance="0" class="align-middle">
                    <button type="button" class="dropdown-toggle relative flex justify-center items-center h-full">
                        <img
                            :key="authStore.loginInfo.profileImage"
                            class="rounded-full w-12 h-12 max-[1024px]:w-10 max-[1024px]:h-10"
                            :src="authStore.loginInfo.profileImage || defaultProfile"
                            @error="handleImageError"
                        />
                    </button>
                    <template #content="{ close }">
                        <ul @click="close()" class="whitespace-nowrap !py-0 absolute !rounded-xl flex flex-col left-5 !mt-16">
                            <li @click="go_profile_edit" class="text-[#424242] flex items-center text-[16px] py-1.5 px-5">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.0001" cy="4.99999" r="3.33333" stroke="#616161" stroke-width="1.5" />
                                    <path
                                        d="M16.6666 14.5833C16.6666 16.6544 16.6666 18.3333 9.99992 18.3333C3.33325 18.3333 3.33325 16.6544 3.33325 14.5833C3.33325 12.5123 6.31802 10.8333 9.99992 10.8333C13.6818 10.8333 16.6666 12.5123 16.6666 14.5833Z"
                                        stroke="#616161"
                                        stroke-width="1.5"
                                    />
                                </svg>
                                <a class="!px-2 max-lg:text-sm" href="javascript:;">پروفایل</a>
                            </li>
                            <li @click="logout" class="text-[#424242] flex items-center text-[16px] py-1.5 px-5">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_398_133083)">
                                        <path
                                            d="M1.66748 9.99918L13.3341 9.99917M13.3341 9.99917L10.4175 7.49918M13.3341 9.99917L10.4175 12.4992"
                                            stroke="#616161"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M7.50171 5.83332C7.5118 4.0208 7.59217 3.03921 8.23249 2.39889C8.96473 1.66666 10.1432 1.66666 12.5003 1.66666L13.3336 1.66666C15.6906 1.66666 16.8691 1.66666 17.6014 2.39889C18.3336 3.13112 18.3336 4.30963 18.3336 6.66666L18.3336 13.3333C18.3336 15.6903 18.3336 16.8689 17.6014 17.6011C16.8691 18.3333 15.6906 18.3333 13.3336 18.3333L12.5003 18.3333C10.1432 18.3333 8.96473 18.3333 8.23249 17.6011C7.59217 16.9608 7.5118 15.9792 7.50171 14.1667"
                                            stroke="#616161"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_398_133083">
                                            <rect width="20" height="20" rx="5" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <a class="!px-2 max-lg:text-sm" href="javascript:;">خروج</a>
                            </li>
                        </ul>
                    </template>
                </Popper>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, ref } from 'vue';
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
    import VueCollapsible from 'vue-height-collapsible/vue3';
    import { useRouter } from 'vue-router';
    import { useAppStore } from '@/stores';
    import { useAuthStore } from '@/stores/authentication';
    import defaultProfile from '../../../public/assets/images/default-profile.png';
    import { checkMultiRoles, checkRoles, checkPermissions } from '@/plugins/rolepermissioncontrol/helperAccess.js';
    const routes = {
        company: 'companies-index',
        personnel: 'personnel-index',
        groups: 'groups-index',
        branches: 'branches-index',
        parametricFields: 'parametricFields'
    };
    const router = useRouter();
    const store = useAppStore();
    const authStore = useAuthStore();
    const accordian: any = ref(1);
    const settingModal = ref(false);

    const go_profile_edit = () => {
        router.push({ name: 'profile' });
    };
    const logout = () => {
        authStore.removeLoginInfo();
        router.push({ name: 'login' });
    };
    
    const go_to_index = (routeKey: keyof typeof routes) => {
        router.push({ name: routes[routeKey] });
        settingModal.value = false;
    };

    const preUrlLink = computed(() => {
        return localStorage.getItem('preurl') ? localStorage.getItem('preurl') : '/companies/index';
    });

    const checkPreUrl = () => {
        if (preUrlLink.value) {
            localStorage.removeItem('preurl');
            window.location.href = preUrlLink.value ? preUrlLink.value : '/companies/index';
        }
    };

    const handleImageError = (event: Event) => {
        const target = event.target as HTMLImageElement;
        if (target) {
            target.src = defaultProfile;
        }
    };
</script>

<style>
    @media (max-width: 700px) {
        .customer-box {
            padding: 10px !important;
        }
        .personnel-box {
            padding: 10px !important;
        }
    }
    .dropdown ul > li:hover,
    a:hover {
        background-color: #f2f9ff !important;
        --tw-text-opacity: 1;
        color: #424242 !important;
    }
    .box-icon svg:hover {
        filter: invert(23%) sepia(48%) saturate(7069%) hue-rotate(200deg) brightness(91%) contrast(92%);
    }
</style>
