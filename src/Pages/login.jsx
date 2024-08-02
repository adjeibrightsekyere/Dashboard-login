import { useState } from "react";



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <div className="flex-col h-screen overflow-hidden">
            <div className="grid grid-cols-2">
                <div className="">

                </div>
                <div className=" border border-red-700 w-[672px] h-[960px] pt-9  ">
                    <div className="flex justify-between">
                        <h1 className="ml-2 font-krona font-normal text-3xl text-[#02208D]"> Orbut</h1>
                        <span className="flex gap-x-2 font-poppins">
                            <h1 className=" font-normal text-base text-[#4E4E4E]"> Don't have an account yet? </h1>
                            <div className=" border rounded-full w-36 font-medium h-12 text-center text-lg text-[#3F20FF]"> Sign up now</div>
                        </span>
                    </div>
                    <div className="flex justify-center mt-56 ">
                        <form className="flex flex-col gap-6">
                            <div className=" font-poppins">
                                <h1 className=" font-semibold text-4xl"> Welcome Back</h1>
                                <h2 className=" font-normal text-xl"> Sign in to manage your Campaigns</h2>
                            </div>
                            <div className="border rounded-lg border-[#858585] w-72 h-11 overflow-hidden ">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=" w-full h-full outline-none"
                                />
                            </div>
                            <div className="border rounded-lg border-[#858585] w-72 h-11 overflow-hidden">
                                <input
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className=" w-full h-full outline-none"
                                />
                            </div>
                            <div>
                                <button>Login</button>
                            </div>
                            <div>Forgot password?</div>

                        </form>
                    </div>


                </div>
            </div>

        </div>
    );
};
export default Login;