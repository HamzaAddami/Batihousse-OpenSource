import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { useEffect, useState } from "react";

const Header = ()=> {
    const [isHidden, setIsHidden] = useState(false);
    const handleScroll = () => {
        window.scrollY > 10 ? setIsHidden(true) : setIsHidden(false);
    }
    useEffect(() => handleScroll());
    return (
        <header className={`sm:block max-sm:hidden lg-${isHidden ? 'hidden' : 'block'}`} >
            <div className="flex items-center justify-between p-4 px-10 bg-primary dark:bg-primary">
                <Link className="flex items-center text-white font-bold text-3xl">
                    <h3 className="ml-5" id="font">BATIHOUSSE</h3>
                </Link>
                <div className="flex flex-row gap-16 items-center space-y-1 text-md text-gray-200 font-smbold">
                    <div className="flex gap-2">
                        <MdLocationOn className="mt-1 text-secondary" />
                        <h3 className="flex flex-col">
                            <span>Essafa. Lissasfa </span>Casablanca, Maroc
                        </h3>
                    </div>
                    <div className="flex gap-2 font-semibold">
                        <GrContact className="mt-1 text-secondary" />
                        <h3 className="flex flex-col">
                            batihousse@gmail.com <span> (+212) 66108-7727</span>
                        </h3>
                    </div>
                </div>
                <div>
                    <Link className="w-[150px] bg-gradient-to-r from-secondary via-quaternary to-tertiary h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-quaternary before:to-quaternary before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[black]"
                            id="font-family"
                            to='/contact'>
                        Contactez-Nous
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
