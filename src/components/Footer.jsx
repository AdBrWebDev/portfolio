import React, {useState} from 'react';

export default function Footer(){
    const [mail, setMail] = useState("")
    const [subject, setSubject] = useState("")
    const [text, setText] = useState("")

    return(
        <>
            <div className="container mx-auto text-center pb-5 my-10 divide-y">
                <div className="grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div>
                        <h1>Contact</h1>
                        <input placeholder="Your mail" className="border-solid border-2 mr-2 rounded-full p-3 text-center blur:border-orange-500" type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
                        <input placeholder="Subject" className="border-solid border-2 rounded-full p-3 text-center blur:border-orange-500" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea rows="8" cols="50" placeholder="Message" className="border-solid border-2 rounded-xl p-3 blur:border-orange-500 mt-2" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        <div>
                        <button className='bg-sky-400 px-10 py-5 rounded-full shadow-xl mt-2 text-white font-sans font-xl'>Send</button>
                        </div>
                    </div>
                    <div>

                        <div className='mt-20 pt-10'>
                            <h1 className="mb-2">Follow me</h1>
                        </div>
                            <a href="https://www.linkedin.com/in/adam-brosko-a90785243/"><button type="button" className="shadow-inner"><i className="fa fa-linkedin-square" style={{"transform": "scale(2)", color: "#1aa3ff", fontWeight: "bold"}}></i></button></a>
                    
                    </div>
                </div>
            </div>
                        
        </>
    )
}