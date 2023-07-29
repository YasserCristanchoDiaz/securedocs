'use client'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { useEffect, useState } from "react"
import Container from '@/app/components/container';
import Link from 'next/link'; 

export default function Login() {
    const [user, setUser] = useState<string>('')
    const[isValidUser,setIsValidUser]=useState(true);
    const [password, setPassword] = useState<string>('') 
    const [errorMessage, setErrorMessage] = useState('');
    const[isValidPassword, setIsValidPassword]=useState(true);
    const [isFormSubmited, setIsFormSubmited] = useState(false);
    
    const handleSubmit = () => {

        setIsFormSubmited(true);
        if(!user || !password){
            if(!user){
                setIsValidUser(false);
            }
            if(!password){
                setIsValidPassword(false);
            }

            setErrorMessage('Por favor, completa todos los campos.'); 
        }else{
            console.log('user: ' + user + '\npw: ' + password)
            setErrorMessage('');
        }
    }

    return (
        <Container title='Login' showButtons={false} showContainer={true}>
            <div>
                <div>
                    <div className="text-center  my-2">
                        <span className='p-input-icon-right'>
                            <i className="pi pi-user" style={{ fontSize: '14px' }}/>
                        <InputText value={user} className={!isValidUser ? 'p-invalid' : ' ' }  placeholder="Usuario"onChange={(e) =>{
                                setIsValidUser(true); 
                                setUser(e.target.value)
                                }}/>
                        </span>
                    </div>
                </div>
                <div >
                    <div className="text-center  my-2">
                        <Password value={password} className={!isValidPassword ? 'p-invalid' : ' ' }  placeholder="Contraseña"feedback={false} onChange={(e) =>{
                                setIsValidPassword(true); 
                                setPassword(e.target.value)
                                }} toggleMask/>
                    </div>
                </div>
                <div className='text-center  my-2'>
                    <Link href="http://" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', color: '#FFFFFF' }}>Olvide mi contraseña?</Link>
                </div>
                <div className='text-center  my-2'>
                    <Button label='Entrar' onClick={handleSubmit} style={{backgroundColor:'#146C94', borderColor:'#146C94'}}></Button>
                </div>
                <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                {errorMessage && (<Message severity="error" text={errorMessage} />)}
                </div>
            </div>
        </Container>
    )
}