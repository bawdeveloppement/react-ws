import React, { lazy, Suspense, useState }    from "react";

const SignIn = lazy(() => import("./Signin/Signin"));
const SignUp = lazy(() => import("./Signup/Signup"));

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);
    return <div className="bg-white self-center rounded h-full justify-center flex flex-col md:flex-none w-full md:w-1/2 lg:w-1/3 md:mx-auto px-4 py-2">
      { isLogin ? 
      <Suspense fallback="loading"><SignIn goToSignup={() => setIsLogin(false)}/></Suspense> : 
      <Suspense fallback="loading"><SignUp goToSignin={() => setIsLogin(true)}/></Suspense> }
    </div>
}

export default Auth;