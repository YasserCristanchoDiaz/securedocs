import axios from "axios";


export default class AuthService {

    public login(user:string, password: string) {
        const data = {
            mail: user,
            password: password
        }
        return axios.post('http://localhost:7879/auth/login', data)
    }

    public register(mail: string, userName: string, name: string, lastName: string, phone: string, role: string) {
        const data = {
            credential:{
                mail,
                userName
            },
            user:{
                name,
                lastName,
                phone,
                role,
                active:"N"
            }
        }
        return axios.post('http://localhost:7879/auth/register', data)
    }

    public enableUser(password: string, token: string, code: string) {
        const data = {
            password,
            token,
            code
        }
        return axios.post('http://localhost:7879/auth/enableUser', data)
    }

    public recover(mail: string) {
        return axios.get('http://localhost:7879/auth/recoverPassword?mail='+mail)
    }

}