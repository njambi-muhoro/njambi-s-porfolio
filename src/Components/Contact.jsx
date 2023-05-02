import React from 'react';
import Title from './Title';

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    const formData = new FormData(event.target); // create a FormData object from the form data
    fetch('https://getform.io/f/167a3962-d876-436f-ab30-2983e7f1b0eb', { // replace (customSlugHere) with your actual Getform endpoint
      method: 'POST',
      body: formData,
    }).then(() => {
      alert('Message sent successfully!');
      window.location.reload(); // reload the page after the form submission
    }).catch((error) => {
      alert('Message failed to send. Please try again later.');
      console.error(error);
    });
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit" // change the button type to "submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
