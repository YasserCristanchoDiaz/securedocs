'use client'
import { useState } from "react"
import { InputText } from 'primereact/inputtext';
import Container from '@/app/components/container';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';

export default function messageRecover() {

    const [mail, setMail] =useState("");
    const[isValidMail,setIsValidMail]=useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRecover =()=>{
        if(!mail){
            setIsValidMail(false);
            setErrorMessage('Por favor, completa todos los campos.');
        } else{
            console.log("mail: "+mail)
        }  
    }
    return (
        <Container title="¿Olvidaste tu contraseña?" showButtons={false}>
            <div className="row justify-content-center" >
                <div className="col-12">
                    <p style={{marginTop:'3px'}}> Ingresa tu dirección de correo electrónico para restablecer tu contraseña.</p>
                    <p style={{marginTop:'3px'}}> Recibirás un email con un enlace para asignar una nueva contraseña </p>
                </div>

                <div className="col-12 col-md-6 d-flex">
                    <span className="p-input-icon-left" style={{ width: '50%' }}>
                        <i className="pi pi-envelope" />
                        <InputText className={ !isValidMail ? 'p-invalid' : ' ' } placeholder="Correo Electronico" style={{ width: '100%' }} value={mail} onChange={(e) =>{
                                    setIsValidMail(true); 
                                    setMail(e.target.value)
                                    }}/>
                    </span>
                </div>

                <div>
                    <div className="col-12 col-md-6 mt-2 mt-md-0 d-flex justify-content-center">
                        <Button label='Enviar' icon="pi pi-check" style={{backgroundColor:'#146C94', borderColor:'#146C94'}}onClick={handleRecover} ></Button>
                    </div>
                    <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                {errorMessage && (<Message severity="error" text={errorMessage} />)}
                </div>
                </div>
            </div>

        </Container>

    )

}