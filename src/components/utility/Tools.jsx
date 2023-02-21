import {toast} from 'react-toastify';

export const displayToast = (result, msg) => {
    switch (result) {
        case ('SUCCESS'):
            toast.success(msg,{
                position : toast.POSITION.BOTTOM_RIGHT
            })
            
            break;
        case ('FAIL'):
            toast.error(msg,{
                position : toast.POSITION.BOTTOM_RIGHT
            })
            break;
        default:
            return false;
    }
}