<template>
    <div dir="rtl" class="main-container bg-[linear-gradient(117deg,_#e7f0f9_-5.98%,_#efefef_107.97%)] h-screen flex justify-center items-center">
        <div
            class="inner-container shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] w-[100%] h-[100%] flex flex-col bg-[#FAFAFA] min-[700px]:flex-row min-[700px]:h-[78%] min-[700px]:w-[80%] min-[700px]:rounded-3xl min-[1024px]:w-[75%] min-[1280px]:w-[70%] min-[1280px]:h-[75%]"
        >
            <div
                class="right-box shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] flex flex-col justify-center items-center bg-white max-[700px]:h-[30%] min-[700px]:w-[30%] min-[700px]:h-full min-[700px]:rounded-s-3xl min-[1024px]:w-[25%]"
            >
                <div class="flex flex-col gap-5 max-[700px]:gap-2 items-center w-[50%]">
                    <div class="flex relative justify-center items-center">
                        <div class="w-28 h-28 max-[1150px]:w-24 max-[1150px]:h-24">
                            <img
                                class="profile-picture w-[100%] h-[100%] border border-gray-100 rounded-full"
                                :src="userForm.profileImage || defaultProfileImage"
                                :alt="userForm.profileImagePreview ? '' : ''"
                                @error="handleImageError"
                            />
                            <img
                                class="profile-picture w-[100%] h-[100%] border border-gray-100 rounded-full absolute top-0"
                                :src="userForm.profileImagePreview"
                                v-if="userForm.profileImagePreview"
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
                    <div class="flex flex-col min-[700px]:gap-5 max-[700px]:gap-3 items-center justify-center">
                        <div class="flex flex-col min-[700px]:gap-4 max-[700px]:gap-3 items-center text-center">
                            <button
                                v-tippy:click
                                class="text-[22px] cursor-pointer text-[#0985AA] font-semibold text-wrap leading-9 max-[700px]:text-[16px] max-[1150px]:text-[18px] max-[1150px]:leading-6"
                            >
                                {{ truncatedName }}
                            </button>
                            <tippy target="click" trigger="click">{{ fullName }}</tippy>
                        </div>
                        <div class="flex gap-2 text-[#2375C8] font-semibold">
                            <button @click="submit_user_form" type="submit" class="border border-[#2375C8] rounded px-5 py-1.5 flex gap-1 items-center">
                                ذخیره
                            </button>
                            <button @click="cancel" type="button" class="border border-[#2375C8] rounded px-4 py-1.5 flex gap-1 items-center">انصراف</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="left-box w-[77%] max-[700px]:w-full max-[700px]:h-[70%] min-[700px]:w-[70%] min-[700px]:h-[100%] min-[1024px]:w-[75%]">
                <div class="h-full relative md:rounded-l-3xl flex items-center justify-between shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] w-full">
                    <div class="flex items-center justify-center w-full h-full">
                        <TabGroup class="w-full h-full" as="div">
                            <TabList class="flex px-8 h-[10%] items-center justify-between shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] md:rounded-tl-3xl">
                                <div class="flex items-center gap-2 md:gap-3 lg:gap-10 max-[700px]:gap-1">
                                    <Tab as="template" v-slot="{ selected }">
                                        <div class="selected-tab flex !outline-none items-center gap-2">
                                            <svg
                                                class="max-[1150px]:w-[22px] max-[1150px]:h-[22px] max-[800px]:h-[17px] max-[800px]:w-[17px]"
                                                width="29"
                                                height="28"
                                                viewBox="0 0 29 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    :class="{ 'fill-[#0985AA]': selected }"
                                                    d="M18.4584 4.7293L17.9566 5.28677L18.4584 4.7293ZM23.0769 8.88601L22.5752 9.44348L23.0769 8.88601ZM25.7629 11.8465L25.0778 12.1516L25.0778 12.1516L25.7629 11.8465ZM4.20009 24.2999L4.73042 23.7695H4.73042L4.20009 24.2999ZM24.7997 24.2999L24.2694 23.7695L24.7997 24.2999ZM16.8333 24.9167H12.1666V26.4167H16.8333V24.9167ZM3.58325 16.3334V11.6667H2.08325V16.3334H3.58325ZM25.4166 15.8234V16.3334H26.9166V15.8234H25.4166ZM17.9566 5.28677L22.5752 9.44348L23.5786 8.32854L18.9601 4.17182L17.9566 5.28677ZM26.9166 15.8234C26.9166 13.8426 26.9317 12.6274 26.448 11.5414L25.0778 12.1516C25.4014 12.8783 25.4166 13.7101 25.4166 15.8234H26.9166ZM22.5752 9.44348C24.146 10.8572 24.7541 11.4249 25.0778 12.1516L26.448 11.5414C25.9644 10.4553 25.051 9.65362 23.5786 8.32854L22.5752 9.44348ZM12.2013 3.08337C14.0373 3.08337 14.7613 3.09495 15.4086 3.34336L15.946 1.94293C14.9789 1.5718 13.9237 1.58337 12.2013 1.58337V3.08337ZM18.9601 4.17182C17.6861 3.02525 16.9131 2.31402 15.946 1.94293L15.4086 3.34336C16.0561 3.59181 16.5989 4.06483 17.9566 5.28677L18.9601 4.17182ZM12.1666 24.9167C9.94549 24.9167 8.35513 24.9151 7.14592 24.7525C5.95829 24.5929 5.25126 24.2904 4.73042 23.7695L3.66976 24.8302C4.51575 25.6762 5.59208 26.0571 6.94605 26.2392C8.27844 26.4183 9.9879 26.4167 12.1666 26.4167V24.9167ZM2.08325 16.3334C2.08325 18.5121 2.08166 20.2215 2.26079 21.5539C2.44283 22.9079 2.82376 23.9842 3.66976 24.8302L4.73042 23.7695C4.20958 23.2487 3.90709 22.5417 3.74742 21.354C3.58484 20.1448 3.58325 18.5545 3.58325 16.3334H2.08325ZM16.8333 26.4167C19.0119 26.4167 20.7214 26.4183 22.0538 26.2392C23.4078 26.0571 24.4841 25.6762 25.3301 24.8302L24.2694 23.7695C23.7486 24.2904 23.0415 24.5929 21.8539 24.7525C20.6447 24.9151 19.0543 24.9167 16.8333 24.9167V26.4167ZM25.4166 16.3334C25.4166 18.5545 25.415 20.1448 25.2524 21.354C25.0927 22.5417 24.7903 23.2487 24.2694 23.7695L25.3301 24.8302C26.1761 23.9842 26.557 22.9079 26.739 21.5539C26.9182 20.2215 26.9166 18.5121 26.9166 16.3334H25.4166ZM3.58325 11.6667C3.58325 9.44562 3.58484 7.85525 3.74742 6.64604C3.90709 5.45841 4.20958 4.75138 4.73042 4.23054L3.66976 3.16988C2.82376 4.01587 2.44283 5.09221 2.26079 6.44617C2.08166 7.77856 2.08325 9.48802 2.08325 11.6667H3.58325ZM12.2013 1.58337C10.011 1.58337 8.2931 1.58179 6.95518 1.76086C5.59626 1.94273 4.51634 2.3233 3.66976 3.16988L4.73042 4.23054C5.25067 3.71028 5.9599 3.40744 7.15416 3.2476C8.36943 3.08495 9.96874 3.08337 12.2013 3.08337V1.58337Z"
                                                    fill="#757575"
                                                />
                                                <path
                                                    :class="{ 'stroke-[#0985AA]': selected }"
                                                    d="M7.5 16.9166H16.8333"
                                                    stroke="#757575"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    :class="{ 'stroke-[#0985AA]': selected }"
                                                    d="M7.5 21H13.9167"
                                                    stroke="#757575"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    :class="{ 'stroke-[#0985AA]': selected }"
                                                    d="M15.6667 2.91663V5.83329C15.6667 8.58315 15.6667 9.95808 16.521 10.8124C17.3753 11.6666 18.7502 11.6666 21.5001 11.6666H26.1667"
                                                    stroke="#757575"
                                                    stroke-width="1.5"
                                                />
                                            </svg>
                                            <div>
                                                <a
                                                    href="javascript:;"
                                                    class="transition duration-300 text-[15px] sm:text-[13px] md:text-[14px] lg:text-[18px] max-[700px]:text-[12px]"
                                                    :class="{ 'text-[#0985AA]': selected }"
                                                    >اطلاعات اصلی</a
                                                >
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab as="template" v-slot="{ selected }">
                                        <div class="tab flex !outline-none items-center gap-2">
                                            <div>
                                                <svg
                                                    class="max-[1150px]:w-[22px] max-[1150px]:h-[22px] max-[800px]:h-[17px] max-[800px]:w-[17px]"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853"
                                                        stroke="#757575"
                                                        stroke-width="1.5"
                                                    />
                                                    <path
                                                        d="M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782"
                                                        stroke="#757575"
                                                        stroke-width="1.5"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:;"
                                                    class="transition duration-300 focus:text-[#0985AA] text-[15px] sm:text-[13px] md:text-[14px] lg:text-[18px] max-[700px]:text-[12px]"
                                                    :class="{ 'text-[#0985AA]': selected }"
                                                    >اطلاعات تماس</a
                                                >
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab as="template" v-slot="{ selected }">
                                        <div class="tab flex !outline-none items-center gap-2">
                                            <div>
                                                <svg
                                                    class="max-[1150px]:w-[22px] max-[1150px]:h-[22px]"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853"
                                                        stroke="#757575"
                                                        stroke-width="1.5"
                                                    />
                                                    <path
                                                        d="M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782"
                                                        stroke="#757575"
                                                        stroke-width="1.5"
                                                    />
                                                </svg>
                                            </div>
                                            <div class="max-[850px]:w-max">
                                                <a
                                                    href="javascript:;"
                                                    class="text-[18px] transition duration-300 focus:text-[#0985AA] max-[1150px]:text-[17px] max-[850px]:text-[14px]"
                                                    :class="{ 'text-[#0985AA]': selected }"
                                                    >تغییر رمز عبور</a
                                                >
                                            </div>
                                        </div>
                                    </Tab>
                                </div>
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
                            </TabList>
                            <TabPanels class="h-[90%]">
                                <TabPanel class="w-full h-full">
                                    <div class="h-[100%] flex justify-center items-center">
                                        <div
                                            class="form-box w-[70%] max-[699px]:py-5 sm:h-[90%] min-[700px]:flex min-[700px]:items-center min-[700px]:justify-center max-lg:w-[85%] max-lg:h-full max-[700px]:overflow-auto max-[700px]:w-[85%] min-[1024px]:w-[80%]"
                                        >
                                            <form
                                                class="grid grid-cols-2 h-full max-[700px]:w-full overflow-x-hidden max-[700px]:space-y-4 gap-x-8 min-[1024px]:w-[100%] max-[700px]:grid-cols-1 min-[700px]:grid-cols-2"
                                                @submit.prevent="submit_user_form()"
                                            >
                                                <div>
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customFname"
                                                        >نام:<sup class="text-red-500">*</sup></label
                                                    >
                                                    <div class="relative flex items-center">
                                                        <input
                                                            id="customFname"
                                                            type="text"
                                                            :class="{ 'border border-red-500': $userFormValidation.userForm.firstName.$error }"
                                                            class="form-input p-3 pe-10 rounded-lg text-[15px] text-[#7e7e7e] max-[1150px]:text-[14px] max-[1500px]:p-2 max-[1150px]:p-2"
                                                            v-model.trim="userForm.firstName"
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
                                                                <circle cx="12" cy="6" r="4" stroke="#2375C8" stroke-width="1.5" />
                                                                <ellipse cx="12" cy="17" rx="7" ry="4" stroke="#2375C8" stroke-width="1.5" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <template v-if="isSubmitUserForm && $userFormValidation.userForm.firstName.$error">
                                                        <p class="text-danger mt-1 text-xs">لطفا نام خود را وارد نمایید.</p>
                                                    </template>
                                                </div>
                                                <div>
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customLname"
                                                        >نام خانوادگی:<sup class="text-red-500">*</sup></label
                                                    >
                                                    <div class="relative flex items-center">
                                                        <input
                                                            id="customLname"
                                                            type="text"
                                                            :class="{ 'border border-red-500': $userFormValidation.userForm.lastName.$error }"
                                                            class="form-input p-3 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1500px]:p-2 max-[1150px]:p-2"
                                                            v-model.trim="userForm.lastName"
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
                                                                <circle cx="12" cy="6" r="4" stroke="#2375C8" stroke-width="1.5" />
                                                                <ellipse cx="12" cy="17" rx="7" ry="4" stroke="#2375C8" stroke-width="1.5" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <template v-if="isSubmitUserForm && $userFormValidation.userForm.lastName.$error">
                                                        <p class="text-danger mt-1 text-xs">لطفا نام خانوادگی خود را وارد نمایید.</p>
                                                    </template>
                                                </div>
                                                <div>
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customeDate"
                                                        >تاریخ تولد:</label
                                                    >
                                                    <div class="relative flex items-center">
                                                        <div class="absolute z-50 end-4 cursor-pointer pointer-events-none">
                                                            <svg
                                                                class="max-[1150px]:w-[16px] max-[1150px]:h-[16px]"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                />
                                                                <path d="M7 4V2.5" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                                <path d="M17 4V2.5" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                                <path d="M2.5 9H21.5" stroke="#2375C8" stroke-width="1.5" stroke-linecap="round" />
                                                                <path
                                                                    d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
                                                                    fill="#2375C8"
                                                                />
                                                                <path
                                                                    d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z"
                                                                    fill="#2375C8"
                                                                />
                                                                <path
                                                                    d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
                                                                    fill="#2375C8"
                                                                />
                                                                <path
                                                                    d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
                                                                    fill="#2375C8"
                                                                />
                                                                <path
                                                                    d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z"
                                                                    fill="#2375C8"
                                                                />
                                                                <path
                                                                    d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z"
                                                                    fill="#2375C8"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <date-picker
                                                            v-model="userForm.dateOfBirth"
                                                            class="form-input p-2 text-[15px] !rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1500px]:p-1 max-[1150px]:p-1"
                                                        ></date-picker>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col w-full">
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customeSign"
                                                        >امضاء:</label
                                                    >
                                                    <div
                                                        class="relative bg-white border border-gray-200 rounded-lg h-[47px] max-[1500px]:h-[40px] max-[1150px]:h-[38px] flex items-center justify-center"
                                                        id="customeSign"
                                                    >
                                                        <input
                                                            @change="upload_signature($event)"
                                                            type="file"
                                                            class="custom-file-container__custom-file__custom-file-input form-input p-3 text-[15px] z-50 !rounded-lg max-[1150px]:text-[14px] max-[1150px]:p-2"
                                                            accept=""
                                                        />
                                                        <div
                                                            class="absolute left-4 !border-none w-[40px] h-[40px] flex justify-center items-center md:h-[70px] md:w-[70px]"
                                                        >
                                                            <img :src="userForm.signature" class="absolute rounded-md !border-none" alt="" />
                                                        </div>
                                                        <div
                                                            class="absolute left-4 !border-none w-[40px] h-[40px] flex justify-center items-center md:h-[70px] md:w-[70px]"
                                                        >
                                                            <img
                                                                class="absolute rounded-md"
                                                                :src="userForm.signaturePreview"
                                                                v-if="userForm.signaturePreview"
                                                            />
                                                        </div>
                                                        <div class="absolute flex items-center gap-3">
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
                                                            <div class="text-[#2375C8] text-[16px] font-semibold max-[1150px]:text-[14px]">آپلود امضاء</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]">نام شرکت:</label>
                                                    <div class="relative flex items-center">
                                                        <input
                                                            disabled
                                                            type="text"
                                                            class="form-input cursor-not-allowed p-3 pe-10 rounded-lg text-[15px] bg-transparent text-[#7e7e7e] max-[1150px]:text-[14px] max-[1500px]:p-2 max-[1150px]:p-2"
                                                            value="تراز سامانه"
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
                                                    </div>
                                                </div>
                                                <div>
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customeBranchName"
                                                        >نام شعبه:<sup class="text-red-500">*</sup></label
                                                    >
                                                    <div
                                                        :class="{ '!border !border-red-400': $userFormValidation.userForm.branchId.$error }"
                                                        class="relative bg-white z-40 h-[47px] max-[1500px]:h-[40px] max-[1150px]:h-[38px] !border !border-gray-200 rounded-lg flex items-center"
                                                    >
                                                        <multiselect
                                                            v-model="userForm.branch"
                                                            @update:model-value="update_selected_branch"
                                                            id="customeBranchName"
                                                            :options="branches"
                                                            class="custom-multiselect relative z-50 max-[1150px]:py-[0px] text-[15px] rounded-lg max-[1150px]:text-[14px] font-semibold"
                                                            :searchable="true"
                                                            :preselect-first="true"
                                                            :allow-empty="false"
                                                            selected-label=""
                                                            label="name"
                                                            track-by="id"
                                                            select-label=""
                                                            deselect-label=""
                                                            placeholder="نام شعبه را انتخاب نمایید"
                                                        ></multiselect>
                                                    </div>
                                                    <template v-if="isSubmitUserForm && $userFormValidation.userForm.branchId.$error">
                                                        <p class="text-danger mt-1 text-xs">لطفا نام شعبه را وارد نمایید.</p>
                                                    </template>
                                                </div>
                                                <div>
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]"
                                                        >سمت:<sup class="text-red-500">*</sup></label
                                                    >
                                                    <div
                                                        :class="[
                                                            { '!border !border-red-400': $userFormValidation.userForm.roleTitle.$error },
                                                            !checkRoles('BRANCH_MANAGER') ? 'cursor-not-allowed !bg-transparent' : 'bg-white',
                                                        ]"
                                                        class="relative bg-white z-40 h-[47px] !border !border-gray-200 max-[1500px]:h-[40px] max-[1150px]:h-[38px] rounded-lg flex items-center"
                                                    >
                                                        <multiselect
                                                            :disabled="!checkRoles('BRANCH_MANAGER')"
                                                            v-model="userForm.roles"
                                                            @update:model-value="update_selected_role"
                                                            id="customePosition"
                                                            :options="rolesList"
                                                            class="custom-multiselect bg-transparent relative z-50 max-[1150px]:py-[0px] text-[15px] rounded-lg max-[1150px]:text-[14px] font-semibold"
                                                            :searchable="true"
                                                            :preselect-first="true"
                                                            :allow-empty="false"
                                                            selected-label=""
                                                            label="persianTitle"
                                                            track-by="title"
                                                            select-label=""
                                                            deselect-label=""
                                                            placeholder="سمت را انتخاب نمایید"
                                                        ></multiselect>
                                                    </div>
                                                    <template v-if="isSubmitUserForm && $userFormValidation.userForm.roleTitle.$error">
                                                        <p class="text-danger mt-1 text-xs">لطفا سمت را وارد نمایید.</p>
                                                    </template>
                                                </div>
                                                <div>
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customPhoneNumber"
                                                        >تلفن همراه:</label
                                                    >
                                                    <div class="relative flex items-center">
                                                        <input
                                                            id="customPhoneNumber"
                                                            type="text"
                                                            class="form-input p-3 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1500px]:p-2 max-[1150px]:p-2"
                                                            v-model.trim="userForm.phoneNumber"
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
                                                                    d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
                                                                    fill="#2375C8"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customEmail"
                                                        >ایمیل:<sup class="text-red-500">*</sup></label
                                                    >
                                                    <div class="relative flex items-center">
                                                        <input
                                                            id="customEmail"
                                                            type="email"
                                                            :class="{ 'border border-red-500': $userFormValidation.userForm.email.$error }"
                                                            class="form-input p-3 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1500px]:p-2 max-[1150px]:p-2"
                                                            v-model.trim="userForm.email"
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
                                                                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                />
                                                                <path
                                                                    d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <template v-if="isSubmitUserForm && $userFormValidation.userForm.email.$error">
                                                        <p class="text-danger mt-1 text-xs">لطفا ایمیل خود را وارد نمایید.</p>
                                                    </template>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel class="w-full h-full">
                                    <contact :contactsList="contactsList" :contact-types="contactTypes" @update-contacts="updateContactsList"></contact>
                                </TabPanel>
                                <TabPanel class="w-full h-full max-[700px]:py-5">
                                    <div class="h-[100%] min-[700px]:h-full max-[700px]:h-full flex justify-center items-center">
                                        <div
                                            class="form-box w-[70%] h-[70%] max-[699px]:overflow-y-auto flex justify-center max-lg:w-[85%] max-[700px]:w-[85%] min-[1024px]:w-[80%]"
                                        >
                                            <form
                                                class="grid grid-cols-2 h-[100%] content-start gap-y-5 max-[700px]:w-full max-[700px]:!h-full overflow-x-hidden max-[699px]:space-y-4 max-[699px]:gap-y-3 gap-x-8 min-[1024px]:w-[100%] max-[700px]:grid-cols-1 min-[700px]:grid-cols-2"
                                                @submit.prevent="submit_user_form()"
                                            >
                                                <div :class="{ 'has-error': $resetPasswordFormValidation.resetPasswordForm.newPassword.$error }">
                                                    <label class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]" for="customNewPassword"
                                                        >رمز عبور جدید:</label
                                                    >
                                                    <div class="relative flex items-center">
                                                        <input
                                                            id="customNewPassword"
                                                            :type="showPassword.newPassword ? 'password' : 'text'"
                                                            @blur="change_password_validation"
                                                            class="form-input p-3 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1150px]:p-2"
                                                            v-model.trim="resetPasswordForm.newPassword"
                                                        />
                                                        <div class="absolute end-5 cursor-pointer">
                                                            <svg
                                                                @click="toggle_password_visibility('newPassword')"
                                                                v-if="showPassword.newPassword"
                                                                class="max-[1150px]:w-[16px] max-[1150px]:h-[16px]"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80852 3.27489 8.70433C4.97196 6.49956 7.81812 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433Z"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                />
                                                                <path
                                                                    d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                />
                                                            </svg>
                                                            <svg
                                                                @click="toggle_password_visibility('newPassword')"
                                                                v-if="!showPassword.newPassword"
                                                                class="max-[1150px]:w-[16px] max-[1150px]:h-[16px]"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    clip-rule="evenodd"
                                                                    d="M22.2954 6.31059C22.6761 6.47376 22.8524 6.91467 22.6893 7.29539L21.9999 6.99995C22.6893 7.29539 22.6894 7.29521 22.6893 7.29539L22.6886 7.29707L22.6875 7.29955L22.6843 7.30691L22.6736 7.33099C22.6646 7.35112 22.6518 7.37934 22.6352 7.41502C22.6019 7.48637 22.5533 7.58769 22.4888 7.7141C22.3599 7.96675 22.1675 8.32063 21.9084 8.73641C21.4828 9.41945 20.8724 10.2776 20.0619 11.1301L21.0303 12.0985C21.3231 12.3913 21.3231 12.8662 21.0303 13.1591C20.7374 13.452 20.2625 13.452 19.9696 13.1591L18.969 12.1585C18.3093 12.7112 17.5528 13.23 16.695 13.6562L17.6286 15.0909C17.8545 15.4381 17.7562 15.9027 17.409 16.1286C17.0618 16.3545 16.5972 16.2562 16.3713 15.909L15.2821 14.2351C14.5028 14.4896 13.659 14.6626 12.7499 14.7246V16.4999C12.7499 16.9142 12.4141 17.2499 11.9999 17.2499C11.5857 17.2499 11.2499 16.9142 11.2499 16.4999V14.7246C10.3689 14.6645 9.54909 14.5002 8.78982 14.2584L7.71575 15.9091C7.48984 16.2562 7.02526 16.3546 6.67807 16.1287C6.33089 15.9027 6.23257 15.4382 6.45847 15.091L7.37089 13.6887C6.5065 13.2666 5.74381 12.7501 5.07842 12.1982L4.11744 13.1592C3.82455 13.4521 3.34968 13.4521 3.05678 13.1592C2.76389 12.8663 2.76389 12.3914 3.05678 12.0985L3.98055 11.1748C3.15599 10.3151 2.53525 9.4465 2.10277 8.75462C1.83984 8.33398 1.6446 7.97559 1.51388 7.71964C1.44848 7.59157 1.3991 7.48889 1.36537 7.41658C1.3485 7.38042 1.33553 7.35183 1.32641 7.33143L1.31562 7.30704L1.31238 7.29959L1.31129 7.29708L1.31088 7.29613C1.31081 7.29595 1.31056 7.29539 1.99992 6.99995L1.31088 7.29613C1.14772 6.91541 1.32376 6.47376 1.70448 6.31059C2.08489 6.14756 2.52539 6.3235 2.68888 6.70357C2.68882 6.70344 2.68894 6.7037 2.68888 6.70357L2.68983 6.70576L2.69591 6.71947C2.7018 6.73267 2.7114 6.75386 2.72472 6.78243C2.75139 6.83959 2.79296 6.9262 2.84976 7.03742C2.96345 7.26004 3.13762 7.58022 3.37472 7.95955C3.85033 8.72042 4.57157 9.70704 5.55561 10.6215C6.42151 11.4263 7.48259 12.1675 8.75165 12.6558C9.70614 13.023 10.7854 13.2499 11.9999 13.2499C13.2416 13.2499 14.342 13.0127 15.3124 12.6308C16.5738 12.1343 17.6277 11.3882 18.4866 10.5819C19.4562 9.67191 20.1668 8.69511 20.6354 7.94315C20.869 7.56825 21.0405 7.25221 21.1525 7.03262C21.2085 6.9229 21.2494 6.83752 21.2757 6.78119C21.2888 6.75304 21.2983 6.73217 21.3041 6.71919L21.31 6.70571L21.3106 6.70451C21.3105 6.70461 21.3106 6.70441 21.3106 6.70451M22.2954 6.31059C21.9147 6.14746 21.4738 6.32399 21.3106 6.70451L22.2954 6.31059ZM2.68888 6.70357C2.68882 6.70344 2.68894 6.7037 2.68888 6.70357V6.70357Z"
                                                                    fill="#1C274C"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    :class="{
                                                        'has-error': $resetPasswordFormValidation.resetPasswordForm.newPasswordConfirmation.$error,
                                                    }"
                                                >
                                                    <label
                                                        class="text-[16px] font-normal text-[#616161] max-[1150px]:text-[14px]"
                                                        for="customNewPasswordConfirmation"
                                                        >تکرار رمز عبور:</label
                                                    >
                                                    <div class="relative flex items-center">
                                                        <input
                                                            id="customNewPasswordConfirmation"
                                                            :type="showPassword.newPasswordConfirmation ? 'password' : 'text'"
                                                            @blur="change_password_validation"
                                                            class="form-input p-3 pe-10 text-[15px] rounded-lg text-[#7e7e7e] max-[1150px]:text-[14px] max-[1150px]:p-2"
                                                            v-model.trim="resetPasswordForm.newPasswordConfirmation"
                                                        />
                                                        <div class="absolute end-5 cursor-pointer">
                                                            <svg
                                                                @click="toggle_password_visibility('newPasswordConfirmation')"
                                                                v-if="showPassword.newPasswordConfirmation"
                                                                class="max-[1150px]:w-[16px] max-[1150px]:h-[16px]"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80852 3.27489 8.70433C4.97196 6.49956 7.81812 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433Z"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                />
                                                                <path
                                                                    d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z"
                                                                    stroke="#2375C8"
                                                                    stroke-width="1.5"
                                                                />
                                                            </svg>
                                                            <svg
                                                                @click="toggle_password_visibility('newPasswordConfirmation')"
                                                                v-if="!showPassword.newPasswordConfirmation"
                                                                class="max-[1150px]:w-[16px] max-[1150px]:h-[16px]"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    clip-rule="evenodd"
                                                                    d="M22.2954 6.31059C22.6761 6.47376 22.8524 6.91467 22.6893 7.29539L21.9999 6.99995C22.6893 7.29539 22.6894 7.29521 22.6893 7.29539L22.6886 7.29707L22.6875 7.29955L22.6843 7.30691L22.6736 7.33099C22.6646 7.35112 22.6518 7.37934 22.6352 7.41502C22.6019 7.48637 22.5533 7.58769 22.4888 7.7141C22.3599 7.96675 22.1675 8.32063 21.9084 8.73641C21.4828 9.41945 20.8724 10.2776 20.0619 11.1301L21.0303 12.0985C21.3231 12.3913 21.3231 12.8662 21.0303 13.1591C20.7374 13.452 20.2625 13.452 19.9696 13.1591L18.969 12.1585C18.3093 12.7112 17.5528 13.23 16.695 13.6562L17.6286 15.0909C17.8545 15.4381 17.7562 15.9027 17.409 16.1286C17.0618 16.3545 16.5972 16.2562 16.3713 15.909L15.2821 14.2351C14.5028 14.4896 13.659 14.6626 12.7499 14.7246V16.4999C12.7499 16.9142 12.4141 17.2499 11.9999 17.2499C11.5857 17.2499 11.2499 16.9142 11.2499 16.4999V14.7246C10.3689 14.6645 9.54909 14.5002 8.78982 14.2584L7.71575 15.9091C7.48984 16.2562 7.02526 16.3546 6.67807 16.1287C6.33089 15.9027 6.23257 15.4382 6.45847 15.091L7.37089 13.6887C6.5065 13.2666 5.74381 12.7501 5.07842 12.1982L4.11744 13.1592C3.82455 13.4521 3.34968 13.4521 3.05678 13.1592C2.76389 12.8663 2.76389 12.3914 3.05678 12.0985L3.98055 11.1748C3.15599 10.3151 2.53525 9.4465 2.10277 8.75462C1.83984 8.33398 1.6446 7.97559 1.51388 7.71964C1.44848 7.59157 1.3991 7.48889 1.36537 7.41658C1.3485 7.38042 1.33553 7.35183 1.32641 7.33143L1.31562 7.30704L1.31238 7.29959L1.31129 7.29708L1.31088 7.29613C1.31081 7.29595 1.31056 7.29539 1.99992 6.99995L1.31088 7.29613C1.14772 6.91541 1.32376 6.47376 1.70448 6.31059C2.08489 6.14756 2.52539 6.3235 2.68888 6.70357C2.68882 6.70344 2.68894 6.7037 2.68888 6.70357L2.68983 6.70576L2.69591 6.71947C2.7018 6.73267 2.7114 6.75386 2.72472 6.78243C2.75139 6.83959 2.79296 6.9262 2.84976 7.03742C2.96345 7.26004 3.13762 7.58022 3.37472 7.95955C3.85033 8.72042 4.57157 9.70704 5.55561 10.6215C6.42151 11.4263 7.48259 12.1675 8.75165 12.6558C9.70614 13.023 10.7854 13.2499 11.9999 13.2499C13.2416 13.2499 14.342 13.0127 15.3124 12.6308C16.5738 12.1343 17.6277 11.3882 18.4866 10.5819C19.4562 9.67191 20.1668 8.69511 20.6354 7.94315C20.869 7.56825 21.0405 7.25221 21.1525 7.03262C21.2085 6.9229 21.2494 6.83752 21.2757 6.78119C21.2888 6.75304 21.2983 6.73217 21.3041 6.71919L21.31 6.70571L21.3106 6.70451C21.3105 6.70461 21.3106 6.70441 21.3106 6.70451M22.2954 6.31059C21.9147 6.14746 21.4738 6.32399 21.3106 6.70451L22.2954 6.31059ZM2.68888 6.70357C2.68882 6.70344 2.68894 6.7037 2.68888 6.70357V6.70357Z"
                                                                    fill="#1C274C"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <template v-if="resetPasswordForm.newPasswordConfirmation && !change_password_validation()">
                                                        <p class="text-danger mt-1">رمز عبور مغایرت دارد.</p>
                                                    </template>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue';
    import contact from '@/components/portal/contact.vue';
    import { checkRoles, checkPermissions } from '@/plugins/rolepermissioncontrol/helperAccess';
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import defaultProfileImage from '../../../../public/assets/images/default-profile.png';
    import Swal from 'sweetalert2';
    import moment from 'moment-jalaali';
    import { taxios } from '@/plugins/taxios';
    import { useVuelidate } from '@vuelidate/core';
    import { useRoute } from 'vue-router';
    import { and, required } from '@vuelidate/validators';
    import 'flatpickr/dist/flatpickr.css';
    import 'flatpickr/dist/flatpickr.css';
    import { useRouter } from 'vue-router';
    import Multiselect from '@suadelabs/vue3-multiselect';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
    import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
    const router = useRouter();
    const route = useRoute();
    let contactsList = ref<Contact[]>([]);
    const isSubmitUserForm = ref(false);
    interface Contact {
        contactType: {
            id: number;
            name: string;
        };
        value: string;
    }
    interface Role {
        persianTitle: string;
        title: string;
        id: number;
    }
    interface IuserForm {
        firstName: string;
        lastName: string;
        dateOfBirth: string;
        signature: string;
        companyName: string;
        branchId: string;
        roleTitle: string;
        phoneNumber: string;
        profileImage: string;
        email: string;
        branch?: object;
        contacts: Contact[];
        roles?: Role[];
        profileImagePreview?: string;
        signaturePreview?: string;
    }
    interface IresetPasswordForm {
        newPassword: string;
        newPasswordConfirmation: string;
    }
    let userForm = ref<IuserForm>({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        signature: '',
        companyName: '',
        branchId: '',
        roleTitle: '',
        phoneNumber: '',
        branch: {},
        profileImage: '',
        email: '',
        contacts: [],
        roles: [],
    });
    let resetPasswordForm = ref<IresetPasswordForm>({
        newPassword: '',
        newPasswordConfirmation: '',
    });
    const userFormRules = {
        userForm: {
            firstName: { required },
            lastName: { required },
            dateOfBirth: {},
            signature: {},
            companyName: {},
            branchId: { required },
            roleTitle: { required },
            phoneNumber: {},
            profileImage: {},
            branch: {},
            email: { required },
            contacts: {},
        },
    };
    const resetPasswordFormRules = {
        resetPasswordForm: {
            newPassword: {},
            newPasswordConfirmation: {},
        },
    };

    let showPassword = ref({
        newPassword: true,
        newPasswordConfirmation: true,
    });

    const $userFormValidation = useVuelidate(userFormRules, { userForm });
    const $resetPasswordFormValidation = useVuelidate(resetPasswordFormRules, { resetPasswordForm });

    const submit_user_form = async () => {
        isSubmitUserForm.value = true;
        $userFormValidation.value.userForm.$touch();
        $resetPasswordFormValidation.value.resetPasswordForm.$touch();

        if ($userFormValidation.value.userForm.$invalid || $resetPasswordFormValidation.value.resetPasswordForm.$invalid) {
            isSubmitUserForm.value = true;
            return;
        }
        try {
            if (is_password_filled()) {
                await reset_password();
            }
            await edit_user_data();
        } catch (error: any) {
            showAlert(error.response.data.info[0].message.fa);
        } finally {
            isSubmitUserForm.value = false;
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

    const go_back_portal = () => {
        router.back();
    };

    let _tempUserForm = <IuserForm>{};
    const cancel = () => {
        userForm.value = { ..._tempUserForm };
        isSubmitUserForm.value = false;
        router.back();
    };

    const upload_image = (e) => {
        const file = e.target.files[0];
        userForm.value.profileImage = file;
        userForm.value.profileImagePreview = URL.createObjectURL(file);
    };

    const upload_signature = (e) => {
        const file = e.target.files[0];
        userForm.value.signature = file;
        userForm.value.signaturePreview = URL.createObjectURL(file);
    };

    const fullName = computed(() => {
        const firstName = userForm.value.firstName || '';
        const lastName = userForm.value.lastName || '';
        return `${firstName} ${lastName}`.trim();
    });

    const truncatedName = computed(() => {
        if (fullName.value.length > 15) {
            return `${fullName.value.slice(0, 12)}...`;
        }
        return fullName.value;
    });

    let branches = ref([]);
    const fetch_branches = () => {
        taxios()
            ?.get('/branches')
            .then((res) => {
                branches.value = res.data.content;
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    let rolesList = ref<Role[]>([]);
    const fetch_roles = () => {
        taxios()
            ?.get('/roles')
            .then((res) => {
                rolesList.value = res.data.content;
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    const toEnglishDigits = (str) => {
        if (str) {
            return str.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
        }
    };

    const fetch_user_data = () => {
        taxios()
            ?.get('/users/' + route.params.Id)
            .then((res) => {
                const user = res.data.content.user;
                let {
                    firstName,
                    lastName,
                    dateOfBirth,
                    signature,
                    companyName,
                    branchId,
                    roles,
                    roleTitle,
                    phoneNumber,
                    profileImage,
                    email,
                    branch,
                    contacts,
                } = user;

                userForm.value = {
                    firstName,
                    lastName,
                    dateOfBirth: toEnglishDigits(dateOfBirth),
                    signature,
                    companyName,
                    branchId,
                    roleTitle,
                    roles,
                    phoneNumber,
                    profileImage,
                    email,
                    branch,
                    contacts: contacts.map(({ value, contactType, contactTypeId }) => ({ value, contactType, contactTypeId })),
                };

                contactsList.value = userForm.value.contacts;
                userForm.value.branchId = user.branch.id.toString();
                _tempUserForm = { ...userForm.value };

                userForm.value.roles = { persianTitle: userForm.value.roles[0] };
                let TranslatedRole = rolesList.value.find((role) => {
                    return role.title == userForm.value.roles?.persianTitle;
                });
                userForm.value.roles = TranslatedRole;
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    const convertShamsiToGregorian = (shamsiDate) => {
        if (shamsiDate) {
            const [year, month, day] = shamsiDate.split('/').map(Number);
            const gregorianDate = moment(`${year}/${month}/${day}`, 'jYYYY/jMM/jDD').format('YYYY/MM/DD');
            return gregorianDate;
        }
    };

    const edit_user_data = async () => {
        return new Promise((resolv, reject) => {
            let _contacts: { contactTypeId: number; value: string }[] = [];
            userForm.value.contacts.forEach((contact) => {
                let _contact = {
                    contactTypeId: contact.contactType.id,
                    value: contact.value,
                };
                _contacts.push(_contact);
            });

            const formData = new FormData();
            const form = { ...userForm.value };
            form.dateOfBirth = convertShamsiToGregorian(form.dateOfBirth);
            delete form.branch;
            delete form.roles;
            for (let [key, value] of Object.entries(form)) {
                if (key === 'contacts') {
                    value = JSON.stringify(_contacts);
                }
                if (value == null || value == undefined) {
                    value = '';
                }
                formData.append(key, value);
            }

            taxios(import.meta.env.VITE_MAIN_URL, 'multipart/form-data')
                ?.put('/users/' + route.params.Id, formData)
                .then((res) => {
                    const user = res.data.content;
                    let {
                        firstName,
                        lastName,
                        dateOfBirth,
                        signature,
                        companyName,
                        branchId,
                        roleTitle,
                        roles,
                        phoneNumber,
                        profileImage,
                        email,
                        branch,
                        contacts,
                    } = user;

                    userForm.value = {
                        firstName,
                        lastName,
                        dateOfBirth,
                        signature,
                        companyName,
                        branchId,
                        roleTitle,
                        roles,
                        phoneNumber,
                        profileImage,
                        email,
                        branch,
                        contacts,
                    };

                    _tempUserForm = { ...userForm.value };
                    fetch_user_data();
                    resolv('ok');
                    showAlert('تغییرات با موفقیت ذخیره شد.');
                })
                .catch((error) => {
                    if (error?.response?.data?.info?.[0]?.message) {
                        showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                    }
                });
        });
    };

    const update_selected_branch = (data) => {
        userForm.value.branchId = data.id.toString();
    };

    const update_selected_role = (data) => {
        userForm.value.roleTitle = data.title.toString();
    };

    const updateContactsList = (newContacts) => {
        userForm.value.contacts = newContacts;
        contactsList.value = newContacts;
    };

    let contactTypes = ref([]);
    const fetch_contactTypes = () => {
        taxios(import.meta.env.VITE_MAIN_URL)
            ?.get('/contactTypes')
            .then((res) => {
                contactTypes.value = res.data.content;
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    const change_password_validation = () => {
        if (!resetPasswordForm.value.newPassword && !resetPasswordForm.value.newPasswordConfirmation) {
            return true;
        }
        if (!resetPasswordForm.value.hasOwnProperty('newPasswordConfirmation')) {
            return false;
        }
        return resetPasswordForm.value.newPassword === resetPasswordForm.value.newPasswordConfirmation;
    };

    const is_password_filled = () => {
        for (const value of Object.values(resetPasswordForm.value)) {
            if (value && value.length > 0) {
                reset_password();
                return true;
            }
        }
        return false;
    };

    const reset_password = () => {
        return new Promise((resolve, reject) => {
            taxios()
                ?.post('/forceResetPassword/' + route.params.Id, resetPasswordForm.value)
                .then((res) => {
                    resetPasswordForm.value = res.data.content;
                    resolve('ok');
                })
                .catch((error) => {
                    if (error?.response?.data?.info?.[0]?.message) {
                        showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                    }
                    reject(error);
                });
        });
    };

    const toggle_password_visibility = (field) => {
        showPassword.value[field] = !showPassword.value[field];
    };

    const handleImageError = (event: Event) => {
        const target = event.target as HTMLImageElement;
        if (target) {
            target.src = defaultProfileImage;
        }
    };

    onMounted(() => {
        fetch_roles();
        fetch_branches();
        fetch_user_data();
        fetch_contactTypes();
    });
</script>

<style>
    @media (max-width: 1150px) {
        .custom-multiselect .multiselect__single {
            font-size: 14px !important;
        }
    }
    @media (max-width: 900px) {
        .multiselect__tags {
            font-size: 10px !important;
            width: max-content !important;
        }
    }
    @media (min-width: 900px) {
        .multiselect__tags {
            font-size: 14px !important;
        }
    }
    .pdp-icon {
        display: none;
    }
    .pdp {
        width: 100%;
    }
    .selected-tab:hover a {
        background-color: transparent !important;
    }
    .custom-multiselect[role='combobox'] {
        border: none !important;
    }
    .multiselect__single {
        background-color: inherit;
        font-size: 12px !important;
    }
    .multiselect--disabled {
        background-color: transparent;
    }
    .custom-multiselect.multiselect {
        color: #7e7e7e !important;
    }
    .custom-color.custom-multiselect {
        color: #424141 !important;
    }
    .multiselect__tags {
        background-color: inherit !important;
        border: none !important;
    }
    .multiselect__select {
        left: 10px !important;
        background-color: inherit !important;
        height: 95% !important;
        top: 0 !important;
    }
    .custom-multiselect .multiselect__single {
        font-size: 15px !important;
    }
    .multiselect__content-wrapper {
        height: 140px;
    }
    .tab:focus svg {
        filter: invert(23%) sepia(48%) saturate(7069%) hue-rotate(200deg) brightness(91%) contrast(92%);
    }
    .custom-multiselect[role='combobox'] {
        border: none !important;
    }
    .vpd-icon-btn {
        display: none !important;
    }
    .vpd-input-group input {
        border: none !important;
    }
</style>
