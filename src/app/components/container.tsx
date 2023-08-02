'use client'
import { Button } from 'primereact/button'
import background from '../../../public/background.svg'
import Link from 'next/link';
import icon from '../../../public/icon.svg';

export default function Container({ children, title, showContainer, showButtons = true, showMng = false }: { children: React.ReactNode, title?: string, showContainer?: boolean, showButtons?: boolean, showMng?: boolean }) {
    
    const credentialButtons = () => {
        return( <div style={{ display: 'flex', gap: '10px', paddingRight: '20px' }}>
        {/*<Link href={'/pages/register'}>
            <Button label='Sign up' style={{ height: '48px', backgroundColor: '#146C94', borderColor: '#146C94' }}></Button>
        </Link>*/}
        <Link href={'/pages/login'}>
            <Button label='Login' style={{ height: '48px' }}></Button>
        </Link>
    </div>)
    }
    
    const logoutButton = () => {
        return( <div style={{ display: 'flex', gap: '10px', paddingRight: '20px' }}>
        {/*<Link href={'/pages/register'}>
            <Button label='Sign up' style={{ height: '48px', backgroundColor: '#146C94', borderColor: '#146C94' }}></Button>
        </Link>*/}
        <Link href={'/pages/home'}>
            <Button label='Logout' onClick={() => {localStorage.clear()}} style={{ height: '48px' }}></Button>
        </Link>
    </div>)
    }

    return (
        <div className="flex justify-content-center align-items-center" style={{
            height: '100vh',
            width: '100vw',
            backgroundImage: `url(${background.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>

            <div className=" navBar flex justify-content-between align-items-center" style={{
                position: 'fixed',
                top: 0, right: 0, left: 0, height: '15vh', width: '100vw', backgroundColor: '#D9E6FA'
            }}>
                <img src='/icon.svg' alt="Logo" style={{ width: 'auto', height: '380px', marginRight: '2px' }} />
                {/*<h1 style={{ paddingLeft: '20px' }}>SecureDocs</h1>*/}
                {showButtons ? credentialButtons() : logoutButton()  }
            </div>


            {showContainer && <div className="grid justify-content-center alim-items-center md:col-6 col-11  border-round-3xl" style={{ backgroundColor: 'RGBA(25, 167,206,0.55)' }}>
                {title && <div className='col-12 text-center'>
                    <h2>{title}</h2>
                </div>}
                <div className='col-12 text-center'>
                    {children}
                </div>
            </div>}

            {showMng && <div>

                <div className='text-center justify-content-center alim-items-center md:col-12 col-6'>
                    {children}
                </div>

            </div>}
        </div>
    )

}

