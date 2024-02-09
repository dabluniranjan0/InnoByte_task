import Pagination from "../components/Pagination"
import { FcGoogle } from "react-icons/fc";

const PersonalInfo = ({page ,PageTitle ,showpassword, setShowpassword ,setPages ,formData ,setFormData ,accountType}) => {

  function submitHandler(event){
    setPages((prev)=>prev+1)
      event.preventDefault()
  }
  
  return (
    <div className="w-100 pe-5">
      <div >
         <Pagination page={page} PageTitle={PageTitle} setPages={setPages}/>
      </div>
      <div style={{maxWidth:"500px"}}>
          <h2 style={{fontSize:"30px" ,marginTop:"78px" ,fontWeight:"700"}}>Register {accountType} Account!</h2>
          <p style={{fontSize:"18px" , fontWeight:"400", color:"#8692A6" ,lineHeight:"28px"}}>For the purpose of industry regulation, your details are required.</p>
          <div style={{borderTop:"1px solid #F5F5F5", marginBottom:"24px"}}></div>
      </div>
     <div style={{maxWidth:"500px"}}>
        <form style={{fontWeight:"500"}} onSubmit={submitHandler} className="d-flex flex-column">
              <label>
                <p style={{color:"#696F79"}}>Your fullname*</p>
                <input
                  required
                  type="text"
                  placeholder="Enter fullname"
                  value={formData.fullname}
                  onChange={(event)=>
                    setFormData({...formData ,fullname: event.target.value})}

                    className="inputfield"
                />
              </label>

              <label>
                <p style={{color:"#696F79"}}>Email address*</p>
                <input
                  required
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(event)=>
                    setFormData({...formData ,email: event.target.value})}
                    className="inputfield"
                />
              </label>

              <label className="">
                <p style={{color:"#696F79"}}>Create password*</p>
                <div className="d-flex   passfield align-items-center justify-content-between inputfield">
                  
                    <input
                      required
                      type={showpassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={(event)=>
                        setFormData({...formData ,password: event.target.value})}
                        
                      
                    />
                 
                  <span onClick={()=>setShowpassword((prev)=>!prev)} style={{cursor:"pointer"}}>
                      {showpassword ? (<span>Hide</span>):(<span>Show</span>)}
                  </span>
                </div>
              </label>
              <label className="d-flex gap-2 align-items-center " style={{marginBottom:"39px"}}>

                  <input 
                  required
                  type="checkbox" 
                  
                  />
                  <span>I agree to terms & conditions</span>
              </label>
              <button className="regbtn" >Register Account</button>
          </form>
          
          <div className="line_container d-flex align-items-center">
                <div className="line1"></div>
                <div className="or">OR</div>
                <div className="line1"></div>
            </div>

            <div  style={{marginTop:"32px"}}>
                <button className="googlebtn d-flex  align-items-center justify-content-center gap-5"><FcGoogle style={{fontSize:"24px"}}/><span>Register with Google</span></button>
            </div>
     </div>
    </div>
  )
}

export default PersonalInfo