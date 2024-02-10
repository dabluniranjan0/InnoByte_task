import Pagination from "../components/Pagination"
import Saftyinfo from "../components/Saftyinfo"
import Savebtn from "../components/Savebtn"
import{toast} from "react-hot-toast"

const BankVerification = ({page ,PageTitle,setPages ,formData ,setFormData ,accountType}) => {

  function submitHandler(event){
      event.preventDefault()
      toast.success("Registered successfully !")
      const finalformdata ={
        ...formData,
        accountType
      }
      console.log(finalformdata)
  }
  return (
    <div className="w-100" >
      <div >
        <Pagination page={page} PageTitle={PageTitle} setPages={setPages}/>
      </div>
     

      <div style={{maxWidth:"500px"}}>
          <h2 style={{fontSize:"30px" ,marginTop:"78px" ,fontWeight:"700"}}>Complete Your Profile!</h2>
          <p style={{fontSize:"18px" , fontWeight:"400", color:"#8692A6" ,lineHeight:"28px"}}>For the purpose of industry regulation, your details are required.</p>
          <div style={{borderTop:"1px solid #F5F5F5", marginBottom:"24px"}}></div>
      </div>
     <div style={{maxWidth:"500px"}}>
        <form style={{fontWeight:"500"}} onSubmit={submitHandler} className="d-flex flex-column">
              <label style={{marginBottom:"94px"}}>
                <p style={{color:"#696F79"}}>Bank verification number (BVN)</p>
                <input
                  type="text"
                  placeholder="090912345567"
                  value={formData.bvn}
                  onChange={(event)=>
                    setFormData({...formData ,bvn: event.target.value})}
                    className="inputfield"
                />
              </label>

              <Savebtn /> 
          </form>
       
          <Saftyinfo/>
    </div>
    </div>
  )
}

export default BankVerification