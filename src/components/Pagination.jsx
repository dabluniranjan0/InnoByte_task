import { FaAngleLeft } from "react-icons/fa6";

const Pagination = ({page ,PageTitle,setPages}) => {
    
  function backHandler(){
    setPages((prev)=>prev-1)
  }
  return (
    <div   className="d-flex align-items-start justify-content-between w-100">
        <button className="backbtn" style={{fontWeight:"600" , color:"#8692A6" , fontSize:"16px"}} onClick={backHandler}><FaAngleLeft style={{marginRight:"8px"}}/>Back</button>

        <div className="text-end">
            <p style={{fontWeight:"500" , color:"#BDBDBD" , fontSize:"14px"}}>STEP 0{page}/03</p>
            <p style={{fontWeight:"600" , color:"#8692A6" , fontSize:"16px" , marginTop:"-16px"}}>{PageTitle[page]}</p>
        </div>
    </div>
  )
}

export default Pagination