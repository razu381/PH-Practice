import { deleteUser, getUsers } from "@/redux/features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Users() {
  let users = useSelector(getUsers);
  let dispatch = useDispatch();
  console.log(users);
  return (
    <div>
      <h2 className="text-center font-bold py-5">Users</h2>

      <div className="grid grid-cols-3 gap-5 py-10">
        {users.map((user) => (
          <div
            key={user.email}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow relative"
          >
            {/* Delete Icon at top-right */}
            <button
              onClick={() => dispatch(deleteUser(user.email))}
              className="absolute top-5 right-5 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors"
              title="Delete user"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600 uppercase">
                {user.name[0]}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">{user.name}</h3>
            <p className="text-gray-500 mb-1">{user.email}</p>
            <span className="text-sm text-gray-700">Age: {user.age}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
