import Form from 'next/form'

export default function Contact() {
    return (
        <div id="contact" className='bg-mycolor2 h-[100vh]'>
            <div className="flex flex-col items-center p-4">
                <h1 className='text-2xl text-mycolor1'>Contact Me!</h1>
                <div className="mt-4">
                    <img className='w-[100px]' src="/email.svg" alt="email-icon" />
                </div>
                <Form className='text-sm flex flex-col mt-4 w-[85vw] gap-2' action="https://api.web3forms.com/submit" formMethod="POST">
                    <input type='hidden' name="access_key" value="b3bbce48-e7dd-432f-a9db-96dd89ca92d2"/>
                    <label>Your Name:</label>
                    <input type="text" name="name" className="bg-mycolor4 text-mycolor2" required/>
                    <label>Your Email Adress:</label>
                    <input type="text" name="email" className="bg-mycolor4 text-mycolor2" required/>
                    <label>Your Message:</label>
                    <textarea className='h-[200px] bg-mycolor4 text-mycolor2' name="message"></textarea>
                    <button className='text-mycolor2 mt-2 w-24 self-center border border-mycolor4 bg-mycolor1 rounded-md hover:bg-mycolor3 hover:text-mycolor4' type='submit'>Submit</button>
                </Form>
            </div>
        </div>
    )
}