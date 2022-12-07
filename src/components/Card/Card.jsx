import { ArrowLeft, Big_ArrowLeft } from "assets/image";
import { Button } from "components";
export const Card = ({ image, title, voite, tag, Click, tip }) => {
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
      {(tip === "2" || tip === 2 )? (
        <>
          <Button
          key='1'
            className="btn1"
            text="ثبت رای"
            type="neutral"
            size="large"
            Click={()=>{console.log('clicked');}}
          />
          <Button
          key='2'
            className="btn2"
            text="اطلاعات بیشتر"
            type="neutral_white"
            size="large"
            iconL={Big_ArrowLeft}
            Click={Click}
          />
        </>
      ) : (
        <Button
        key='3'
          className="btn3"
          text="مشاهده مواد اولیه"
          type="neutral"
          size="large"
          iconL={ArrowLeft}
          Click={Click}
        />
      )}
    </div>
  );
};
