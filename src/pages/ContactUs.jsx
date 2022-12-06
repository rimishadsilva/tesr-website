import React from 'react'
import '../components/contactUs/contactUs.css'

export default function ContactUs() {
  return (
    <>
    <div>ContactUs</div>
    <h1>Hello world</h1>
    <h2 class="title contactTitle stg3">Let's drive the future, together</h2>
        <div class="box-container">
            <h3>Submit your Application</h3>
            <form autocomplete="off" action="/recruitment" method="POST" class="stg3">
            <input type="text" placeholder="Your Name" name="Name" required autocomplete="off"></input>
            <input type="tel" placeholder="Your Number" name="Number" required autocomplete="off"></input>
            <input type="text" placeholder="Email" name="Email" required autocomplete="off"></input>
            <select name="department" required>
                <option value="" selected disabled>Interested department</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electronics">Electrical</option>
                <option value="Computer science">Electronics & Computer Science</option>
                <option value="Electronics">Creatives & Management</option>
            </select>
            <input class='focus'type="text" placeholder="CV/Resume/Portfolio URL (optional)" name="CV" autocomplete="off"></input>
                <input class='focus' type="text" placeholder="LinkedIn URL (optional)" name="Linkedin" autocomplete="off"></input>
                <textarea name="Message"
                    placeholder="Why do you want to join us? (You can also mention your career interests and skills here)"
                    id="" cols="30" rows="10" required autocomplete="off"></textarea>
                <div class="btn-container">
                    <input type="submit" value="Submit" class="btn"></input>
                </div>
            </form>
        </div>
    </>
  )
}
