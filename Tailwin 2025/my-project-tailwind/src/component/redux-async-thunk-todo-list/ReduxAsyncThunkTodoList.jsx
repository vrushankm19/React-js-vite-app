import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/slices/thunkSlice";

function ReduxAsyncThunkTodoList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.thunk);

  if (loading) return (
    <div className="container mx-auto p-4">
      <p className="font-bold text-2xl">Loading...</p>
    </div>
  );
  if (error) return (
    <div className="container mx-auto p-4">
      <p className="font-bold text-2xl text-red-600">Error: {error}</p>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            📝 Redux Async Thunk Todo List
          </h1>

          <ul className="space-y-2 list-disc list-inside">
            {data &&
              data.map((item) => (
                <li
                  key={item.id}
                  className="bg-gray-50 px-4 py-2 rounded-md shadow-sm hover:bg-blue-50 transition"
                >
                  <span className="font-semibold text-blue-600">
                    #{item.id}
                  </span>{" "}
                  <span className="text-gray-700">{item.todo}</span>
                </li>
              ))}
          </ul>

          {data.length === 0 && (
            <div className="mt-6 text-center">
              <p className="text-gray-500 mb-3">
                No todos found. Fetch them now!
              </p>
              <button
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                onClick={() => dispatch(fetchUsers())}
              >
                🔄 Refresh Todos
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ReduxAsyncThunkTodoList;
