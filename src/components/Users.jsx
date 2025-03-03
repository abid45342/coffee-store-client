// components/Users.jx

import React, { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers  = useLoaderData();
    const [users,setUser]=useState(loadedUsers);
    console.log(users)
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // update the loaded coffee state
                            const remainingCoffees = users.filter(coffee => coffee._id !== _id);
                            setUser(remainingCoffees);

                        }
                    })

            }
        });
    }
    return (
        <div>
            <h2 className='text-3xl'>Users</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>

      
       {
        users.map(user=> 
            <tr className="hover" key={user._id}>
        <th >{user.name}</th>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td><button onClick={()=>{handleDelete(user._id)}}>X</button></td>
        
      </tr>
        )
       }

    </tbody>
  </table>
</div>

        </div>
    );
};

export default Users;