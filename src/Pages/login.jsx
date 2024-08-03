import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from '../slices/authSlice';
import { signin } from "../api/api";




function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('value:', email, password)
        if (validateEmail(email)) {
            if (password) {
                try {
                    const data = await signin(email, password);
                    console.log('Sign-in successful:', data);

                    dispatch(login({ email, password }));
                    setEmailError('');
                    console.log('to dashboard')
                    navigate('/dashboard');
                } catch (err) {
                    console.error('SignIn error:', err);
                    setError(err.message);
                }
                
            } else { 
                console.error('password missing');
            }

        } else {
            setEmailError('Incorrect email address');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const isFormValid = validateEmail(email) && password;

    return (
        <div className="flex-col h-screen overflow-hidden">
            <div className="grid grid-cols-2">
                <div className="">
                    <img src="/assets/happy.jpg" alt="" className="w-[672px] h-[700px] pt-4 pl-4 pb-10 rounded-3xl" />
                </div>
                <div className="  w-[672px]  pt-9  ">
                    <div className="flex justify-between">
                        <h1 className="ml-2 font-krona font-normal text-3xl text-[#02208D]"> Orbut</h1>
                        <span className="flex gap-x-2 font-poppins">
                            <h1 className=" font-normal text-base text-[#4E4E4E] mt-3"> Don't have an account yet? </h1>
                            <div className="flex border rounded-full w-36  h-12 ">
                                <h1 className="text-center mx-auto mt-2 text-lg text-[#3F20FF] font-medium">Sign up now</h1>
                            </div>
                        </span>
                    </div>
                    <div className="flex justify-center mt-36 ">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className=" font-poppins">
                                <h1 className=" font-semibold text-4xl text-center"> Welcome Back</h1>
                                <h2 className=" font-normal text-lg text-center"> Sign in to manage your Campaigns</h2>
                            </div>
                            <div className={`relative border rounded-lg  w-96 h-11 overflow-hidden ${emailError ? 'border-red-500' : 'border-[#858585]'} `}>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={` w-full h-full outline-none ${emailError ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-purple-600'} `}
                                />
                                {emailError && <p className="absolute bottom-0 left-0 text-red-500 text-sm">{emailError}</p>}
                            </div>
                            <div className="border rounded-lg border-[#858585]  h-11 overflow-hidden flex items-center">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className=" w-full h-full outline-none"
                                />
                                <button type="button" onClick={togglePasswordVisibility} className="text-[#3F20FF] px-10">
                                    {showPassword ? "Hide" : "show"}
                                </button>
                            </div>
                            <div className={`flex border  h-12 rounded-full ${isFormValid ? 'bg-[#3F20FF]' : 'bg-[#BFB5FF]'}`}>
                                <button
                                    type="submit"
                                    className="text-center mx-auto text-lg font-poppins font-medium text-white"
                                    disabled={!isFormValid}
                                >
                                    Login
                                </button>
                            </div>
                            <div className="font-poppins font-medium text-base text-[#3F20FF] text-center">Forgot password?</div>

                        </form>
                    </div>


                </div>
            </div>

        </div>
    );
};
export default Login;