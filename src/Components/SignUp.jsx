import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SignUp = () => {

  const {createUser} = useContext(AuthContext);
    
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
        .then(result => {
          console.log(result.user);
          // new user is created

          const createAt = result.user?.metadata?.creationTime;


          const user = { email, createAt: createAt};
          fetch("http://localhost:5000/user",{
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
           if(data.insertedId){
            console.log('user added successfully');
           }
          })
        })
        .catch(error => {
          console.error("Error creating user:", error);
        });
    }





    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            
          </div>
          <form onSubmit={handleSignUp} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" 
                name="email"
                className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type="password"
                name="password"
                className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Sign Up</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignUp;