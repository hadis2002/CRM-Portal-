import axios from 'axios';
import { useAuthStore } from '@/stores/authentication';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

const authStore = useAuthStore();
const baesUrl = import.meta.env.VITE_MAIN_URL;
const contentType = 'application/json';
const taxios = (_baseUrl = baesUrl, _contentType = contentType,callWithoutToken=false) => {
    let token = authStore.loginInfo['token'] || '';
    if(callWithoutToken==false && token==''){
        return
    }
    if (!tokenValidation()) {
        console.error('Not Allowed');
        coloredToast('danger', 'تداخل در اطلاعات کاربر! لطفا مجدد وارد شوید');
    }
    else {
        return axios.create({
            baseURL: _baseUrl,
            headers: {
                'Content-Type': _contentType,
                Authorization: `Bearer ${token}`,
            },
        });
    }
};

const coloredToast = (color: string, title: string) => {
    const toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 5000,
        showCloseButton: true,
        customClass: {
            popup: `color-${color}`,
        },
        target: document.getElementById(color + '-toast') || 'body',
    });
    toast.fire({
        title: title,
    });
};

const tokenValidation = () => {
    let token = authStore.loginInfo['token'] || '';
    if (token.length == 0) return true;
    const decoded = jwtDecode(token) as any;
    if (decoded.exp * 1000 < new Date().getTime()) {
        authStore.removeLoginInfo()
        return false
    }
    if (decoded['userId'] != authStore.loginInfo.userId) {
        return false;
    }
    return true;
};
export { taxios };
