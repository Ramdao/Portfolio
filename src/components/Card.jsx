
export default function Card({title,text,children}) {
    return(
        <>
        
        <div className="about-Container" >
         <h1>{title}</h1>
         <div className="about-text">
         <p>{text} </p>
         {children}
         </div>   
         </div>
        

        </>
    )

}