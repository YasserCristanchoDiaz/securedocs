'use client'
import { Button } from 'primereact/button'
import background from '../../../public/background.svg'

export default function Container({children, title, showButtons = true }: {children:React.ReactNode, title?:string,showButtons?: boolean }){
    return (
        <div className="flex justify-content-center align-items-center" style={{ height: '100vh', width: '100vw',
         backgroundImage:`url(${background.src})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}>
            <div className=" navBar flex justify-content-between align-items-center" style={{position: 'fixed', 
            top:0, right:0, left:0, height: '15vh', width: '100vw', backgroundColor:'#D9E6FA'}}>
                <h1  style={{ paddingLeft: '20px' }}>SecureDocs</h1>
                {showButtons && (
          <div style={{ display: 'flex', gap: '10px', paddingRight: '20px' }}>
            <Button label='Sign up' style={{ height: '48px' }}></Button>
            <Button label='Login' style={{ height: '48px' }}></Button>
          </div>
        )}
            </div>
            
            <div className="grid justify-content-center alim-items-center md:col-6 col-11  border-round-3xl" style={{backgroundColor:'RGBA(25, 167,206,0.55)'}}>
               {title&&<div className='col-12 text-center'>
                    <h2>{title}</h2>
                </div>}
                <div className='col-12 text-center'>
                    {children}
                </div>
            </div>
        </div>
    )

}

