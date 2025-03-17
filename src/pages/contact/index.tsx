import Form from "next/form";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-mycolor4 flex justify-center items-center py-8"
    >
      <div className="w-[75vw]">
        <h1 className="text-3xl font-semibold text-mycolor2 text-center">
          Contact!
        </h1>
        <div className="grid grid-cols-2 p-4">
          <div className="flex flex-col justify-center items-center">
            <p className="text-mycolor1 text-2xl font-semibold mb-4">
              Get In Touch!
            </p>
            <p>facebook</p>
            <p>instagram</p>
            <p>linked</p>
            <p>x</p>
            <p>thread</p>
            <p>discord</p>
          </div>
          <Form
            className="text-sm flex flex-col mt-4 w-full gap-2"
            action="https://api.web3forms.com/submit"
            formMethod="POST"
          >
            <p className="self-center text-lg text-mycolor1 text-center border-b-2 border-b-mycolor1 mb-3 w-[200px]">Send me a message!</p>
            <input
              type="hidden"
              name="access_key"
              value="b3bbce48-e7dd-432f-a9db-96dd89ca92d2"
            />
            <label className="text-base text-mycolor2">Your Name:</label>
            <input
              type="text"
              name="name"
              className="bg-transparent border-b border-b-mycolor1 text-mycolor2 focus:outline-none"
              required
            />
            <label className="text-base text-mycolor2">
              Your Email Adress:
            </label>
            <input
              type="text"
              name="email"
              className="bg-transparent border-b border-b-mycolor1 text-mycolor2 focus:outline-none"
              required
            />
            <label className="text-base text-mycolor2">Your Message:</label>
            <textarea
              className="h-[200px] bg-transparent border-b border-b-mycolor1 text-mycolor2 focus:outline-none"
              name="message"
            ></textarea>
            <button
              className="self-center border-2 border-mycolor1 text-mycolor2 text-base font-semibold w-32 px-4 py-1 rounded-lg mt-2 hover:bg-mycolor1 hover:text-mycolor4"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
