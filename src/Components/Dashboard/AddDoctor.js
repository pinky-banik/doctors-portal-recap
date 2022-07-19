import React from 'react';

const AddDoctor = () => {
    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // const { register, formState: { errors }, handleSubmit } = useForm();

    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);

    // const [updateProfile, updating, uError] = useUpdateProfile(auth);

    // const [token] = useToken(user||gUser);

    // let signInError;
    // const navigate = useNavigate();


    // if (loading || gLoading || updating) {
    //     return <div className='flex h-screen justify-center items-center'><img  src={loader} alt="" /></div>
    // }

    // if(error || gError || uError){
    //     signInError= <p className='text-red-500'><small>{error?.message || gError?.message || uError.message }</small></p>
    // }
    // if(token){
    //     navigate('/');
    // }
    // const onSubmit =async data => {
    //     await createUserWithEmailAndPassword(data.email, data.password);
    //     await updateProfile({ displayName: data.name});
    //     // navigate('/appointment');
    // }
    return (
        <div>
            {/* <h2>Add a new doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-xs focus:outline-none"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-xs focus:outline-none"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <input
                        type="rext"
                        placeholder="speciality"
                        className="input input-bordered w-full max-w-xs focus:outline-none"
                        {...register("speciality", {
                            required: {
                                value: true,
                                message: 'Specialization is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                {signInError}
                <input className='btn w-full max-w-xs text-white' type="submit" value="ADD" />
            </form> */}
        </div>
    );
};

export default AddDoctor;