import { useReducer } from "react"

const initialState={
    step:1,
    isSubmitted:false,
    formData:{
        name:"",
        email:"",
        username:"",
        password:""
    }
}


function reducer(state,action){
switch(action.type){
    case "UPDATE_FIELD":
        return{
            ...state,
            formData:{
                ...state.formData,
                [action.field]:action.value
            }
        }

        case "NEXT_STEP":
            return{
                ...state,
                step:state.step+1
            }

            case "PREVIOUS_STEP":
                return{
                    ...state,
                    step:state.step-1,
                }
                 case "SUBMIT_FORM":
                    return {
                          ...state,
                           isSubmitted: true,
                     };
                case "RESET_FORM":
                    return initialState
                    
                default:
                        return state;
}
}

function Form(){
const [state,dispatch]=useReducer(reducer,initialState)
const{step,isSubmitted,formData}=state




const handlechange=(e)=>{
dispatch({
    type:"UPDATE_FIELD",
    field:e.target.name,
    value:e.target.value
})
}

const handlesubmit=(e)=>{
dispatch({type:"SUBMIT_FORM"})
}

return(
    <div>
        <h2>MULTI STEP REGISTRATION FORM</h2>
        {isSubmitted?(
            <div>
                <h3>Form Submitted Succesfully</h3>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset Form
          </button>
            </div>
            ) : (
        <>
          {/* ----------- Step 1 ----------- */}
          {step === 1 && (
            <div>
              <h3>Step 1: Personal Details</h3>

              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handlechange}
              />
              <br /><br />

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handlechange}
              />
              <br /><br />

              <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
                Next
              </button>
            </div>
          )}

          {/* ----------- Step 2 ----------- */}
          {step === 2 && (
            <div>
              <h3>Step 2: Account Details</h3>

              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handlechange}
              />
              <br /><br />

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handlechange}
              />
              <br /><br />

              <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                Previous
              </button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => dispatch({ type: "NEXT_STEP" })}
              >
                Next
              </button>
            </div>
          )}

          {/* ----------- Step 3 ----------- */}
          {step === 3 && (
            <div>
              <h3>Step 3: Review & Submit</h3>

              <p><b>Name:</b> {formData.name}</p>
              <p><b>Email:</b> {formData.email}</p>
              <p><b>Username:</b> {formData.username}</p>
              <p><b>Password:</b> {formData.password}</p>

              <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                Previous
              </button>

              <button
                style={{ marginLeft: "10px" }}
                onClick={handlesubmit}
              >
                Submit
              </button>
            </div>
          )}
        </>
      )}
        
    </div>
)
}
export default  Form;

