import React, {useState} from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Index = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [valid, setValid] = useState();
  const [expiry, setExpiry] = useState();
  const [cvv, setCvv] = useState()
  return (
    <div className="lg:flex flex-row gap-10 justify-center items-center h-screen">
      <div>
        <div className="w-full max-w-xs px-8 pt-8">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              नाम 
              </label>
              <input onChange={(e)=>{setName(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              काड नम्बर 
              </label>
              <input onChange={(e)=>{setNumber(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Number" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              मान्य
              </label>
              <input onChange={(e)=>{setValid(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Valid" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              म्याद समाप्ति
              </label>
              <input onChange={(e)=>{setExpiry(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Expiry" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              सिसिभी
              </label>
              <input onChange={(e)=>{setCvv(e.target.value)}} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div className="flex items-center justify-between">
              <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={toPdf} type='button'>Download</button>}
              </Pdf>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 pcoderclub Corp. All rights reserved.
          </p>
        </div>
      </div>
      {/* card component */}
      
      <div ref={ref}>
        <div className="bg-white shadow-md rounded pt-6 pb-8 mb-4 ">
          {/* <!-- component --> */}
          <div className="bg-white h-full cursor-pointer flex justify-center items-center">
            <div className="space-y-16 px-8 ml-8">
              <div className="w-96 h-56  m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform ease-out duration-500 hover:scale-110">

                <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/>

                  <div className="w-full px-8 absolute top-8">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-light">
                          Name
                        </p>
                        <p className="font-medium tracking-widest">
                          {name}
                        </p>
                      </div>
                      <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                    </div>
                    <div className="pt-1">
                      <p className="font-light">
                        Card Number
                      </p>
                      <p className="font-medium tracking-more-wider">
                        {number}
                      </p>
                    </div>
                    <div className="pt-6 pr-6">
                      <div className="flex justify-between">
                        <div className="">
                          <p className="font-light text-xs">
                            Valid
                          </p>
                          <p className="font-medium tracking-wider text-sm">
                            {valid}
                          </p>
                        </div>
                        <div className="">
                          <p className="font-light text-xs">
                            Expiry
                          </p>
                          <p className="font-medium tracking-wider text-sm">
                            {expiry}
                          </p>
                        </div>

                        <div className="">
                          <p className="font-light text-xs">
                            CVV
                          </p>
                          <p className="font-bold tracking-more-wider text-sm">
                            {cvv}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index