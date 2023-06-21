import React, { useState } from 'react' 
// import "Form.css"
function Fromcontrol() { 
 
    const [inputValue, setInputValue] = useState({ 
        fname: '' 
    }); 
 
    const [data, setData] = useState([]); 
 
    const HandleChange = (e) => { 
        let name = e.target.name; 
        let value = e.target.value; 
        setInputValue({ ...inputValue, [name]: value }) 
    } 
 
    const HandleSubmit = (e) => { 
        e.preventDefault(); 
        setData([...data, inputValue]) 
    } 
 
    return ( 
        <> 
            <div className="container"> 
                <h1 className='mb-4'>Comment Section</h1> 
                <form action="" onSubmit={HandleSubmit}> 
                    <input type="text" className='p-2 me-2' name='fname' value={inputValue.fname} onChange={HandleChange} /> 
                    <button className='btn btn-primary' type='submit'>Submit</button> 
                </form> 
            </div> 
 
            <div className='container'> 
                { 
                    data.length >= 1 ? 
                        data.map((d) => { 
                            return ( 
                                // <h2> 
                                //     { 
                                //         d.fname 
                                //     } 
                                // </h2> 
 
                                <div className="d-flex"> 
 
                                    <div class="feed_box mt-5"> 
                                        <div class="user_icon"> 
                                            
                                        </div> 
                                        
                                        <div class="feed_txt"> 
                                            <h1> 
                                                { 
                                                    d.fname 
                                                } 
                                            </h1> 
                                        </div> 
                                        
                                            <h5 className='pt-5'>
                                                Your Comment
                                            </h5>
                                        
                                    </div> 
 
                                </div> 
 
 
                            ) 
                        }) 
                        : 
                        "" 
                } 
            </div > 
        </> 
    ) 
} 
 
export default Fromcontrol