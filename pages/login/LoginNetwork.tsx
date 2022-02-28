import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import authService from "../../services/authService";

const LoginNetwork = () => {
    const [isLogin, setIsLogin] = useState(false)
    const handleLoginByGoogle = async () =>{
        window.open("https://bloggerapi1.herokuapp.com/auth/google", "_self")
    }
    return (
        <div className="flex p-3">
            <button className=" flex items-center gap-3 p-3 bg-indigo-500 rounded-lg text-white hover:bg-indigo-600" onClick={handleLoginByGoogle}>
                <FcGoogle className="bg-white rounded-full" size={25}/>
                <span>Đăng nhập với google</span>
            </button>
        </div>
    );
}

export default LoginNetwork;