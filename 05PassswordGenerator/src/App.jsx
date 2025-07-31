import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import Cookies from './components/Cookies';
import Customise from './components/Customise';

function App() {
  const [length, setLength] = useState(8);
  const [ifchar, setIfchar] = useState(false);
  const [ifnum, setIfnum] = useState(false);
  const [password, setPassword] = useState("");
  const [cookie , setCookie] = useState(false)

  const passRef = useRef("");

  const passwordGenerator = useCallback(() => {
    // e.preventDefault();
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // if number exist 
    if (ifnum) {
      str += "0123456789";
    }

    //if special character 
    if (ifchar) {
      str += "!${@#&%*^~}"
    }
    // Generating the password 
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    // return pass;
    setPassword(pass);
    // console.log(pass);


  },);
//  [length, ifchar, ifnum, setPassword]
  // Calling the password generate function
  useEffect(() => {
    passwordGenerator();
  }, [ifnum, ifchar, length])

  // Copy Password 
  const copyPassword = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    const timer = setTimeout(() => {
      setCookie(true);
      console.log("Coookies");
      
    }, 3000);
  },[])


  return (
    <>
      <div className='relative w-screen h-screen bg-black flex flex-col items-center justify-center'>
        <div id='customiseUI' className='absolute top-10 left-15'>
          <Customise/>
        </div>
        <div id='cookieui' className='absolute bottom-10 right-10'>
          {cookie?<Cookies />:""}
        </div>
        <div id='passwordui'>
          <div className=' border-2 w-201 bg-gray-400 text-center rounded-tl-lg rounded-tr-lg'>
            <h1 className='text-black text-2xl mb-2'>Password Generator</h1>
          </div>
          <div className=' text-white bg-gray-600  h-32 items-center rounded-bl-lg rounded-br-lg p-2 w-201'>
            <div className='px-4 py-2 w-full mb-2'>
              <input
                defaultValue={password}
                ref={passRef}
                type="text" className='bg-white w-150 h-9.5 text-black border-0 px-2 font-bold' />
              <button
                onClick={copyPassword}
                className='bg-blue-500 text-white rounded-tr-lg rounded-br-lg px-10 py-2 cursor-pointer'>Copy</button>
            </div>
            <div className='flex justify-between px-4 w-150'>
              <div className='flex'>
                <input
                  value={length}
                  onChange={(e) => { setLength(e.target.value) }}
                  type="range" min="8" max="16" />
                <p className='text-lg ml-1 text-orange-400'>Length: {length}</p>
              </div>
              <div className='flex'>
                <input
                  onChange={() => setIfnum((prev) => (!prev))}
                  type="checkbox" />
                <p className='text-lg ml-1 text-orange-400'>Numbers</p>
              </div>
              <div className='flex'>
                <input
                  onChange={() => setIfchar((prev) => (!prev))}
                  type="checkbox" />
                <p className='text-lg ml-1 text-orange-400'>Special Character</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
