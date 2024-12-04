// import React from 'react';
// import Swal from 'sweetalert2'

// const AddCoffee = () => {

//     const handleAddCoffee = e => {
//         e.preventDefault();

//         const name = e.target.name.value;
//         const chef = e.target.chef.value;
//         const supplier = e.target.supplier.value;
//         const taste = e.target.taste.value;
//         const category = e.target.category.value;
//         const details = e.target.details.value;
//         const photo = e.target.photo.value;

//         const newCoffee = { name, chef, supplier, taste, category, details, photo }
//         console.log(newCoffee)

//         // send data to the server and database
//         fetch('http://localhost:5000/coffee', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newCoffee)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     console.log('successfully added');
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Coffee added successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Ok'
//                     });
//                     e.target.reset();
//                 }
//             })

//     }

//     return (
//         <div className='lg:w-3/4 mx-auto'>
//             <div className="text-center p-10">
//                 <h1 className="text-5xl font-bold">Add Coffee!</h1>
//                 <p className="py-6">
//                     Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem
//                     quasi. In deleniti eaque aut repudiandae et a id nisi.
//                 </p>
//             </div>
//             <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
//                 <form onSubmit={handleAddCoffee} className="card-body">
//                     {/* form first row */}
//                     <div className='flex flex-col lg:flex-row gap-5'>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input type="text" name='name' placeholder="coffee name" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">Chef</span>
//                             </label>
//                             <input type="text" name='chef' placeholder="chef name" className="input input-bordered" required />
//                         </div>
//                     </div>
//                     {/* form second row */}
//                     <div className='flex flex-col lg:flex-row gap-5'>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">Supplier</span>
//                             </label>
//                             <input type="text" name='supplier' placeholder="coffee supplier" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">Taste</span>
//                             </label>
//                             <input type="text" name='taste' placeholder="taste name" className="input input-bordered" required />
//                         </div>
//                     </div>
//                     {/* form third row */}
//                     <div className='flex flex-col lg:flex-row gap-5'>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">Category</span>
//                             </label>
//                             <input type="text" name='category' placeholder="coffee Category" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">Details</span>
//                             </label>
//                             <input type="text" name='details' placeholder="Coffee Details" className="input input-bordered" required />
//                         </div>
//                     </div>


//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Photo URL</span>
//                         </label>
//                         <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

//                     </div>
//                     <div className="form-control mt-6">
//                         <button className="btn btn-primary">Add Coffee</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddCoffee;





import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log('successfully added');
          Swal.fire({
            title: 'Success!',
            text: 'Coffee added successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="bg-[#f4f3f0] py-10">
      <div className="lg:w-3/4 mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#374151] mb-4">Add New Coffee</h1>
          <p className="text-sm text-[#6b7280] max-w-xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="card bg-base-100 w-full shadow-lg p-8 rounded-lg">
          <form onSubmit={handleAddCoffee}>
            {/* Form rows */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text font-medium">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <button className="btn bg-[#D2B48C] text-white hover:bg-[#c3a07c]">
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
