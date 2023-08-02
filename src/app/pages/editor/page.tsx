'use client'


import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useState } from "react"
import Container from '@/app/components/container';

import { Splitter, SplitterPanel } from 'primereact/splitter';
        

export default function Editor() {
    const [message, setMessage] = useState<string>('¡Eres un editor! Puedes subir, descargar y eliminar archivos')


    const splittedMessage = message.split('!'); 
    const firstPart = splittedMessage.slice(0, -1).join('!'); 
    const lastPart = splittedMessage.slice(-1).join('!'); 
    return (
        <Container showContainer={true}>
            <p style={{fontSize: '22px'}}>{firstPart}!<br />{lastPart}</p>
            <Splitter style={{ height: '300px' }} layout='vertical'>
                <SplitterPanel className="flex align-items-center justify-content-center">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quae velit in ipsam voluptatem minima repellendus exercitationem veritatis possimus sequi nostrum libero saepe molestias quibusdam deleniti quos, officia expedita blanditiis.</div>
                    <div>
                        <Button label="Subir"></Button>
                        <Button label="Descargar"></Button>
                        <Button label="Eliminar"></Button>
                    </div>
                </SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quae velit in ipsam voluptatem minima repellendus exercitationem veritatis possimus sequi nostrum libero saepe molestias quibusdam deleniti quos, officia expedita blanditiis.</div>
                    <div>
                        <Button label="Subir"></Button>
                        <Button label="Descargar"></Button>
                        <Button label="Eliminar"></Button>
                    </div>
                </SplitterPanel>
            </Splitter>
                    
        </Container>
    )
} 