import React, { useReducer } from "react";

const LongForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    education: "",
    quantity: 0,
    feedback: "",
    term: true,
  };

  const reducer = (state, action) => {
    if (action.type === "INPUT") {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        className=" w-screen flex justify-center items-center overflow-auto"
        style={{ height: "650px" }}
      >
        <form
          className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between"
          onSubmit={submit}
        >
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={state.firstName}
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={state.lastName}
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={state.email}
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <h1 className="mb-3">Gender</h1>
            <div className="flex gap-3">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onClick={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                <label className="ml-2 text-lg" htmlFor="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onClick={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                <label className="ml-2 text-lg" htmlFor="female">
                  Female
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  onClick={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                <label className="ml-2 text-lg" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" htmlFor="education">
              Education
            </label>
            <select
              name="education"
              id="education"
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="underGrad">Under Graduate</option>
              <option value="graduate">Graduate</option>
            </select>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3">Number of PCs</label>
            <div className="flex justify-between items-center gap-2 ">
              <button className="bg-indigo-500 text-lg text-white rounded h-10 w-10 ">
                -
              </button>
              <div className="border flex-1 flex justify-center items-center h-10 rounded-md border-gray-300">
                <span className="text-lg">0</span>
              </div>
              <button className="bg-indigo-500 text-lg text-white rounded h-10 w-10">
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" htmlFor="feedback">
              Feedback
            </label>
            <textarea
              name="feedback"
              id="feedback"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex  w-full max-w-xs">
              <input className="mr-3" type="checkbox" name="term" id="terms" />
              <label htmlFor="terms">I agree to terms and conditions</label>
            </div>
            <button
              className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="shadow-lg p-10">
        First Name: {state.firstName}
        <br />
        Last Name: {state.lastName}
        <br />
        Email: {state.email}
        <br />
        Gender: {state.gender}
        <br />
        Education: {state.education}
        <br />
        Feedback: {state.feedback}
        <br />
        Quantity: {state.quantity}
        <br />
      </div>
    </>
  );
};

export default LongForm;