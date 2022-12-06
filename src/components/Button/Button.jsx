import "../../assets/style/index.css";

export const Button = ({text, type, Click, size, iconR, iconL}) => {
 
  return (
    <button className={`btn btn_${type} btn_${size}`} onClick={()=> Click()}>
      {
        iconR  ? <><img className="icon iconR" src={iconR} alt="icon"/>{text}</>
        : iconL ? <>{text}<img className="icon iconL" src={iconL} alt="icon" /></>
        : {text}
      }
      </button>
  );
}

