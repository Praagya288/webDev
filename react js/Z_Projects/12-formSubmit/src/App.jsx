import { useState } from "react"

function App() {

    const[formData , setFormData] = useState( 
        {
          firstName : "" , 
          lastName : "" ,
          email : "" ,  
          comments : "" ,
          isVisible : true ,
          mode : "" ,
          favCar : "" ,
        }
    )

    // console.log(formData)
    
    function changeHandler(event){
      const {name ,value , checked , type} = event.target 
      setFormData(prevData => {
        return{
          ...prevData ,
          [name] : type === "checkbox" ? checked   : value
        }
      })
    }

        function submitHandle(event){
          event.preventDefault() ;
          console.log(formData)
        }

  return (
   <div className="App min-h-screen bg-gray-600 text-1xl" >
    <form onSubmit={submitHandle} >
<div>
<input
       type="text" 
       placeholder="first name"
       onChange={changeHandler}
       name="firstName"
       value={formData.firstName}
      />
<br/>
      <input
       type="text" 
       placeholder="last name"
       onChange={changeHandler}
       name="lastName"
       value={formData.lastName}
       />
<br/>
      <input
       type="email" 
       placeholder="email"
       onChange={changeHandler}
       name="email"
       value={formData.email}
       />
<br/>
      <textarea 
      onChange={changeHandler}
      placeholder="enter your comments"
      name="comments"
      value={formData.comments}
      ></textarea>
<br/>
      <input 
      type="checkbox"
      onChange={changeHandler}
      name="isVisible"
      id="isVisible"
      checked = {formData.isVisible}
      />
       <label htmlFor="isVisible">Interested ?</label>

</div>
      <br/>
      <input
      type="radio"
      onChange={changeHandler}
      name="mode"
      value= "online mode"
      id="online mode"
      checked = {formData.mode === "online mode"}
      // checked 
      />

      <label htmlFor="online mode">online mode</label>
<br/>
      <input
      type="radio"
      onChange={changeHandler}
      name="mode"
      value= "offline mode"
      id="offline mode"
      checked = {formData.mode === "offline mode"}
      />

      <label htmlFor="offline mode">offline mode</label>



      <select 
      onChange={changeHandler}
      name="favCar"
      id="favCar"
      value={formData.favCar}
      >

        <option value="scarpio">Scorpio</option>
        <option value="fartuner">fartuner</option>
        <option value="defender">defender</option>


      </select>

        <button className="bg-white">Submit</button>


    </form>
   </div>
  )
}

export default App
