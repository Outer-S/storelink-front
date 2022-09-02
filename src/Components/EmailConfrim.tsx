import {useParams,Link} from "react-router-dom"
import {useEffect,useCallback} from 'react'
import {confirmEmail} from '../api'

const EmailConfrim = () => {
  let {userId} = useParams();
  
  let confirmEmailAsync = useCallback(async()=>{
    console.log(userId);
    await confirmEmail(userId as string);   
  },[userId]);
  
  useEffect(()=>{
    confirmEmailAsync();
  },[]);

  return (
    <section className="h-screen bg-cover">
      <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl sm:text-3xl capitalize tracking-widest text-black">
            <span className="text-orange">Welcome</span>
          </h1>

          <p className="mt-6 lg:text-lg text-black">
            From here on , all your store needs are covered <br/>
            thank you for confirming your email
          </p>

          <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to='/sign-in' className="transform rounded-md bg-blue px-8 py-2 text-sm font-bold capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
              Login to your Store
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailConfrim;
