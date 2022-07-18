import React from 'react';
import { useQuery } from 'react-query';
import loader from '../../assets/images/22.gif';
import {ImBin} from 'react-icons/im';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllUsers = () => {

    const navigate = useNavigate();
    const {data:users,isLoading,refetch} = useQuery(['available'],()=>
    fetch("http://localhost:4000/user", {
        method: 'GET',
        headers: {
    'authorization':
    `Bearer ${localStorage.getItem('accessToken')}`       
        }     
    })
    .then(res=>{
        console.log(res)
        if(res.status ===401 || res.status===403) //checking if its unauthorized
        {
          signOut(auth);
          navigate('/'); //it unauthorized give back to homepage
        }
        return res.json()
      })
    )

    if(isLoading){
        return <div className='flex h-screen justify-center items-center'><img  src={loader} alt="loading" /></div>
    }

    const handleMakeAdmin = email =>{
        fetch(`http://localhost:4000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>{
            if(res.status ===401 || res.status===403) //checking if its unauthorized
            {
              toast.error('Failed to make an admin') //it unauthorized give back to homepage
            } 
           return res.json() //here we made res multiline so that we have to return the res.json()
        })
        .then(data =>{
            if(data.modifiedCount > 0) //if user is and admin, than modified count will 1, so checking modifiedCount > 0 means if the the is admin or not, if yes than other works done and if not will check the res.status from res.. we gave from backend,, and if it matches than give and error toast message. as other cases we dont signout admin and route back to homepage.. because.. in next.. we will private route the all users page only for admin,, so its not possible to a user access to this page whome is not an admin, if we signout than other admin job ,, admin cannot done. thats we are only using the toast message here.

            {
                refetch();
            toast.success(`Successfully ${email} has become an admin`);
            }
        })
    };

    return (
        <div>
            <h2>All users : {users?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>index</th>
        <th>User</th>
        <th>Make Admin</th>
        <th>Delete User</th>
      </tr>
    </thead>
    <tbody>
        {
            users?.map((user,index)=>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.email}</td>
                <td>
                    {
                        user.role !== 'admin' ? 
                        <button onClick={()=>handleMakeAdmin(user.email)} className="btn btn-xs">Make Admin</button>:
                        <button className="btn btn-xs btn-disabled">Admin</button>
                    }
                    </td>
                <td className='text-red-500 text-xl px-10'><ImBin/></td>

              </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;