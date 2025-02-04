// import React, { useRef } from 'react';
// import './ContactForm.css';
// import emailjs from '@emailjs/browser';
// import Navbar from '../components/Navbar';

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const inputs = form.current.querySelectorAll('.item');
//     let hasError = false;

//     inputs.forEach((input) => {
//       const field = input.closest('.field');
//       const errorText = field.querySelector('.error-txt');

//       if (input.value.trim() === '') {
//         hasError = true;
//         field.classList.add('error');
//         errorText.style.display = 'block';
//       } else {
//         field.classList.remove('error');
//         errorText.style.display = 'none';
//       }
//     });

//     if (hasError) {
//       // If there are validation errors, do not submit the form
//       return;
//     }

//     // Set up the email parameters
//     const emailParams = {
//       user_name: form.current.user_name.value,
//       user_email: form.current.user_email.value,
//       user_phone: form.current.user_phone.value,
//       subject: form.current.subject.value,
//       message: form.current.message.value,
//     };

//     emailjs.sendForm('service_v7gffsg', 'template_vcerbte', emailParams, 'LBbNDyGnadkLsCvMX')
//       .then((result) => {
//         console.log(result.text);
//         alert('Message sent Successfully!');
//         form.current.reset(); // Clear form fields
//       })
//       .catch((error) => {
//         console.log(error.text);
//         alert('Error sending message. Please try again later.');
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='contactbox'>
//         <section className="contact">
//           <h2>Contact Us!</h2>
//           <form ref={form} onSubmit={sendEmail}>
//             <div className="input-box">
//               <div className="input-field field">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   id="name"
//                   className="item"
//                   name="user_name"
//                   autoComplete="off"
//                 />
//                 <div className="error-txt">Full Name can't be blank</div>
//               </div>
//               <div className="input-field field">
//               <input
//   type="email"
//   placeholder="Email Address"
//   id="email"
//   className="item"
//   name="user_email"
//   autoComplete="off"
//   // Update to email type
// />

//                 <div className="error-txt">Email Address can't be blank</div>
//               </div>
//               <div className="input-field field">
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   id="phone"
//                   className="item"
//                   name="user_phone"
//                   autoComplete="off"
//                 />
//                 <div className="error-txt">Phone Number can't be blank</div>
//               </div>
//               <div className="input-field field">
//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   id="subject"
//                   className="item"
//                   name="subject"
//                   autoComplete="off"
//                 />
//                 <div className="error-txt">Subject can't be blank</div>
//               </div>
//             </div>
//             <div className="textarea-field field">
//               <textarea
//                 name="message"
//                 id="message"
//                 cols="30"
//                 rows="10"
//                 className="item"
//                 placeholder="Your Message"
//                 autoComplete="off"
//               ></textarea>
//               <div className="error-txt">Message can't be blank</div>
//             </div>
//             <button className="CFbtn" type="submit" value="Send">
//               Send Message
//             </button>
//           </form>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ContactUs;


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import './ContactForm.css'; // Import CSS file

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    const inputs = form.current.querySelectorAll('.item');
    let hasError = false;

    inputs.forEach((input) => {
      const field = input.closest('.field');
      const errorText = field.querySelector('.error-txt');

      if (input.value.trim() === '') {
        hasError = true;
        field.classList.add('error');
        errorText.style.display = 'block';
      } else {
        field.classList.remove('error');
        errorText.style.display = 'none';
      }
    });

    // If there are validation errors, do not submit the form
    if (hasError) {
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm('service_no5b13c', 'template_rymw7tq', form.current, {
        publicKey: 'XQkjy-x9bc-7bMqbA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent Successfully!');
          form.current.reset(); // Clear form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error sending message. Please try again later.');
        },
      );
  };

  return (
    <>
      <Navbar />
      <div className='contactbox'>
        <section className="contact">
          <h2>Contact Us!</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-box">
              <div className="input-field field">
                <input
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  className="item"
                  name="user_name"
                  autoComplete="off"
                />
                <div className="error-txt">Full Name can't be blank</div>
              </div>
              <div className="input-field field">
                <input
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  className="item"
                  name="user_email"
                  autoComplete="off"
                />
                <div className="error-txt">Email Address can't be blank</div>
              </div>
            </div>
            <div className="textarea-field field">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="item"
                placeholder="Your Message"
                autoComplete="off"
              ></textarea>
              <div className="error-txt">Message can't be blank</div>
            </div>
            <button className="CFbtn" type="submit" value="Send">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
