import React from 'react';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const ContactsInfo = () => {
    return (
        <section className="container mx-auto py-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border bg-white hover:bg-gray-100 text-gray-800 shadow-md p-8 rounded-lg">
                    <HiOutlineLocationMarker className="text-4xl text-secondary mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-lg">Essafa. Lissasfa, Casablanca, Maroc</p>
                </div>
                <div className="border bg-white hover:bg-gray-100 text-gray-800 shadow-md p-8 rounded-lg">
                    <HiOutlineMail className="text-4xl text-secondary mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-lg">batihousse@gmail.com</p>
                </div>
                <div className="border bg-white hover:bg-gray-100 text-gray-800 shadow-md p-8 rounded-lg">
                    <HiOutlinePhone className="text-4xl text-secondary mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-lg">(+212) 66108-7727</p>
                </div>
            </div>
        </section>
    )
}

export default ContactsInfo;
