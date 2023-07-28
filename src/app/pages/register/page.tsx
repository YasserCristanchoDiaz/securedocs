'use client'

import { useState } from 'react'
import Container from '@/app/components/container';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Roles } from '@/app/constants/roles';


export default function Register() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [mail, setMail] = useState("");
    const [user, setUser] = useState("");
    const [phone, setPhone] = useState("");



    const handleRegister =()=>{
        console.log('name: ' + name + '\nlast Name: ' + lastName+'\nmail: '+mail+ '\nuser: '+user+ '\nphone: '+phone +'\nRol : ' +selectedRole)
    }
    return (

        <Container title='Registrar usuario' showButtons={false}>
            <div className='grid justify-content-center col-12'>
                <div className='grid justify-content-center col-6'>
                    <div className='col-4'>
                        <label className="labels" >Nombre:</label>
                    </div>
                    <div className='col-8'>
                        <InputText keyfilter="alpha" value={name} onChange={(e)=>{setName(e.target.value)}} ></InputText>
                    </div>
                    <div className='col-4'>
                        <label className="labels" >Correo:</label>
                    </div>
                    <div className='col-8'>
                        <InputText value={mail} onChange={(e)=>{setMail(e.target.value)}}></InputText>
                    </div>
                    <div className='col-4'>
                        <label className="labels" >Usuario:</label>
                    </div>
                    <div className='col-8'>
                        <InputText value={user} onChange={(e)=>{setUser(e.target.value)}}></InputText>
                    </div>

                </div>
                <div className='grid justify-content-center col-6'>
                    <div className='col-4'>
                        <label className="labels" >Apellido:</label>
                    </div>
                    <div className='col-8'>
                        <InputText keyfilter="alpha" value={lastName} onChange={(e)=>{setlastName(e.target.value)}}></InputText>
                    </div>
                    <div className='col-4'>
                        <label className="labels" >Telefono:</label>
                    </div>
                    <div className='col-8'>
                        <InputText value={phone} onChange={(e)=>{setPhone(e.target.value)}}></InputText>
                    </div>
                    <div className='col-4'>
                        <label className="labels" >Rol:</label>
                    </div>
                    <div className='col-8'>
                        <Dropdown value={selectedRole} onChange={(e)=> setSelectedRole(e.value)} options={Roles} optionLabel='name' optionValue='code' placeholder='Seleccione un Rol'  className="w-full md:w-14rem"/>
                    </div>
                </div>
                <div className='text-center my-2'>
                    <Button label='Registrar' style={{backgroundColor:'#146C94', borderColor:'#146C94'}}onClick={handleRegister}></Button>
                </div>
            </div>
        </Container>
    )
}
