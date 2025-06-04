

// import React, {  useState, useContext } from 'react';
// import { Link,  useNavigate } from 'react-router';
// import { AuthContext } from '../provider/AuthProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import Navbar from '../Components/NavBar';

// const RegBox = () => {
  
//   const [showPass, setShowPass] = useState(false);
//   const { createUser, setUser, updateUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const name = e.target.name.value;
//     const photo = e.target.photo.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const passVerify = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


//     if (!passVerify.test(password)) {
//       toast.error("Password must be at least 6 characters long and include at least one uppercase and one lowercase letter.");
//       return; 
//     }

//     // console.log({ name, photo, email, password });

//     createUser(email, password)
//       .then(result => {
//         const user = result.user;
//         updateUser({ displayName: name, photoURL: photo })
//           .then(() => {
//             setUser({ ...user });
//             navigate('/');
//           })
//           .catch(error => {
//             // console.error('Update user error:', error);
//             setUser(user);
//           });
//         toast.success('Registration successful');
//       })
//       .catch(error => {
//         // console.error('Create user error:', error);
//         toast.error(error.message);
//       });
//   };

//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="hero   min-h-screen">
//         <div className="card border-2 border-green-800 my-10 text-green-800 p-5 bg-base-300 rounded-2xl w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <h1 className="text-4xl text-green-800  mb-10 font-bold text-center">Register!</h1>
//             <form onSubmit={handleRegister} className="fieldset">
//               <label className="label font-semibold">Name</label>
//               <input type="text" required name='name' className="input text-black border-2 border-green-800   font-semibold" placeholder="Enter your name" />
//               <label className="label  font-semibold">Photo URL</label> 
//               <input type="text" required name='photo' className="input text-black border-2 border-green-800  font-semibold" placeholder="Photo URL" />
//               <label className="label font-semibold">Email</label>
//               <input type="email" required name='email' className="input text-black border-2 border-green-800  font-semibold" placeholder="Email" />
//               <label className="label font-semibold">Password</label>
//               <div className='relative'>
//                 <input type={showPass ? 'text' : 'password'} required name='password' className="input text-black border-2 border-green-800  font-semibold" placeholder="Password" />
                
//               </div>
//               <button type='submit' className="btn btn-accent mt-4">Register</button>
//               <ToastContainer />
             
//               <p className='font-semibold text-center mt-3'>
//                 Already Have An Account? <Link to='/login'><span className='text-blue-500 font-semibold'>Login</span></Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default RegBox;
