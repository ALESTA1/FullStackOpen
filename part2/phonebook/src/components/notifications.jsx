const Notif = ({message , style})=>{

    if(message==='')return (<></>)
    return (
        <>
            <div className={style}>
                {message}
            </div>
        </>
    )
}

export default Notif