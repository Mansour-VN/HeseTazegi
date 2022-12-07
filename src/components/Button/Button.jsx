export const Button = ({text, type, Click, size, iconR, iconL}) => {
 
  return (
    <button className={`btn btn_${type} btn_${size}`} onClick={()=> Click()}>
      {
        iconR  ? <><img className="icon iconR" src={iconR} alt="icon"/><label className="btn_label">{text}</label></>
        : iconL ? <><label className="btn_label">{text}</label><img className="icon iconL" src={iconL} alt="icon" /></>
        : {text}
      }
      </button>
  );
}

