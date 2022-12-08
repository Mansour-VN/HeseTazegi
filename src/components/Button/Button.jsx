export const Button = ({ text, type, Click, size, iconR, iconL }) => {
  const btn = () => {
    if (iconL) {
      return (
        <>
          <label className="btn_label">{text}</label>
          <img className="icon iconL" src={iconL} alt="icon" />
        </>
      );
    }
    if (iconR) {
      return (
        <>
          <img className="icon iconR" src={iconR} alt="icon" />
          <label className="btn_label">{text}</label>
        </>
      );
    } else {
      return(text)
    }
  };

  return (
    <button className={`btn btn_${type} btn_${size}`} onClick={() => Click()}>
      {btn()}
    </button>
  );
};
