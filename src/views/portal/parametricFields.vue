<!-- create lead and status page -->
<template>
    <div dir="rtl" class="main-container bg-[linear-gradient(117deg,_#e7f0f9_-5.98%,_#efefef_107.97%)] h-screen flex justify-center items-center">
        <div
            class="inner-container shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] w-[100%] h-[100%] flex flex-col bg-[#FAFAFA] min-[700px]:flex-col min-[700px]:h-[72%] min-[700px]:w-[90%] min-[700px]:rounded-[45px] min-[1024px]:w-[75%] min-[1280px]:w-[70%] min-[1280px]:h-[75%]"
        >
            <div class="w-full flex max-[699px]:flex-col h-[100%] px-14 max-sm:px-0">
                <TabGroup :selectedIndex="selectedTab" as="div" class="w-full h-full flex flex-col">
                    <TabList class="flex items-center overflow-auto !w-full h-[15%] border-b-4">
                        <Tab as="template" v-slot="{ selected }" class="!w-full text-center max-lg:text-base max-md:text-sm max-sm:text-xs">
                            <a
                                href="javascript:;"
                                class="p-3.5 py-3 text-lg hover:text-sky-600 !outline-none transition duration-300 whitespace-nowrap"
                                :class="{ 'font-semibold rounded-md text-sky-600': selected }"
                                >منبع سرنخ</a
                            >
                        </Tab>
                        <Tab as="template" v-slot="{ selected }" class="!w-full text-center max-lg:text-base max-md:text-sm max-sm:text-xs">
                            <a
                                href="javascript:;"
                                class="p-3.5 py-3 w-fit text-lg hover:text-sky-600 !outline-none transition duration-300 whitespace-nowrap"
                                :class="{ 'font-semibold rounded-md text-sky-600': selected }"
                                >وضعیت</a
                            >
                        </Tab>
                        <Tab as="template" v-slot="{ selected }" class="!w-full text-center max-lg:text-base max-md:text-sm max-sm:text-xs">
                            <a
                                href="javascript:;"
                                class="p-3.5 py-3 w-fit text-lg hover:text-sky-600 !outline-none transition duration-300 whitespace-nowrap"
                                :class="{ 'font-semibold rounded-md text-sky-600': selected }"
                                >اطلاعات تماس</a
                            >
                        </Tab>
                        <Tab as="template" v-slot="{ selected }" class="!w-full text-center max-lg:text-base max-md:text-sm max-sm:text-xs">
                            <a
                                href="javascript:;"
                                class="p-3.5 py-3 w-fit text-lg hover:text-sky-600 !outline-none transition duration-300 whitespace-nowrap"
                                :class="{ 'font-semibold rounded-md text-sky-600': selected }"
                                >نوع فعالیت</a
                            >
                        </Tab>
                        <Tab as="template" v-slot="{ selected }" class="!w-full text-center max-lg:text-base max-md:text-sm max-sm:text-xs">
                            <a
                                href="javascript:;"
                                class="p-3.5 py-3 w-fit text-lg hover:text-sky-600 !outline-none transition duration-300 whitespace-nowrap"
                                :class="{ 'font-semibold rounded-md text-sky-600': selected }"
                                >حوزه فعالیت</a
                            >
                        </Tab>
                        <Tab as="template" v-slot="{ selected }" class="!w-full text-center max-lg:text-base max-md:text-sm max-sm:text-xs">
                            <a
                                href="javascript:;"
                                class="p-3.5 py-3 w-fit text-lg hover:text-sky-600 !outline-none transition duration-300 whitespace-nowrap"
                                :class="{ 'font-semibold rounded-md text-sky-600': selected }"
                                >دلایل شکست</a
                            >
                        </Tab>
                    </TabList>
                    <TabPanels class="h-[85%] pt-10 max-md:pt-5">
                        <TabPanel class="w-full h-full">
                            <parametricField
                                :create-title="'منبع سرنخ'"
                                :placeholderText="'منبع سرنخ را وارد نمایید.'"
                                :data="sources"
                                :data-type="'sources'"
                                @update-dataList="updateDataList"
                            />
                        </TabPanel>
                        <TabPanel class="w-full h-full">
                            <parametricField
                                :create-title="'وضعیت'"
                                :placeholderText="'وضعیت را وارد نمایید.'"
                                :data="statuses"
                                :data-type="'statuses'"
                                @update-dataList="updateDataList"
                            />
                        </TabPanel>
                        <TabPanel class="w-full h-full">
                            <parametricField
                                :create-title="'اطلاعات تماس'"
                                :placeholderText="'نوع اطلاعات تماس را وارد نمایید.'"
                                :data="contactTypes"
                                :data-type="'contactTypes'"
                                @update-dataList="updateDataList"
                            />
                        </TabPanel>
                        <TabPanel class="w-full h-full">
                            <parametricField
                                :create-title="'نوع فعالیت'"
                                :placeholderText="'نوع فعالیت را وارد نمایید.'"
                                :data="activityTypes"
                                :data-type="'activityTypes'"
                                @update-dataList="updateDataList"
                            />
                        </TabPanel>
                        <TabPanel class="w-full h-full">
                            <parametricField
                                :create-title="'حوزه فعالیت'"
                                :placeholderText="'حوزه فعالیت را وارد نمایید.'"
                                :data="careerFields"
                                :data-type="'careerFields'"
                                @update-dataList="updateDataList"
                            />
                        </TabPanel>
                        <TabPanel class="w-full h-full">
                            <parametricField
                                :create-title="'دلایل شکست'"
                                :placeholderText="'دلیل شکست را وارد نمایید.'"
                                :data="failureReasons"
                                :data-type="'failureReasons'"
                                @update-dataList="updateDataList"
                            />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { taxios } from '@/plugins/taxios';
    import parametricField from '@/components/portal/parametricField.vue';
    import Swal from 'sweetalert2';
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';

    let sources = ref<{ id?: number; title: string }[]>([]);
    let statuses = ref<{ id?: number; title: string }[]>([]);
    let contactTypes = ref<{ id?: number; title: string }[]>([]);
    let activityTypes = ref<{ id?: number; title: string }[]>([]);
    let careerFields = ref<{ id?: number; title: string }[]>([]);
    let failureReasons = ref<{ id?: number; title: string }[]>([]);

    const fetch_data = (dataType: string, refVariable: any) => {
        let baseUrl = dataType == 'contactTypes' ? import.meta.env.VITE_MAIN_URL : import.meta.env.VITE_CRM_BACKEND;
        taxios(baseUrl)
            ?.get(`${dataType}`)
            .then((res) => {
                refVariable.value = res.data.content;
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

    const dataLists = {
        sources,
        statuses,
        contactTypes,
        activityTypes,
        careerFields,
        failureReasons,
    };

    const updateDataList = () => {
        Object.keys(dataLists).forEach((key) => fetch_data(key, dataLists[key]));
    };

    onMounted(updateDataList);
</script>

<style></style>
