import React,{useEffect,useRef} from "react";

const UseRefBasics =()=>{
    const refContainer =useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(refContainer.current.value);
    };
    useEffect(() =>{
        console.log(refContainer.current);
        refContainer.current.focus();
    });

    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <h1>This is App</h1>
                <input type="text" ref={refContainer}/> 
            </div>
            <button type="submit">submit</button>
        </form>
        </>
    )
}
export default UseRefBasics;