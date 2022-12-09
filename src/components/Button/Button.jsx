export const Button = ({ text, type, Click, size, iconR, iconL, share }) => {
  const btn = () => {
    if (iconL) {
      return (
        <>
          <label className={share !=="" ? "lable_share" : "lable_btn"}>{text}</label>
          <img className="icon iconL" src={iconL} alt="icon" />
        </>
      );
    }
    if (iconR) {
      return (
        <>
          <img className="icon iconR" src={iconR} alt="icon" />
          <label className={share !== "" ? "lable_share" : "lable_btn"}>{text}</label>
        </>
      );
    } else {
      return text;
    }
  };

  return (
    <button
      className={`btn btn_${type} btn_${size}`}
      onClick={({ id }) => Click()}
    >
      {btn()}
    </button>
  );
};
