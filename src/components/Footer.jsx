import React, {useState} from 'react';

export default function Footer(){
    const [mail, setMail] = useState("")
    const [subject, setSubject] = useState("")
    const [text, setText] = useState("")

    /*const submit = async() => {
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: true,
            auth: {
              user: testAccount.user,
              pass: testAccount.pass,
            },
          });

          await transporter.sendMail({
            from: mail,
            to: "broskoadam@gmail.com", 
            subject: subject, 
            text: text,
            html: subject,
          });
    }*/

    return(
        <>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="150">
            <div className="container mx-auto text-center pb-5 my-10">
                <div className="grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div>
                        <form method="post" action="">
                        <h1>Contact</h1>
                        <input disabled="true" placeholder="Your mail" className="border-solid border-2 mr-2 rounded-full p-3 text-center blur:border-orange-500" type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
                        <input disabled="true" placeholder="Subject" className="border-solid border-2 rounded-full p-3 text-center blur:border-orange-500" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea disabled="true" rows="8" cols="50" placeholder="Message" className="border-solid border-2 rounded-xl p-3 blur:border-orange-500 mt-2" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        <div>
                        <button disabled="true" className='bg-sky-400 px-10 py-5 rounded-full shadow-xl mt-2 text-white font-sans font-xl'>Send</button>
                        </div>
                        </form>
                    </div>
                    <div>

                        <div className='mt-20 pt-10'>
                            <h1 className="mb-2">Follow me</h1>
                        </div>
                            <a href="https://www.linkedin.com/in/adam-brosko-a90785243/"><button onClick={() => {}} type="button" className="shadow-inner"><i className="fa fa-linkedin-square" style={{"transform": "scale(2)", color: "#1aa3ff", fontWeight: "bold"}}></i></button></a>
                    
                    </div>
                </div>
                <div style={{marginTop: 70}}>
                    <span>Copyright <i>&#169;</i> 2023</span>
                </div>
            </div>
        </div>
        </>
    )
}