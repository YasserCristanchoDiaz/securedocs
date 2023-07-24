'use client'
import { Button } from 'primereact/button'
import background from '../../../public/background.svg'

export default function Container({children}: {children:React.ReactNode}){
    return (
        <div className="flex justify-content-center align-items-center" style={{ height: '100vh', width: '100vw',
         backgroundImage:`url(${background.src})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}>
            <div className="flex justify-content-center align-items-center" style={{position: 'fixed', 
            top:0, right:0, left:0, height: '15vh', width: '100vw', backgroundColor:'#D9E6FA'}}>
                <h1>SecureDosc</h1>
                <Button label='Sign up' style={{height:'48px'}}></Button>
                <Button label='login' style={{height:'48px'}}></Button>
            </div>
            <div className="md:col-6 col-11 md:p-8 p-3 border-round-3xl" style={{backgroundColor:'RGBA(25, 167,206,0.55)'}}>
                {children}
            </div>
        </div>
    )

}