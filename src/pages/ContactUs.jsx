import React, {useState} from 'react'
import '../components/contactUs/contactUs.css';
import TextBox from '../components/contactUs/TextBox';

export default function ContactUs() {
    const [credentials, setCredentials] = useState({
        name: '',
        number: '',
        email: '',
        cv: '',
        linkedin: '',
        why: ''
    });

    return (
        <>
        <h2 className='border-white border-solid border-b block text-6xl p-7 text-center text-white'>
            Let's drive the future, together
        </h2>

        <div id='contact-us' className='contact-us-container'>
            <p className='p-0 text-white text-2xl p-4'>Submit your application </p>
            <TextBox 
            type='text'
            placeholder='Your Name'
            value = {credentials.name}
            valueSetter = {setCredentials}
            />
            <TextBox 
            type='number'
            placeholder='Your Number'
            value = {credentials.number}
            valueSetter = {setCredentials}
            />
            <TextBox 
            type='email'
            placeholder='Your email'
            value = {credentials.email}
            valueSetter = {setCredentials}
            />
            <TextBox 
            type='text'
            placeholder='CV/Resume/Portfolio URL (optional)'
            value = {credentials.cv}
            valueSetter = {setCredentials}
            />
            <TextBox 
            type='text'
            placeholder='LinkedIn Profile URL (optional)'
            value = {credentials.linkedin}
            valueSetter = {setCredentials}
            />
            <TextBox 
            type='text'
            placeholder='Why do you want to join us?'
            value = {credentials.why}
            valueSetter = {setCredentials}
            />

            <input 
            type="button" 
            value={"Click me!"}  
            className='mx-auto inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xl cursor-pointer leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'
            onClick={() => {
                console.log(credentials);
            }
            }
            />
            
        </div>
        </>
    )
    }
