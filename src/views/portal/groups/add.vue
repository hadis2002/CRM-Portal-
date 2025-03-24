<template>
    <div
        dir="rtl"
        class="main-container bg-[linear-gradient(117deg,_#e7f0f9_-5.98%,_#efefef_107.97%)] overflow-hidden h-screen flex justify-center items-center"
    >
        <div
            class="inner-container shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] w-[100%] flex flex-col bg-[#FAFAFA] h-full min-[700px]:flex-row min-[700px]:h-[72%] min-[700px]:rounded-3xl min-[700px]:w-[85%] min-[1024px]:w-[75%] min-[1280px]:w-[70%] min-[1280px]:h-[75%]"
        >
            <div
                class="right-box z-50 shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] flex flex-col items-cente bg-white max-[700px]:h-[30%] min-[700px]:w-[30%] min-[700px]:h-full min-[700px]:rounded-s-3xl min-[1024px]:w-[25%]"
            >
                <div v-if="currentStep == 1" class="flex flex-col justify-around h-full p-8">
                    <div class="flex flex-col">
                        <label>عنوان گروه: <b class="text-red-600">*</b></label>

                        <div class="relative flex items-center w-full">
                            <input
                                v-model.trim="title"
                                type="text"
                                class="border border-gray-300 w-full ps-4 py-3 pe-10 rounded-lg max-[800px]:py-1.5"
                                placeholder="عنوان گروه را وارد کنید"
                            />
                            <div class="absolute end-4">
                                <svg
                                    class="max-[800px]:w-4 max-[800px]:h-4 max-[1400px]:w-4 max-[1400px]:h-4"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.93417 2C7.95604 2 7.97799 2 8 2L16.0658 2C16.9523 1.99995 17.7161 1.99991 18.3278 2.08215C18.9833 2.17028 19.6117 2.36902 20.1213 2.87868C20.631 3.38835 20.8297 4.0167 20.9179 4.67221C21.0001 5.28388 21.0001 6.0477 21 6.9342L21 7.95C21 8.50229 20.5523 8.95 20 8.95C19.4477 8.95 19 8.50229 19 7.95V7.00001C19 6.02893 18.9979 5.40122 18.9357 4.93871C18.8774 4.50497 18.7832 4.36902 18.7071 4.2929C18.631 4.21677 18.495 4.12263 18.0613 4.06431C17.5988 4.00213 16.9711 4 16 4H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V4H8C7.02893 4 6.40122 4.00213 5.93871 4.06431C5.50497 4.12263 5.36902 4.21677 5.2929 4.2929C5.21677 4.36902 5.12263 4.50497 5.06431 4.93871C5.00213 5.40122 5 6.02893 5 7.00001V7.95C5 8.50229 4.55229 8.95 4 8.95C3.44772 8.95 3 8.50229 3 7.95V7.00001C3 6.97799 3 6.95604 3 6.93418C2.99995 6.04769 2.99991 5.28387 3.08215 4.67221C3.17028 4.0167 3.36902 3.38835 3.87868 2.87868C4.38835 2.36902 5.0167 2.17028 5.67221 2.08215C6.28387 1.99991 7.04769 1.99995 7.93417 2Z"
                                        fill="#0985AA"
                                    />
                                    <path d="M7 21H17" stroke="#0985AA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label>برنامه ها: <b class="text-red-600">*</b></label>
                        <div class="flex flex-col bg-[#f7b10cd5] rounded-md">
                            <span
                                @click="toggleApp(app.name)"
                                v-for="app in apps"
                                :key="app.name"
                                class="flex justify-center items-center p-3 rounded-md custom-color-second cursor-pointer"
                                :class="app.name == selectedApp ? 'custom-bg-first' : ''"
                                >{{ app.title }}</span
                            >
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center">
                        <button
                            class="px-4 py-2 rounded-md custom-border-color-second custom-color-second"
                            @click="
                                () => {
                                    router.push({ name: 'groups-index', replace: true });
                                }
                            "
                        >
                            انصراف
                        </button>
                        <button
                            class="px-4 py-2 rounded-md custom-color-second custom-bg-first"
                            @click="
                                () => {
                                    if (title.trim().length == 0) {
                                        showToast('لطفا عنوان گروه را مشخص کنید');
                                        return;
                                    }
                                    currentStep = 2;
                                }
                            "
                        >
                            ادامه
                        </button>
                    </div>
                </div>

                <div v-if="currentStep == 2" class="flex flex-col justify-around h-full p-8">
                    <div class="flex flex-col">
                        <span class="text-lg justify-center flex mb-3 items-center"
                            ><span class="text-sm ml-2 text-gray-400">نام گروه : </span>
                            <p :title="title" class="cursor-pointer">{{ title.length > 28 ? title.slice(0, 25) + '...' : title }}</p>
                        </span>
                        <label class="custom-color-second">انتخاب کاربران:</label>
                        <div class="relative flex items-center w-full">
                            <input
                                @input="
                                    ($event) => {
                                        if ($event.target.value.toString().length == 0) {
                                            filteredUsers = [];
                                        }
                                    }
                                "
                                @keyup.enter="
                                    ($event) => {
                                        if ($event.target.value.toString().length == 0) {
                                            return;
                                        }
                                        filteredUsers = users.filter((item) => {
                                            return item.fullName.includes($event.target.value);
                                        });
                                    }
                                "
                                type="text"
                                class="border border-gray-300 w-full ps-4 py-3 rounded-lg max-[800px]:py-1.5"
                                placeholder="جستجو"
                            />
                            <div class="absolute end-4">
                                <svg
                                    class="svg-icon"
                                    style="width: 24px; height: 24px; vertical-align: middle; fill: currentColor; overflow: hidden"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M443.904 887.808C199.104 887.808 0 688.704 0 443.904S199.104 0 443.904 0s443.904 199.104 443.904 443.904-199.104 443.904-443.904 443.904z m0-835.584a392.064 392.064 0 0 0-391.68 391.68 392.128 392.128 0 0 0 391.68 391.744 392.192 392.192 0 0 0 391.744-391.744A392.128 392.128 0 0 0 443.904 52.224z"
                                        fill="#4D4D4D"
                                    />
                                    <path
                                        d="M992.32 1018.368a27.008 27.008 0 0 1-18.56-7.552l-235.008-235.136a26.24 26.24 0 0 1 0-36.928 26.24 26.24 0 0 1 36.928 0l235.136 235.008a26.304 26.304 0 0 1 0 37.056 27.2 27.2 0 0 1-18.496 7.552z"
                                        fill="#4D4D4D"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="flex max-h-64 overflow-auto flex-col rounded-md border border-[#e0e6ed] dark:border-[#1b2e4b] mt-8">
                            <div
                                v-for="user in generateUsersList"
                                @dblclick="
                                    () => {
                                        dragUserStart(user);
                                        dropUser();
                                    }
                                "
                                :key="user.id"
                                @dragstart="
                                    () => {
                                        dragUserStart(user);
                                    }
                                "
                                draggable="true"
                                class="flex cursor-pointer border-b border-[#e0e6ed] dark:border-[#1b2e4b] px-2 py-1.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10"
                            >
                                <div class="ltr:mr-3 rtl:ml-3">
                                    <img
                                        @error="
                                            ($event) => {
                                                fixImageError($event);
                                            }
                                        "
                                        :src="user.profileImage ? user.profileImage : defaultProfile"
                                        alt=""
                                        class="rounded-full w-10 h-10 object-cover"
                                    />
                                </div>
                                <div class="flex items-center custom-color-second">
                                    {{ user.fullName }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center">
                        <button
                            class="px-4 py-2 rounded-md custom-border-color-second custom-color-second"
                            @click="
                                () => {
                                    currentStep = 1;
                                }
                            "
                        >
                            مرحله قبل
                        </button>
                        <button
                            class="px-4 py-2 rounded-md custom-color-second custom-bg-first"
                            @click="
                                () => {
                                    if (selectedUsers.length == 0) {
                                        showToast('لطفا اعضای گروه را مشخص نمایید');
                                        return;
                                    }
                                    saveGroup();
                                }
                            "
                        >
                            {{ route.params.Id ? 'ذخیره تغییرات' : 'ایجاد' }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="left-box w-[77%] max-[700px]:w-full max-[700px]:h-[70%] min-[700px]:w-[70%] min-[700px]:h-[100%] min-[1024px]:w-[75%]">
                <div class="h-full md:rounded-l-3xl flex flex-col items-center justify-between shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] w-full">
                    <div class="h-[80px] w-full flex justify-end pe-8 shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] bg-white md:rounded-tl-3xl">
                        <button
                            v-if="currentStep == 1"
                            class="ml-10 cursor-pointer"
                            @click="
                                () => {
                                    showModalMultiAction = true;
                                }
                            "
                        >
                            عملیات چندتایی
                        </button>
                        <button
                            v-if="currentStep == 1"
                            class="ml-10 cursor-pointer"
                            @click="
                                () => {
                                    modelActions = orgModelActions;
                                }
                            "
                        >
                            حذف مجوز ها
                        </button>
                        <button @click="go_back">
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <div v-if="currentStep == 1 && actions.length" class="w-full h-[8%] flex gap-10 justify-center mt-[2%]">
                        <div
                            v-for="action in actions"
                            :key="action.id"
                            class="flex gap-2 items-center justify-center cursor-pointer bg-[#FFFBF3] custom-border-color-first rounded-3xl px-4"
                            :draggable="true"
                            @dragstart="
                                () => {
                                    dragStart(action);
                                }
                            "
                        >
                            <component :is="actionComponentIcon[action['title']]['icon']" />
                            <span class="text-lg custom-color-second">{{ action.PersianTitle }}</span>
                        </div>
                    </div>
                    <div v-if="currentStep == 1" class="overflow-auto h-[82%] w-full flex items-center">
                        <div
                            v-if="Object.keys(modelActions).length"
                            class="overflow-y-auto h-[88%] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 gap-6"
                        >
                            <div
                                v-for="[modelKey, modelData] in Object.entries(modelActions[selectedApp])"
                                :key="modelKey"
                                class="item-perms rounded-3xl rounded-b-3xl"
                                @dragover.prevent
                                @drop="
                                    () => {
                                        drop(modelKey);
                                    }
                                "
                            >
                                <div class="flex flex-col">
                                    <span
                                        class="text-lg custom-color-second custom-bg-first p-4 rounded-t-3xl text-center flex justify-center items-center gap-6"
                                    >
                                        {{ modelData['title'] }}
                                        <span
                                            @click="
                                                () => {
                                                    removePerms(modelKey);
                                                }
                                            "
                                        >
                                            <component :is="IconRestore" class="cursor-pointer" />
                                        </span>
                                    </span>
                                    <span
                                        v-if="Array.isArray(modelData['perms']) && modelData['perms'].length"
                                        class="grid grid-cols-2 gap-3 px-3 py-4 overflow-y-auto"
                                    >
                                        <div
                                            v-for="perm in modelData['perms']"
                                            :key="perm"
                                            class="flex gap-1 items-center justify-center rounded-3xl py-2 cursor-pointer"
                                            :class="actionComponentIcon[perm]['class']"
                                        >
                                            <component @click="removePerm(selectedApp, modelKey, perm)" :is="IconX" :size="17" />
                                            <span class="text-sm">
                                                {{ actionsObject[perm]['PersianTitle'] }}
                                            </span>
                                        </div>
                                    </span>
                                    <span class="flex justify-center items-center gap-2 p-8" v-else>
                                        <component :is="IconEye" />
                                        <span class="text-lg custom-color-second">بدون دسترسی</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="currentStep == 2" class="flex w-full p-8 justify-between h-full">
                        <div class="flex flex-col w-[40%]">
                            <label class="custom-color-second">اعضای انتخاب شده:</label>
                            <div class="relative flex items-center w-[100%]">
                                <input
                                    @input="
                                        ($event) => {
                                            if ($event.target.value.toString().length == 0) {
                                                filteredSelectedUsers = [];
                                            }
                                        }
                                    "
                                    @keyup.enter="
                                        ($event) => {
                                            if ($event.target.value.toString().length == 0) {
                                                return;
                                            }
                                            filteredSelectedUsers = selectedUsers.filter((item) => {
                                                return item.fullName.includes($event.target.value);
                                            });
                                        }
                                    "
                                    type="text"
                                    class="border border-gray-300 w-[100%] ps-4 py-3 rounded-lg"
                                    placeholder="جستجو"
                                />
                                <div class="absolute end-4">
                                    <svg
                                        class="svg-icon"
                                        style="width: 24px; height: 24px; vertical-align: middle; fill: currentColor; overflow: hidden"
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M443.904 887.808C199.104 887.808 0 688.704 0 443.904S199.104 0 443.904 0s443.904 199.104 443.904 443.904-199.104 443.904-443.904 443.904z m0-835.584a392.064 392.064 0 0 0-391.68 391.68 392.128 392.128 0 0 0 391.68 391.744 392.192 392.192 0 0 0 391.744-391.744A392.128 392.128 0 0 0 443.904 52.224z"
                                            fill="#4D4D4D"
                                        />
                                        <path
                                            d="M992.32 1018.368a27.008 27.008 0 0 1-18.56-7.552l-235.008-235.136a26.24 26.24 0 0 1 0-36.928 26.24 26.24 0 0 1 36.928 0l235.136 235.008a26.304 26.304 0 0 1 0 37.056 27.2 27.2 0 0 1-18.496 7.552z"
                                            fill="#4D4D4D"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                ref="dragZoneUser"
                                @dragover.prevent
                                @drop="dropUser"
                                class="flex w-full min-w-full h-96 min-h-96 max-h-96 overflow-auto flex-col rounded-md border-4 border-[#e0e6ed] border-dotted mt-8"
                            >
                                <div v-if="selectedUsers.length">
                                    <div
                                        v-for="user in generateSelectedUsers"
                                        :key="user.id"
                                        class="flex items-center cursor-pointer border-b border-[#e0e6ed] dark:border-[#1b2e4b] px-2 py-1.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10"
                                    >
                                        <div class="ltr:mr-3 rtl:ml-3">
                                            <img
                                                @error="
                                                    ($event) => {
                                                        fixImageError($event);
                                                    }
                                                "
                                                :src="user.profileImage ? user.profileImage : defaultProfile"
                                                alt=""
                                                class="rounded-full w-10 h-10 object-cover"
                                            />
                                        </div>
                                        <div class="flex items-center custom-color-second">
                                            {{ user.email }}
                                        </div>
                                        <div
                                            class="cursor-pointer mr-auto ml-2"
                                            @click="
                                                () => {
                                                    selectedUsers = selectedUsers.filter((item) => item.id.toString() != user.id.toString());
                                                    filteredSelectedUsers = filteredSelectedUsers.filter((item) => item.id.toString() != user.id.toString());
                                                }
                                            "
                                        >
                                            <component class="text-red-600" :is="IconTrash" />
                                        </div>
                                    </div>
                                </div>

                                <div v-else class="flex justify-center items-center w-full h-full">کاربران را در این قسمت اضافه کنید</div>
                            </div>
                        </div>
                        <div class="flex flex-col w-[47%]">
                            <div class="space-y-2 mt-4">
                                <div v-for="appName in Object.keys(modelActions)" :key="appName" class="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
                                    <div
                                        class="py-1 px-3 items-center w-full flex justify-between cursor-pointer"
                                        @click="accordians === item ? (accordians = null) : (accordians = item)"
                                    >
                                        <span class="text-gray-600 text-lg">{{ apps.find((item) => item.name == appName).title }}</span>
                                        <span v-if="accordians == item">
                                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_4413_44969)">
                                                    <rect x="37" y="34" width="30" height="30" rx="15" transform="rotate(-180 37 34)" fill="#F7AF0C" />
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M21.4962 15.1926C21.7861 14.9358 22.2139 14.9358 22.5038 15.1926L29.7296 21.5926C30.0543 21.8801 30.0919 22.3852 29.8136 22.7206C29.5353 23.0561 29.0466 23.0949 28.722 22.8074L22 16.8537L15.278 22.8074C14.9534 23.0949 14.4647 23.0561 14.1864 22.7206C13.9081 22.3852 13.9457 21.8801 14.2704 21.5926L21.4962 15.1926Z"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id="filter0_d_4413_44969"
                                                        x="0"
                                                        y="0"
                                                        width="42"
                                                        height="42"
                                                        filterUnits="userSpaceOnUse"
                                                        color-interpolation-filters="sRGB"
                                                    >
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dx="-1" dy="2" />
                                                        <feGaussianBlur stdDeviation="3" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4413_44969" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4413_44969" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span v-else>
                                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_4504_6859)">
                                                    <rect x="7" y="4" width="30" height="30" rx="15" fill="#F7AF0C" />
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M22.5038 22.8074C22.2139 23.0642 21.7861 23.0642 21.4962 22.8074L14.2704 16.4074C13.9457 16.1199 13.9081 15.6148 14.1864 15.2794C14.4647 14.9439 14.9534 14.9051 15.278 15.1926L22 21.1463L28.722 15.1926C29.0466 14.9051 29.5353 14.9439 29.8136 15.2794C30.0919 15.6148 30.0543 16.1199 29.7296 16.4074L22.5038 22.8074Z"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id="filter0_d_4504_6859"
                                                        x="0"
                                                        y="0"
                                                        width="42"
                                                        height="42"
                                                        filterUnits="userSpaceOnUse"
                                                        color-interpolation-filters="sRGB"
                                                    >
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dx="-1" dy="2" />
                                                        <feGaussianBlur stdDeviation="3" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4504_6859" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4504_6859" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <vue-collapsible :isOpen="accordians === item">
                                        <div class="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b] flex flex-col">
                                            <div v-for="modelData in Object.values(modelActions[appName])" :key="modelData.id" class="flex gap-2">
                                                <template v-if="modelData.perms.length">
                                                    <span class="text-gray-500 text-lg">{{ modelData.title }}:</span>
                                                    <span class="text-gray-400 text-lg">{{
                                                        modelData.perms.length == actions.length
                                                            ? 'کامل'
                                                            : actions
                                                                  .filter((item) => modelData.perms.includes(item.title))
                                                                  .map((item) => item.PersianTitle)
                                                                  .join(',')
                                                    }}</span>
                                                </template>
                                            </div>
                                        </div>
                                    </vue-collapsible>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TransitionRoot v-if="currentStep == 1" appear :show="showModalMultiAction" as="template">
        <Dialog as="div" @close="showModalMultiAction = false" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <DialogOverlay class="fixed inset-0 bg-[black]/60" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto w-1/3 m-auto">
                <div class="flex min-h-full items-center justify-center px-4 py-8">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel class="panel border-0 px-4 pt-10 rounded-lg overflow-hidden w-full text-black dark:text-white-dark">
                            <div class="flex flex-col p-2 overflow-auto">
                                <div class="flex items-center">
                                    <span class="flex gap-2 w-2/4 items-center justify-center">
                                        <input
                                            type="checkbox"
                                            @change="
                                                ($event) => {
                                                    toggleSelectedOptions($event, 'action');
                                                }
                                            "
                                        />
                                        <span>انتخاب همه مجوز ها</span>
                                    </span>
                                    <multiselect
                                        v-model="selectedOptionsAction"
                                        :options="Object.keys(actionComponentIcon)"
                                        class="w-2/4"
                                        :searchable="true"
                                        :multiple="true"
                                        placeholder="انتخاب کنید"
                                        :custom-label="(option) => actionComponentIcon[option]?.PersianTitle || option"
                                        selected-label=""
                                        select-label=""
                                        deselect-label=""
                                    ></multiselect>
                                </div>
                                <div class="flex items-center mt-6">
                                    <span class="flex gap-2 w-2/4 items-center justify-center">
                                        <input
                                            type="checkbox"
                                            @change="
                                                ($event) => {
                                                    toggleSelectedOptions($event, 'model');
                                                }
                                            "
                                        />
                                        <span>انتخاب همه مدل ها</span>
                                    </span>
                                    <multiselect
                                        v-model="selectedOptionsModel"
                                        :options="Object.keys(modelActions[selectedApp])"
                                        class="w-2/4"
                                        :searchable="true"
                                        :multiple="true"
                                        placeholder="انتخاب کنید"
                                        selected-label=""
                                        select-label=""
                                        :custom-label="option => modelActions[selectedApp]?.[option]?.title || option"
                                        deselect-label=""
                                    ></multiselect>
                                </div>
                                <div class="flex w-[100%] justify-center my-6 gap-4">
                                    <button @click="handleCancelModal" class="bg-warning text-white text-sm px-6 py-2 rounded-md">انصراف</button>
                                    <button @click="applyActionsToModel" class="bg-green-600 text-white text-sm px-6 py-2 rounded-md">تایید</button>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
    import IconEdit from '@/components/icon/icon-edit.vue';
    import IconEye from '@/components/icon/icon-eye.vue';
    import IconFile from '@/components/icon/icon-file.vue';
    import IconPlus from '@/components/icon/icon-plus.vue';
    import IconTrash from '@/components/icon/icon-trash.vue';
    import Multiselect from '@suadelabs/vue3-multiselect';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
    import IconX from '@/components/icon/icon-x.vue';
    import { computed, onMounted, ref } from 'vue';
    import { taxios } from '@/plugins/taxios';
    import IconRestore from '@/components/icon/icon-restore.vue';
    import VueCollapsible from 'vue-height-collapsible/vue3';
    import defaultProfile from '@/assets/images/profile-user-svgrepo-com.svg';
    import Swal from 'sweetalert2';
    import { useRoute, useRouter } from 'vue-router';
    const route = useRoute();
    const router = useRouter();
    const users = ref([]);
    const accordians = ref(null);
    const title = ref('');
    const filteredUsers = ref([]);
    const filteredSelectedUsers = ref([]);
    const currentStep = ref(1);
    const selectedOptionsAction = ref([]);
    const selectedOptionsModel = ref([]);
    const selectedApp = ref('crm');
    const selectedUsers = ref([]);
    const dragZoneUser = ref(null);
    const orgModelActions = ref({});
    const apps = ref([]);
    let dragedAction = null;
    let dragedUserAction = null;
    const actionComponentIcon = {
        show: { icon: IconEye, class: 'perm-show', PersianTitle: 'نمایش' },
        create: { icon: IconPlus, class: 'perm-create', PersianTitle: 'ایجاد' },
        edit: { icon: IconEdit, class: 'perm-edit', PersianTitle: 'ویرایش' },
        delete: { icon: IconTrash, class: 'perm-delete', PersianTitle: 'حذف' },
        print: { icon: IconFile, class: 'perm-print', PersianTitle: 'چاپ' },
    };
    const actions = ref([]);
    const actionsObject = computed(() => {
        let ret = [];
        if (actions.value.length > 0) {
            ret = actions.value.reduce((acc, item) => {
                acc[item.title] = item;
                return acc;
            }, {});
        }
        return ret;
    });

    const go_back = () => {
        router.back();
    };

    let showModalMultiAction = ref(false);
    let modelActions = ref({});
    const toggleApp = (key) => {
        if (!Object.keys(modelActions.value).includes(key)) {
            showToast('برای زیرسیستم ' + apps.value.find((item) => item.name == key).title + ' اطلاعاتی یافت نشد');
            return;
        }
        selectedApp.value = key;
    };

    const checkModelActionsExists = (app, model) => {
        let ret = true;
        if (!(app in modelActions.value)) {
            ret = false;
        }
        if (!(model in modelActions.value[app])) {
            ret = false;
        }

        return ret;
    };

    const removePerm = (app, model, perm) => {
        if (!checkModelActionsExists(app, model)) {
            return;
        }
        modelActions.value[app][model]['perms'] = modelActions.value[app][model]['perms'].filter((item) => item != perm);
    };

    const dragStart = (action) => {
        dragedAction = action;
    };
    const dragUserStart = (user) => {
        dragedUserAction = user;
    };
    const drop = (model) => {
        if (!checkModelActionsExists(selectedApp.value, model)) {
            return;
        }

        if (!modelActions.value[selectedApp.value][model].perms.includes(dragedAction.title)) {
            modelActions.value[selectedApp.value][model].perms.push(dragedAction.title);
        }
    };
    const dropUser = () => {
        const existsUser = selectedUsers.value.find((item) => item.id == dragedUserAction.id);
        if (!existsUser) {
            selectedUsers.value.unshift(dragedUserAction);
            dragZoneUser.value.scrollTop = 0;
        }
    };
    const toggleSelectedOptions = (e, type) => {
        if (type == 'action') {
            selectedOptionsAction.value = e.target.checked ? Object.keys(actionComponentIcon) : [];
        } else if (type == 'model') {
            selectedOptionsModel.value = e.target.checked ? Object.keys(modelActions.value[selectedApp.value]) : [];
        }
    };

    const applyActionsToModel = () => {
        if (selectedOptionsAction.value.length > 0 && selectedOptionsModel.value.length > 0) {
            let current = modelActions.value[selectedApp.value];
            for (const [k, v] of Object.entries(current)) {
                if (!selectedOptionsModel.value.includes(k)) {
                    continue;
                }
                let allPerms = Array.from(new Set([...v.perms, ...selectedOptionsAction.value]));
                v.perms = allPerms;
            }
        }
        showModalMultiAction.value = false;
        removeSelectedOptions();
    };

    const removeSelectedOptions = () => {
        selectedOptionsAction.value = [];
        selectedOptionsModel.value = [];
    };

    const handleCancelModal = () => {
        removeSelectedOptions();
        showModalMultiAction.value = false;
    };

    const removePerms = (model) => {
        if (!checkModelActionsExists(selectedApp.value, model)) {
            return;
        }
        modelActions.value[selectedApp.value][model].perms = [];
    };

    const initUsers = async () => {
        await taxios()
            ?.get('/users')
            .then((res) => {
                users.value = res.data.content.map((item) => {
                    return { id: item.id, email: item.email, profileImage: item.profileImage, fullName: `${item.firstName} ${item.lastName}` };
                });
            });
    };

    const initApps = async () => {
        await taxios()
            .get('/subsystems')
            .then((res) => {
                apps.value = res.data.content;
            });
    };

    const initActions = async () => {
        await taxios()
            .get('/actions')
            .then((res) => {
                actions.value = res.data.content;
            });
    };

    const modelAppName = {};

    const initModelActions = async () => {
        let _tmp = {};
        await taxios()
            .get('/permissions')
            .then((res) => {
                res.data.content.forEach((item) => {
                    const appName = item['subsystem']['name'];
                    const modelName = item['model_name'];
                    const modelTitle = item['model_title'];
                    const actionName = item['action_name'];
                    if (appName in _tmp) {
                        if (modelName in _tmp[appName]) {
                            _tmp[appName][modelName]['perms'] = [];
                        } else {
                            _tmp[appName][modelName] = {
                                id: item['id'],
                                title: modelTitle,
                                perms: [],
                            };
                        }
                    } else {
                        _tmp[appName] = {};
                        _tmp[appName][modelName] = {
                            id: item['id'],
                            title: modelTitle,
                            perms: [],
                        };
                    }
                    modelAppName[modelName] = appName;
                });
                modelActions.value = _tmp;
                typeof structuredClone === 'function'
                    ? (orgModelActions.value = structuredClone(_tmp))
                    : (orgModelActions.value = JSON.parse(JSON.stringify(_tmp)));
            });
    };

    const fixImageError = (e) => {
        e.target.src = defaultProfile;
    };

    const generateUsersList = computed(() => {
        return filteredUsers.value.length > 0 ? filteredUsers.value : users.value;
    });

    const generateSelectedUsers = computed(() => {
        return filteredSelectedUsers.value.length > 0 ? filteredSelectedUsers.value : selectedUsers.value;
    });

    const showToast = (title) => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 5000,
            showCloseButton: false,
        });
        toast.fire({
            title,
        });
    };

    const saveGroup = () => {
        let perms = [];
        const _id = route.params.Id;
        for (const [appName, appData] of Object.entries(modelActions.value)) {
            for (const [modelName, modelData] of Object.entries(appData)) {
                perms.push(...modelData['perms'].map((item) => `${item}-${modelName}`));
            }
        }
        const data = { title: title.value, userIds: selectedUsers.value.map((item) => item.id), perms };
        taxios()({
            url: `/groups${_id ? `/${_id}` : ''}`,
            data,
            method: _id ? 'PUT' : 'POST',
        }).then(() => {
            const _title = _id ? 'با موفقیت ویرایش شد' : 'با موفقیت ایجاد شد';
            showToast(_title);
            router.push({ name: 'groups-index', replace: true });
        });
    };

    const initialData = async () => {
        if (route.params.Id) {
            taxios()
                .get(`/groups/${route.params.Id}`)
                .then((res) => {
                    title.value = res.data.content.title;
                    const existsPerms = res.data.content.perms;
                    const existsUsers = res.data.content.users.map((item) => item.id);
                    selectedUsers.value = users.value.filter((item) => existsUsers.includes(Number(item.id)));
                    existsPerms.forEach((item) => {
                        const actionName = item.split('-')[0];
                        const modelName = item.split('-')[1];
                        const appName = modelAppName[modelName];
                        modelActions.value[appName][modelName]['perms'].push(actionName);
                    });
                });
        }
    };
    onMounted(async () => {
        await initApps();
        await initActions();
        await initModelActions();
        await initUsers();
        await initialData();
    });
