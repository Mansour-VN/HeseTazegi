import { Big_ArrowLeft } from "assets/image";
import { Button } from "components";
export const VoiteCard = ({ image, title, voite, tag, Click }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card_img" />
      <h4 className="card_title">{title}</h4>
      <div className="card_content">
        <p className="card_voite">{`رای${voite}`}</p>
        <p
          className={`tag ${tag === "سریع" ? "speed" : "slow"}`}
        >{`غذای ${tag}`}</p>
      </div>
      <>
        <Button
          className="btn1"
          text="ثبت رای"
          type="neutral"
          size="large"
          Click={() => {
            console.log("clicked");
          }}
        />
        <Button
          className="btn2"
          text="اطلاعات بیشتر"
          type="neutral_white"
          size="large"
          iconL={Big_ArrowLeft}
          Click={Click}
        />
      </>
    </div>
  );
};
