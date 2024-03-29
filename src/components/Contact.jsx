import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from '../style'
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { contact } from "../assets";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_v8oiu2e',
        'template_wwuux5n',
        {
          from_name: form.name,
          to_name: "Imane Ajroudi",
          from_email: form.email,
          to_email: "ajroudi.im@gmail.com",
          message: form.message,
        },
        'd2YD56-qD0nPYOCDL'//public key
      )
      .then(
        () => {
          setLoading(false);
          let timerInterval
          Swal.fire({
            title: 'Message sent successfully!',
            html: 'Thank you. I will get back to you as soon as possible.',
            timer: 4000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ouups, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`${styles.paddingX} sm:h-auto md:h-screen xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} id='contact'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='sm:w-full md:flex-[0.50] h-fit bg-[#0c0b09] p-8 rounded-2xl'
      >
      <h3 className='font-[roboto] text-[20px] font-[600] black-gradient'>GET IN TOUCH</h3>
      <h2 className="text-[52px] font-bold text-org"> Contact &#x2f;&gt; </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            {/* <span className='text-white font-medium mb-4'>Your Name</span> */}
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className=' bg-[#14120f] py-4 px-6 placeholder:black-gradient text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            {/* <span className='text-white font-medium mb-4'>Your email</span> */}
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className=' bg-[#14120f] py-4 px-6 placeholder:black-gradient text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            {/* <span className='text-white font-medium mb-4'>Your Message</span> */}
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className=' bg-[#14120f] py-4 px-6 placeholder:black-gradient text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#14120f] py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 24, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      <motion.img
        src={contact}
        alt="Moving Image"
        className="mx-auto h-[100%]"
        animate={{
          x: [-100, 100, -50, -75, 50],
          y: [-50, -75, 50, -100, 75],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
        {/* <img src={contact} className="mx-auto h-[100%]" /> */}
        {/* <EarthCanvas /> */}
      </motion.div>
    </div>
  );
};

export default Contact;