</script>

<style>
    .custom-border-color-first {
        border: 1px solid #f7af0c;
    }
    .custom-border-color-second {
        border: 1px solid #616161;
    }
    .custom-color-first {
        color: #f7af0c;
    }
    .custom-color-second {
        color: #616161;
    }
    .custom-color-third {
        color: white;
    }
    .custom-bg-first {
        background-color: #f7af0c;
    }
    .custom-bg-second {
        background-color: #616161;
    }
    .custom-bg-third {
        background-color: white;
    }

    .item-perms {
        border: 1px solid #f5f5f5;
        box-shadow: -1px 2px 6px 0px rgba(0, 0, 0, 0.13);
        max-width: 250px;
        max-height: 250px;
    }

    .perm-show {
        background-color: #fbf3fe;
        border: 1px solid #e7a4f8;
        color: #fb38f8;
    }

    .perm-create {
        background-color: #f3f9fe;
        border: 1px solid #a4b8f8;
        color: #0152a4;
    }

    .perm-edit {
        background-color: #f3fef6;
        border: 1px solid #a4f8ca;
        color: #00c247;
    }

    .perm-delete {
        background-color: #fef3f3;
        border: 1px solid #ff9092;
        color: #ff3333;
    }

    .perm-print {
        background-color: #f3fefc;
        border: 1px solid #a4f0f8;
        color: #00b5c2;
    }
</style>
