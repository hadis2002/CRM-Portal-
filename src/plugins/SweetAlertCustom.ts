
import Swal from 'sweetalert2';
const showAlert = async (message:string) => {
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


export {showAlert}