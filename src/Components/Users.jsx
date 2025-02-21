import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();

  return (
    <div>
      <h2>Users : {loadedUsers.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            {/* <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr> */}
          </thead>
          <tbody>



            {/* row 1 */}
            <tr>
             
              <td>Email</td>
              <td>Created At: </td>
              <td>Action</td>
            </tr>


          </tbody>
          {
            loadedUsers.map((user) => (
              <tr key={user._id}>
                
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                {/* <td>{user.favoriteColor}</td> */}
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  );
};

export default Users;
