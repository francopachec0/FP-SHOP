export const Error404 = () => {
    return (
        <div className="p-4 pt-28 text-center h-screen bg-[#dee2e6]">
            <h1 className="text-2xl font-bold">404 Page Not Found.</h1>
            <a href="/" className="flex items-center justify-center p-8 text-xl md:hover:text-[#adb5bd] duration-300">
                <ion-icon name="home-outline"></ion-icon>
                <span className="ml-2">
                    To Home
                </span>
            </a>
        </div>
    )
};