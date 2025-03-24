<template>
    <div dir="rtl" class="main-container-login bg-[linear-gradient(117deg,_#e7f0f9_-5.98%,_#efefef_107.97%)] flex justify-center items-center h-screen">
        <div
            class="inner-container-login shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] !w-full h-full bg-[#FAFAFA] flex flex-col min-[700px]:flex-row min-[700px]:rounded-3xl min-[700px]:!w-[80%] min-[700px]:h-[75%] min-[1024px]:w-[70%] min-[1280px]:!w-[65%]"
        >
            <div
                class="right-box-logo bg-[#3B85CE] flex flex-col h-[30%] !w-full justify-center items-center rounded-b-[40px] min-[700px]:h-[100%] min-[700px]:!w-[30%] min-[700px]:rounded-s-3xl min-[700px]:rounded-bl-none min-[1280px]:!w-[25%]"
            >
                <div class="w-[60%] flex h-full justify-center items-center">
                    <svg
                        class="w-[50%] h-[50%] min-[700px]:w-[100%] min-[700px]:h-[100%] min-[1024px]:!w-[100%] min-[1280px]:!w-[100%]"
                        width="237"
                        height="212"
                        viewBox="0 0 237 212"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_853_4377)">
                            <path
                                d="M117.122 47.8555C130.337 47.8555 141.05 37.1427 141.05 23.9277C141.05 10.7128 130.337 0 117.122 0C103.908 0 93.1947 10.7128 93.1947 23.9277C93.1947 37.1427 103.908 47.8555 117.122 47.8555Z"
                                fill="white"
                            />
                            <path
                                d="M181.205 47.8555C194.42 47.8555 205.133 37.1427 205.133 23.9277C205.133 10.7128 194.42 0 181.205 0C167.99 0 157.277 10.7128 157.277 23.9277C157.277 37.1427 167.99 47.8555 181.205 47.8555Z"
                                fill="white"
                            />
                            <path
                                d="M213.072 47.8555C226.287 47.8555 237 37.1427 237 23.9277C237 10.7128 226.287 0 213.072 0C199.857 0 189.145 10.7128 189.145 23.9277C189.145 37.1427 199.857 47.8555 213.072 47.8555Z"
                                fill="white"
                            />
                            <path
                                d="M101.069 153.163V211.257H153.638C153.638 211.257 151.655 129.961 236.5 107.631V57.7374C236.5 57.7374 177.6 63.3191 141.05 121.24V57.7374H92.1119C92.1119 64.3678 94.9043 151.593 0 169.039V211.257H29.2612C29.2612 211.257 70.3653 203.988 101.01 153.687"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_853_4377">
                                <rect width="237" height="211.257" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div
                class="left-box w-full h-[70%] flex flex-col mx-auto gap-8 justify-center items-center min-[700px]:w-[70%] min-[700px]:h-[100%] min-[1280px]:w-[75%]"
            >
                <div class="text-[#616161] text-[22px] font-semibold max-md:text-[19px]">ورود به سامانه CRM تراز</div>
                <div class="form-box w-[75%] min-[700px]:w-[70%] min-[1280px]:w-[65%]">
                    <form @submit.prevent="submitForm()">
                        <div class="flex flex-col gap-4 md:gap-5 sm:gap-4">
                            <div
                                :class="{
                                    'has-error': $loginFormValidation.loginForm.username.$error,
                                    '': isSubmitLoginForm && !$loginFormValidation.loginForm.username.$error,
                                }"
                            >
                                <label class="text-[#616161] text-[18px] font-normal max-lg:text-sm" for="customUsername">نام کاربری:</label>
                                <div class="relative flex items-center">
                                    <input
                                        type="text"
                                        autocomplete="off"
                                        placeholder="نام کاربری خود را وارد نمایید."
                                        class="form-input input-box-shadow shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] p-5 pe-10 rounded-lg text-[#757575] placeholder:text-gray-400 max-lg:p-3"
                                        v-model.trim="loginForm.username"
                                    />
                                    <svg class="absolute end-1 me-4" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="6" r="4" stroke="#757575" stroke-width="1.5" />
                                        <path
                                            d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                            stroke="#757575"
                                            stroke-width="1.5"
                                        />
                                    </svg>
                                </div>
                                <template v-if="isSubmitLoginForm && $loginFormValidation.loginForm.username.$error">
                                    <p class="text-danger mt-1">لطفا نام کاربری خود را وارد نمایید.</p>
                                </template>
                            </div>
                            <div
                                :class="{
                                    'has-error': $loginFormValidation.loginForm.password.$error,
                                    '': isSubmitLoginForm && !$loginFormValidation.loginForm.password.$error,
                                }"
                            >
                                <label class="text-[#616161] text-[18px] font-normal max-lg:text-sm" for="customPassword">رمز عبور:</label>
                                <div class="relative flex items-center">
                                    <input
                                        :type="isPasswordVisible ? 'password' : 'text'"
                                        placeholder="لطفا رمز عبور خود را وارد نمایید."
                                        class="form-input input-box-shadow shadow-[0px_2px_8px_0px_rgba(10,102,194,0.07)] p-5 pe-10 rounded-lg text-[#757575] placeholder:text-gray-400 max-lg:p-3"
                                        v-model.trim="loginForm.password"
                                    />
                                    <svg
                                        @click="togglePasswordVisibility"
                                        v-if="!isPasswordVisible"
                                        class="absolute end-1 cursor-pointer me-4"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                                            stroke="#757575"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                            stroke="#757575"
                                            stroke-width="1.5"
                                        />
                                    </svg>
                                    <svg
                                        @click="togglePasswordVisibility"
                                        v-if="isPasswordVisible"
                                        class="absolute end-1 cursor-pointer me-4"
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
                                <template v-if="isSubmitLoginForm && $loginFormValidation.loginForm.password.$error">
                                    <p class="text-danger mt-1">لطفا رمز عبور خود را وارد نمایید.</p>
                                </template>
                            </div>
                        </div>
                        <button type="submit" class="bg-[#3B85CE] text-white w-full rounded-lg p-2.5 !mt-9 text-lg :bg-[#c0cfdf] max-lg:p-1.5">ورود</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useRoute } from 'vue-router';
    import { required } from '@vuelidate/validators';
    import { getUserRoles } from '@/plugins/rolepermissioncontrol/helperAccess';
    import { useVuelidate } from '@vuelidate/core';
    import { useAuthStore } from '@/stores/authentication';
    import { taxios } from '@/plugins/taxios';
    import Swal from 'sweetalert2';
    const router = useRouter();
    const route = useRoute();
    const authStore = useAuthStore();
    let isPasswordVisible = ref(true);
    const loginForm = ref({
        username: '',
        password: '',
    });
    const isSubmitLoginForm = ref(false);
    const rules = {
        loginForm: {
            username: { required },
            password: { required },
        },
    };
    const sub = computed(() => {
        let _arr = window.location.pathname.split('.');
        let _sub = 'taraz';
        if (_arr.length == 4) {
            _sub = _arr[0];
        }
        return _sub;
    });
    const fetch_user_data = () => {
        taxios()
            ?.get(`/users/${authStore.loginInfo.userId}`)
            .then((res) => {
                const user = res.data.content.user;
                const userData = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    dateOfBirth: user.dateOfBirth,
                    branch: user.branch,
                    branchId: user.branchId,
                    companyName: user.companyName,
                    companyId: user.companyId,
                    profileImage: user.profileImage,
                    signature: user.signature,
                    position: user.position,
                };
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
            });
    };

    const $loginFormValidation = useVuelidate(rules, { loginForm });
    const submitForm = () => {
        isSubmitLoginForm.value = true;
        $loginFormValidation.value.loginForm.$touch();

        if ($loginFormValidation.value.loginForm.$invalid) {
            return false;
        }
        for (const key of Object.keys(localStorage)) {
            localStorage.removeItem(key);
        }
        let allData = { ...loginForm.value, sub: sub.value };
        taxios(undefined, undefined, true)
            ?.post('/login', allData)
            .then((res) => {
                const response = res.data;
                authStore.setLoginInfo(response.content.token, response.content.permissions, response.content.groups);
                fetch_user_data();
                // if (route.query.preurl) {
                //     const _url = new URL(decodeURIComponent(route.query.preurl.toString()));
                //     let searchParams = new URLSearchParams(_url.search);
                //     searchParams.append('token', authStore.loginInfo.token);
                //     const newUrl = `${_url.protocol}//${_url.host}${_url.pathname}?${searchParams}`;
                //     window.location.href = newUrl;
                // } else {
                let url = `${import.meta.env.VITE_CRM_URL}?token=${authStore.loginInfo.token}`;
                window.location.href = url;
                // }
            })
            .catch((error) => {
                if (error?.response?.data?.info?.[0]?.message) {
                    showAlert(error?.response?.data?.info?.[0]?.message?.fa);
                }
                if (error?.code == 'ERR_NETWORK') {
                    showAlert('مشکل در اتصال به اینترنت');
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

    const togglePasswordVisibility = () => {
        if (loginForm.value.password.length) {
            isPasswordVisible.value = !isPasswordVisible.value;
        }
    };
</script>

<style></style>
