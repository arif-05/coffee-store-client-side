import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updatecoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo} = coffee;



    const handleUpdateCoffee = event =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const quantity = form.quantity.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
    
            const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
            console.log(updatedCoffee);
    
            // send data to the server
            fetch(`https://coffee-store-server-cdp35mh8t-arifs-projects-3008cba0.vercel.app/coffee/${_id}`,{
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedCoffee)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
          
            
    
    
    
        }


    return (
        <div>
          <div className="bg-[#F4F3F0] p-24 ">
        <h2 className="text-2xl font-extrabold ">Update coffee: {name} </h2>
      <form action="" onSubmit={handleUpdateCoffee}>
        {/* form row  name quantity*/}
        <div className="md:flex gap-4 space-y-3">
          <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">
                    Coffee Name
                </span>
            </label>
            <br />
            <label className="input-group">
                <input
                  type="text"
                  className="input w-full"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">
                    Available quantity
                </span>
            </label>
            <br />
            <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  className="input w-full"
                  placeholder="Available quantity"
                />
            </label>
          </div>
        </div>
        {/* supplier and taste */}
        <div className="md:flex gap-4 space-y-3">
          <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">
                    Supplier
                </span>
            </label>
            <br />
            <label className="input-group">
                <input
                  type="text"
                  className="input w-full"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter taste"
                />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">
                    Taste
                </span>
            </label>
            <br />
            <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  className="input w-full"
                  placeholder="Available quantity"
                />
            </label>
          </div>
        </div>
        {/* category and details */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">
                    Category
                </span>
            </label>
            <br />
            <label className="input-group">
                <input
                  type="text"
                  className="input w-full"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter Category"
                />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">
                    Details
                </span>
            </label>
            <br />
            <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  className="input w-full"
                  placeholder="details"
                />
            </label>
          </div>
        </div>
        {/* form photo url row row */}
        <div className="my-4">
          <div className="form-control w-full">
            <label className="label">
                <span className="label-text">
                    Photo URL
                </span>
            </label>
            <br />
            <label className="input-group">
                <input
                  type="text"
                  className="input w-full"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter Photo URL"
                />
            </label>
          </div>
         
        </div>
        <input type="submit" value="Update coffee" className="btn btn-block bg-secondary" />
      </form>
    </div>
        </div>
    );
};

export default Updatecoffee;