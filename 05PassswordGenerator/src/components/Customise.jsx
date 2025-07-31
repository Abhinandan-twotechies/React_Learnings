function Customise() {
    return (
        <>
            <div className="w-100 h-160 bg-gray-700 rounded-xl text-white">
                <div className=" flex justify-between p-2 text-center font-bold rounded-tl-xl rounded-tr-xl bg-gray-500 text-xl">
                    <h1>🍪 Cookies</h1>
                    <button className="bg-gray-400 text-black px-2 py-1 text-sm rounded-sm cursor-pointer hover:bg-red-700 hover:text-white">X</button>
                </div>
                <div className="p-4 mb-3 mt-2">
                    <p>When you visit any of our websites, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you. Because we respect your right to privacy, you can choose not to allow some types of cookies. blocking some types of cookies may impact your experience of the site and the services we are able to offer.</p>
                </div>
                <div className=" text-left ml-5">
                    <button className="bg-gray-800 hover:bg-gray-900 w-50 py-1 rounded-sm cursor-pointer">Accept all cookies</button>
                </div>
                <div className="p-4 ">
                    <p className="font-semibold">Manages concent preferences ...</p>
                </div>
                <div className="border w-90 max-h-40 overflow-y-scroll ml-auto mr-auto p-3 rounded-sm flex flex-col gap-4">
                    <div className="flex justify-between border p-1">
                        <div className="flex gap-5">
                            <button className="bg-gray-400 px-1 text-black">+</button>
                            <p className="font-bold">Performance Cookies</p>
                        </div>
                        <input type="radio" />
                    </div>
                    <div className="flex justify-between border p-1">
                        <div className="flex gap-5">
                            <button className="bg-gray-400 px-1 text-black">+</button>
                            <p className="font-bold">Functional Cookies</p>
                        </div>
                        <input type="radio" />
                    </div>
                    <div className="flex justify-between border p-1">
                        <div className="flex gap-5">
                            <button className="bg-gray-400 px-1 text-black">+</button>
                            <p className="font-bold">Targeting Cookies</p>
                        </div>
                        <input type="radio" />
                    </div>
                </div>    

                <div className=" flex justify-evenly p-2">
                    <button className="bg-gray-800 hover:bg-gray-900  px-4 py-2 rounded-sm cursor-pointer">Nessesary cookie only</button>
                    <button className="bg-gray-800 hover:bg-gray-900  px-4 py-2 rounded-sm cursor-pointer">Confirm my cookies</button>
                </div>

            </div>
        </>
    )
}

export default Customise;