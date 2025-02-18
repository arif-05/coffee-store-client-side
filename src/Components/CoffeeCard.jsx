import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo} = coffee;

      const handleDelete = (_id) => {
        console.log(_id);
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
            // Swal.fire({
            //   title: "Deleted!",
            //   text: "Your file has been deleted.",
            //   icon: "success"
            // });
            console.log('Deleted successfully');
            fetch(`http://localhost:5000/coffee/${_id}`, {
              method: "DELETE",
            })
             .then((response) => response.json())
             .then((data) => {
               console.log(data);
               if(data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  const remaining = 
                  coffees.filter(cof => cof._id !== _id);
                  setCoffees(remaining);
               }
             });
          }
        });
      }



  return (
    <div className="card card-side shadow-sm p-3 bg-[#F5F4F1]">
      <figure>
        <img
          src={photo}
          alt="Movie"

        />
      </figure>
      <div className="card-body">

        <h2 className="card-title">Coffee Name: {name} </h2>
        <p className="font-bold">Quantity Available: {quantity}</p>
        <p className="font-bold">Supplier: {supplier}</p>
        <p className="font-bold">Taste: {taste}</p>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical mx-3 space-x-3 ">
            <button className="btn btn-secondary">View</button>
          <Link to={`/updateCoffee/${_id}`}>
          <button
             className="btn btn-primary">Update</button></Link>

            <button
              onClick={() => handleDelete(_id)}
             className="btn btn-error">X</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
