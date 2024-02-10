
import { Link } from "react-router-dom"

const SignIn = ({setPages ,page ,formData ,setFormData ,SetAccountType}) => {

 

    function IndividualHandler(){
      SetAccountType("Individual");
      setPages((prev)=>prev+1)
    }

    function BusinessHandler(){
      SetAccountType("Business")
      setPages((prev)=>prev+1)
    }
   

  return (
    <div className="vw-100">
       <p className="text-end" style={{color:"#8692A6" ,fontSize:"18px" }}>Already have an account? <Link className="fw-bold text-decoration-none" to="/">Sign In</Link></p>
        <div className="w-75 logincontainer">
          <h1 className="fw-bold logh1" style={{fontSize:"30px" ,marginTop:"135px"}}> Join Us!</h1>
          <p  style={{fontSize:"18px" , fontWeight:"400", color:"#8692A6" ,lineHeight:"28px"}}>To begin this journey, tell us what type of account you’d be opening.</p>
          <div  style={{maxWidth:"500px"}} className="d-flex flex-column gap-3 mt-5">
              <button   className="d-flex align-items-center justify-content-around gap-4 text-start py-4 px-4 rounded-1 join_btn"  onClick={IndividualHandler}>
                  <div><svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 0L49.7275 17.9656L40.2824 47.0344H9.71758L0.272532 17.9656L25 0Z" fill="#1565D8"/>
                    <path   d="M18.7204 28.8871C19.5018 28.1057 20.5616 27.6667 21.6667 27.6667H28.3333C29.4384 27.6667 30.4982 28.1057 31.2796 28.8871C32.061 29.6685 32.5 30.7283 32.5 31.8333V33.5C32.5 33.9602 32.1269 34.3333 31.6667 34.3333C31.2064 34.3333 30.8333 33.9602 30.8333 33.5V31.8333C30.8333 31.1703 30.5699 30.5344 30.1011 30.0656C29.6323 29.5967 28.9964 29.3333 28.3333 29.3333H21.6667C21.0036 29.3333 20.3677 29.5967 19.8989 30.0656C19.4301 30.5344 19.1667 31.1703 19.1667 31.8333V33.5C19.1667 33.9602 18.7936 34.3333 18.3333 34.3333C17.8731 34.3333 17.5 33.9602 17.5 33.5V31.8333C17.5 30.7283 17.939 29.6685 18.7204 28.8871Z" fill="white"/>
                    <path  d="M24.9999 19.3333C23.6192 19.3333 22.4999 20.4526 22.4999 21.8333C22.4999 23.214 23.6192 24.3333 24.9999 24.3333C26.3806 24.3333 27.4999 23.214 27.4999 21.8333C27.4999 20.4526 26.3806 19.3333 24.9999 19.3333ZM20.8333 21.8333C20.8333 19.5321 22.6987 17.6667 24.9999 17.6667C27.3011 17.6667 29.1666 19.5321 29.1666 21.8333C29.1666 24.1345 27.3011 26 24.9999 26C22.6987 26 20.8333 24.1345 20.8333 21.8333Z" fill="white"/>
                    </svg>
                    </div>
                <div className="fw-medium" style={{fontSize:"16px"}}>Individual <div style={{fontSize:"14px", color:"#8692A6" ,fontWeight:"400"}}>Personal account to manage all you activities.</div> </div>
                  <div className="arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path   d="M10.5893 3.57741C10.2639 3.25198 9.73622 3.25198 9.41079 3.57741C9.08535 3.90285 9.08535 4.43049 9.41079 4.75592L13.8215 9.16667H4.16671C3.70647 9.16667 3.33337 9.53977 3.33337 10C3.33337 10.4602 3.70647 10.8333 4.16671 10.8333H13.8215L9.41079 15.2441C9.08535 15.5695 9.08535 16.0972 9.41079 16.4226C9.73622 16.748 10.2639 16.748 10.5893 16.4226L16.4226 10.5893C16.7481 10.2638 16.7481 9.73618 16.4226 9.41075L10.5893 3.57741Z" fill="#1565D8"/>
                  </svg>
                  </div>
                </button>

                <button   className="d-flex align-items-center justify-content-around  gap-4 text-start py-4 px-4 rounded-1 join_btn"  onClick={BusinessHandler}>
                    <div><svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.09543 18.2329L25 0.865247L48.9046 18.2329L39.7738 46.3344H10.2262L1.09543 18.2329Z" stroke="#1565D8" />
                    <path  d="M18.3333 22.6667C17.873 22.6667 17.4999 23.0398 17.4999 23.5V31.8333C17.4999 32.2936 17.873 32.6667 18.3333 32.6667H31.6666C32.1268 32.6667 32.4999 32.2936 32.4999 31.8333V23.5C32.4999 23.0398 32.1268 22.6667 31.6666 22.6667H18.3333ZM15.8333 23.5C15.8333 22.1193 16.9525 21 18.3333 21H31.6666C33.0473 21 34.1666 22.1193 34.1666 23.5V31.8333C34.1666 33.214 33.0473 34.3333 31.6666 34.3333H18.3333C16.9525 34.3333 15.8333 33.214 15.8333 31.8333V23.5Z" fill="#1565D8"/>
                    <path  d="M21.5655 18.3989C22.0343 17.9301 22.6702 17.6667 23.3333 17.6667H26.6666C27.3296 17.6667 27.9655 17.9301 28.4344 18.3989C28.9032 18.8677 29.1666 19.5036 29.1666 20.1667V33.5C29.1666 33.9602 28.7935 34.3333 28.3333 34.3333C27.873 34.3333 27.4999 33.9602 27.4999 33.5V20.1667C27.4999 19.9457 27.4121 19.7337 27.2558 19.5774C27.0996 19.4211 26.8876 19.3333 26.6666 19.3333H23.3333C23.1122 19.3333 22.9003 19.4211 22.744 19.5774C22.5877 19.7337 22.4999 19.9457 22.4999 20.1667V33.5C22.4999 33.9602 22.1268 34.3333 21.6666 34.3333C21.2063 34.3333 20.8333 33.9602 20.8333 33.5V20.1667C20.8333 19.5036 21.0966 18.8677 21.5655 18.3989Z" fill="#1565D8"/>
                    </svg>

                    </div>
                <div className="fw-medium" style={{fontSize:"16px"}}>Business <div style={{fontSize:"14px", color:"#8692A6" ,fontWeight:"400"}}>Own or belong to a company, this is for you.</div> </div>
                  <div className="arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path   d="M10.5893 3.57741C10.2639 3.25198 9.73622 3.25198 9.41079 3.57741C9.08535 3.90285 9.08535 4.43049 9.41079 4.75592L13.8215 9.16667H4.16671C3.70647 9.16667 3.33337 9.53977 3.33337 10C3.33337 10.4602 3.70647 10.8333 4.16671 10.8333H13.8215L9.41079 15.2441C9.08535 15.5695 9.08535 16.0972 9.41079 16.4226C9.73622 16.748 10.2639 16.748 10.5893 16.4226L16.4226 10.5893C16.7481 10.2638 16.7481 9.73618 16.4226 9.41075L10.5893 3.57741Z" fill="#1565D8"/>
                  </svg>
                  </div>
                </button>
             
          </div>
        </div>
    </div>
  )
}

export default SignIn