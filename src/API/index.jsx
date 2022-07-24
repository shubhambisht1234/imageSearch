import axios from "axios";

export const GetImgRequest = (counting, search) => {

    return (
        axios.get(`https://api.unsplash.com/search/photos?page=${counting}&query=${search}&client_id=fUaFXe55YTpT5Nm1EUk6ezSmB_TQKObkR0jXESNlzJg`))
} 