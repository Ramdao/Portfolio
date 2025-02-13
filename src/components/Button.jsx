export default function Button({children,href}){
    var handleClick =()=>{
        window.open(href, "_blank", "noopener,noreferrer");
    }
    return <>
    <button className="button" onClick={handleClick}>{children}</button>
    
    </>
}