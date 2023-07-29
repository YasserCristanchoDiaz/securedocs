'use client'

import { useState } from 'react'
import Container from '@/app/components/container';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';
import { Roles } from '@/app/constants/roles';


export default function Register() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [isValidSelectedRole, setIsValidSelectedRole] = useState(true);
    const [name, setName] = useState("");
    const [isValidName, setIsValidName] = useState(true);
    const [lastName, setlastName] = useState("");
    const [isValidLastName, setIsValidLastName] = useState(true);
    const [mail, setMail] = useState("");
    const [isValidMail, setIsValidMail] = useState(true);
    const [user, setUser] = useState("");
    const [isValidUser, setIsValidUser] = useState(true);
    const [phone, setPhone] = useState("");
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);


    const handleRegister = () => {

        setIsFormSubmitted(true);
        if (!selectedRole || !name || !lastName || !mail || !user || !phone) {
            if (!selectedRole) {
                setIsValidSelectedRole(false);
            }
            if (!name) {
                setIsValidName(false);
            }
            if (!lastName) {
                setIsValidLastName(false);
            }

            if (!mail) {
                setIsValidMail(false);
            }
            if (!user) {
                setIsValidUser(false);
            }
            if (!phone) {
                setIsValidPhone(false);
            }
            setErrorMessage('Por favor, completa todos los campos.');
        } else {
            console.log('name: ' + name + '\nlast Name: ' + lastName + '\nmail: ' + mail + '\nuser: ' + user + '\nphone: ' + phone + '\nRol : ' + selectedRole)
            setErrorMessage('');
        }
    }
    return (

        <Container title='Registrar usuario' showButtons={false} showContainer={true}>
            <div className='grid justify-content-center col-12'>
                <div className='grid justify-content-center col-6'>
                    {/*<div className='col-4'>
                        <label className="labels" >Nombre:</label>
                    </div>*/}
                    <div className='col-8'>
                        <InputText keyfilter="alpha" value={name} className={!isValidName? 'p-invalid' : ' ' } placeholder="Nombre" onChange={(e) => {
                            setIsValidName(true);
                            setName(e.target.value)
                        }} />
                    </div>
                    {/*<div className='col-4'>
                        <label className="labels" >Correo:</label>
                </div>*/}
                    <div className='col-8'>
                        <InputText value={mail} className={!isValidMail ? 'p-invalid' : ' ' } placeholder="Correo" onChange={(e) => {
                            setIsValidMail(true);
                            setMail(e.target.value)
                        }} />
                    </div>
                    {/*<div className='col-4'>
                        <label className="labels" >Usuario:</label>
                    </div>*/}
                    <div className='col-8'>
                        <InputText value={user} className={!isValidUser ? 'p-invalid' : ' ' } placeholder='Usuario' onChange={(e) => {
                            setIsValidUser(true);
                            setUser(e.target.value)
                        }} />
                    </div>

                </div>
                <div className='grid justify-content-center col-6'>
                    {/*<div className='col-4'>
                        <label className="labels" >Apellido:</label>
                    </div>*/}
                    <div className='col-8'>
                        <InputText keyfilter="alpha" value={lastName} className={!isValidLastName ? 'p-invalid' : ' ' } placeholder="Apellido" onChange={(e) => {
                            setIsValidLastName(true);
                            setlastName(e.target.value)
                        }} />
                    </div>
                    {/*<div className='col-4'>
                        <label className="labels" >Telefono:</label>
                    </div>*/}
                    <div className='col-8'>
                        <InputText value={phone} keyfilter="int" className={!isValidPhone ? 'p-invalid' : ' ' }placeholder="Telefono" onChange={(e) => {
                            setIsValidPhone(true);
                            setPhone(e.target.value)
                        }} />
                    </div>
                    {/*<div className='col-4'>
                        <label className="labels" >Rol:</label>
                    </div>*/}
                    <div className='col-8'>
                        <Dropdown value={selectedRole} placeholder='Seleccione un Rol' onChange={(e) => setSelectedRole(e.value)} options={Roles} optionLabel='name' optionValue='code'  className={`w-full md:w-14rem ${!isValidSelectedRole ? 'p-invalid' : ''}`}/>
                    </div>
                </div>
                <div className=' text-center my-2'>
                    <Button label='Registrar' style={{ backgroundColor: '#146C94', borderColor: '#146C94' }} onClick={handleRegister}></Button>
                </div>
                <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                    {errorMessage && (<Message severity="error" text={errorMessage} />)}
                </div>
            </div>
        </Container>
    )
}
