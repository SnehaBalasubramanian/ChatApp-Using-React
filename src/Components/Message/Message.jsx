import React,{useState,useEffect} from 'react'
import './Message.css'
const Message = ({particularuserdetails,setIstrue}) => {
  const [inputarray, setInputarray] = useState("");
    const [arr, setArr] = useState([]);
    console.log(inputarray)
    console.log(arr);
    useEffect(() => {
        
    }, [arr]);

    function storingdata() {
        setArr([...arr, { id: arr.length, values: inputarray }]);
        setInputarray("");
    }

    function deleteprogram(ss) {
        console.log(ss);
        let removeddata = arr.filter((dd) => dd.id !== ss.id);
        setArr(removeddata);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            storingdata();
        }
    }

  return (
    <div className='mess'>
      <div className='me1'>
      <i class="fa-solid fa-arrow-left sneha" onClick={()=>setIstrue(false)}></i>
     
      <img src={particularuserdetails.image} alt=""/>
     <b> {particularuserdetails.username}</b>
     
      <i class="fa-solid fa-video ico1"></i>
      <i class="fa-solid fa-phone ico2"></i>
      <i class="fa-solid fa-ellipsis-vertical ico3"></i>
      
      </div>
     

      <div className='inputname d-flex align-items-end'>
       
       <div className='message'>
        <div className='delt'>
      {
                arr.map((ss) => (
                    <div key={ss.id}>
                      <div className='me  align-items-center'>
                        <div className='app'>
                        <p className='three'>{ss.values}</p>
                        </div>
                        <i class="fa-solid fa-trash" onClick={() => deleteprogram(ss)}></i>
                        </div>
                    </div>
                ))
            }
            </div>
            
            <div className='test d-flex ms-5'>
              <div className='inp'>
            <input type='text' placeholder='Type your message...' value={inputarray}
            onChange={(event) => setInputarray(event.target.value)}
            onKeyDown={handleKeyDown} 
            />
            </div>
            <div className='inp2'>
            <i class="fa-solid fa-paper-plane" onClick={()=>storingdata()}></i>
            </div>
            </div>
            </div>
            
          
        
      </div>
    </div>
  )
}

export default Message
