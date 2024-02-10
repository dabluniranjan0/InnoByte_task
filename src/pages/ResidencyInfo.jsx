import Pagination from "../components/Pagination"
import Saftyinfo from "../components/Saftyinfo"
import Savebtn from "../components/Savebtn"


const ResidencyInfo = ({page ,PageTitle ,setPages ,formData ,setFormData}) => {

    function submitHandler(event){
          event.preventDefault()
          setPages((prev)=>prev+1)
    }

  return (
    <div  className="w-100">
      <div >
        <Pagination page={page} PageTitle={PageTitle} setPages={setPages}/>
      </div>

      <div style={{maxWidth:"500px"}}>
          <h2 style={{fontSize:"30px" ,marginTop:"78px" ,fontWeight:"700"}}>Complete Your Profile!</h2>
          <p style={{fontSize:"18px" , fontWeight:"400", color:"#8692A6" ,lineHeight:"28px"}}>For the purpose of industry regulation, your details are required.</p>
          <div style={{borderTop:"1px solid #F5F5F5", marginBottom:"24px"}}></div>
      </div>
     <div style={{maxWidth:"500px"}}>
        <form  style={{fontWeight:"500"}} onSubmit={submitHandler} className="d-flex flex-column">
              <label>
                <p style={{color:"#696F79"}}>Phone number</p>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={formData.phonenumber}
                  onChange={(event)=>
                    setFormData({...formData ,phonenumber: event.target.value})}
                    className="inputfield"
                />
              </label>

              <label>
                <p style={{color:"#696F79"}}>Your address</p>
                <input
                  type="text"
                  placeholder="Please enter address"
                  value={formData.address}
                  onChange={(event)=>
                    setFormData({...formData ,address: event.target.value})}
                    className="inputfield"
                />
              </label>

              <label >
                <p style={{color:"#696F79"}}>Country of residence</p>
                  <select className="inputfield" value={formData.residence}
                  onChange={(event)=>
                    setFormData({...formData ,residence: event.target.value})}
                  >
                      <option value="" >Please select</option>
                      <option value="India">India</option>
                      <option value="Australia">Australia</option>
                  </select>

              </label>
              <Savebtn />
          </form>
          
          <Saftyinfo/>
     </div>
    </div>
  )
}

export default ResidencyInfo