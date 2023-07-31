import axios from "axios";
import { headers } from "next/dist/client/components/headers";

export class AdminService {

    public getUsers() {
        return axios.get('http://localhost:7879/user/getAll', 
        { 
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
    }
}