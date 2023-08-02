import axios from "axios";

export class AdminService {

    public getUsers() {
        return axios.get('http://localhost:7879/user/getAll', 
        { 
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
    }

    public saveUser(user:any) {
        return axios.post('http://localhost:7879/user/create',
        user, 
        { 
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
    }

    public deleteUser(id: string) {
        return axios.delete('http://localhost:7879/user/delete?id=' + id,{
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
    }
}