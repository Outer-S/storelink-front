import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import {registerUser, User,Store,Email,Password , SubscriptionTypes} from '../api'

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [storeName,setStoreName] = useState("");
  const [subscriptionType,setSubscriptionType] = useState(SubscriptionTypes.individual);
  const navigate = useNavigate();
  
  const send_registration = async (e:FormEvent) =>{
    e.preventDefault();
    let validated_email:Email;
    let validated_password : Password
    try{
      validated_email = new Email(email); 
      validated_password = new Password(password);
      validated_password.confirm_password(confirmPassword);      
    }
    catch (e){
      console.log(e);
      return;
    }
    const user = new User(validated_email,firstName,lastName,validated_password,false,false,undefined,[]);
    const store = new Store(storeName,subscriptionType);
    await registerUser(user,store);
    navigate("/sign-in",{replace:true});
  }

  return (
    <section className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-orange sm:text-3xl">
          Get started today
        </h1>
        <form
          action=""
          className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          onSubmit={send_registration}
        >
          <p className="text-lg text-center font-medium">
            Create your own account
          </p>
          <div>
            <label htmlFor="firstname" className="text-sm font-medium">
              Firstname
            </label>

            <div className="relative mt-1">
              <input
                value={firstName}
                type="text"
                id="firstname"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="ex : Imad"
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastname" className="text-sm font-medium">
              Lastname
            </label>

            <div className="relative mt-1">
              <input
                value={lastName}
                type="text"
                id="lastname"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="ex : Benli"
                onChange = {(e)=>setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>

            <div className="relative mt-1">
              <input
                value={email}
                type="email"
                id="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="iambenli@gmail.com"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>

            <div className="relative mt-1">
              <input
                value={password}
                type="password"
                id="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="c-password" className="text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <input
                value={confirmPassword}
                type="password"
                id="c-password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter password"
                onChange = {(e)=> setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="store" className="text-sm font-medium">
              Store Name
            </label>
            <div className="relative mt-1">
              <input
                value={storeName}
                type="text"
                id="store_name"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="ex:Balek hani"
                onChange={(e)=>setStoreName(e.target.value)}
              />
            </div>
          </div>
          <h1 className="text-sm font-medium">Subscription Type</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="relative">
              <input
                className="hidden group peer"
                type="radio"
                name="subscription"
                value={SubscriptionTypes.individual}
                id="personal_sub"
                checked = {subscriptionType === SubscriptionTypes.individual}
                onChange = {(e)=>setSubscriptionType(SubscriptionTypes.individual)}
              />

              <label
                className="block p-4 text-sm font-medium border border-gray-100 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
                htmlFor="personal_sub"
              >
                <span> Personal </span>
                <span className="block mt-1 text-xs text-gray-500">Free</span>
              </label>
            </div>

            <div className="relative">
              <input
                className="hidden group peer"
                type="radio"
                name="subscription"
                value={SubscriptionTypes.enterprise}
                id="enterprise_sub"
                checked= {subscriptionType === SubscriptionTypes.enterprise}
                onChange= {(e)=>setSubscriptionType(SubscriptionTypes.enterprise)}
              />

              <label
                className="block p-4 text-sm font-medium border border-gray-100 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
                htmlFor="enterprise_sub"
              >
                <span>Enterprise</span>

                <span className="block mt-1 text-xs text-gray-500">$ 5.99</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full px-5 py-3 text-sm font-medium text-white bg-blue rounded-lg"
          >
            Sign up
          </button>

          <p className="text-sm text-center text-gray-500">
            You already got an account?
            <Link className="underline" to="/sign-in">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
