export const Footer = () => {
    return (
        <footer className='bg-white py-12'>
            <div className='container mx-auto px-2 text-black'>
                <div className='flex flex-col justify-center items-center gap-8 md:flex-row md:justify-around'>
                    <div>
                        <h2 className='text-xl font-semibold mb-4'>TECHNOLOGIES</h2>
                        <ul className='flex justify-around'>
                            <li className='transform hover:scale-110 duration-200'><ion-icon size='large' name="logo-html5"></ion-icon></li>
                            <li className='transform hover:scale-110 duration-200'><ion-icon size='large' name="logo-css3"></ion-icon></li>
                            <li className='transform hover:scale-110 duration-200'><ion-icon size='large' name="logo-javascript"></ion-icon></li>
                            <li className='transform hover:scale-110 duration-200'><ion-icon size='large' name="logo-react"></ion-icon></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-4 transform hover:scale-110 duration-200 cursor-default'>Franco Pacheco</h2>
                        <p>Frontend Developer</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-4'>FP SHOP © {new Date().getFullYear()}</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}
