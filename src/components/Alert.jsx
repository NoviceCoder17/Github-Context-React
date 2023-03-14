function Alert(alert){
    return(
        <>
         {alert !== null && <p className={`alert-${alert.type}`}>{alert.msg}</p>}
        </>      
    )
}

export default Alert