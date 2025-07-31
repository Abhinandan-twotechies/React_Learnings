function Cookies() {

    return (
        <>
            <div className="w-80 h-80 bg-gray-700 rounded-xl text-white">
                <div className=" flex justify-between p-2 text-center font-bold rounded-tl-xl rounded-tr-xl bg-gray-500 text-xl">
                    <h1>🍪 Cookies</h1>
                    <button className="bg-gray-400 text-black px-2 py-1 text-sm rounded-sm cursor-pointer hover:bg-red-700 hover:text-white">X</button>
                </div>
                <div className="p-4 mb-3 mt-2">
                    <p> The message displayed on a website that informs users about the use of cookies on the site., as well as options for users to accept, reject, or manage their use.</p>
                </div>
                <div className=" flex justify-evenly p-2">
                    <button className="bg-gray-800 hover:bg-gray-900  px-4 py-1 rounded-sm cursor-pointer">Accept All</button>
                    <button className="bg-gray-800 hover:bg-gray-900  px-4 py-1 rounded-sm cursor-pointer">Reject All</button>
                </div>
                <div className=" text-center">
                    <button className="bg-gray-800 hover:bg-gray-900 w-59 py-1 rounded-sm cursor-pointer">Customise..</button>
                </div>

            </div>

        </>
    )

}

export default Cookies;