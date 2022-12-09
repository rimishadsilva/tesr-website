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
            value = {credentials.resume}
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

            
        </div>
        </>
    )
    }
