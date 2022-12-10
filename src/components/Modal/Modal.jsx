import { Button, Field } from "components";
import { Big_ArrowLeft, Big_ArrowDown } from "assets/image";
import { menu } from "constant";
import { useStateContext } from "contexts/ContextProvider";
import { useEffect } from "react";

export const Modal = () => {
  const { idFood, itemSelect, setItemSelect } = useStateContext();

  useEffect(() => {
    selector();
  }, [idFood]);

  const selector = () => {
    Object.entries(menu).map(([id, item]) => {
      if (id === idFood) {
        setItemSelect(item);
      }
    });
  };

  return (
    <div className="modal">
      <div className="modal_title">
        <img className="modal_img" src={itemSelect.image_2} alt="" />
        <div className="modal_title_content">
          <h4 className="title_titr">{itemSelect.title}</h4>
          <p className="title_content">
            در صورتیکه هر کدام از مواد اولیه در لیست را در خانه موجود ندارید، با
            علامت زدن آنها و سپس ارسال لیست مواد اولیه به شماره همراه مورد نظر،
            لیست خرید خود را تهیه کنید.
          </p>
          <Button
            text="اطلاعات بیشتر"
            type="neutral_white"
            size="xLarge"
            iconL={Big_ArrowLeft}
            share=""
            Click={() => {
              console.log("اطلاعات بیشتر clicked");
            }}
          />
        </div>
      </div>
      <div className="modal_notif">
        <Button
          text=""
          type="neutral_white"
          Click={() => {
            console.log("clicked");
          }}
          size="small"
          iconL={Big_ArrowDown}
        />
        <p className="notif_content">
          در صورتیکه هر کدام از مواد اولیه در لیست را در خانه موجود ندارید، با
          علامت زدن آنها و سپس ارسال لیست مواد اولیه به شماره همراه مورد نظر،
          لیست خرید خود را تهیه کنید.
        </p>
      </div>
      <div className="modal_materials">
        {itemSelect.materials &&
          Object.entries(itemSelect.materials).map((item, index) => (
            <Field key={index} material={item} />
          ))}
      </div>
      <div className="modal_contact">
        <p className="modal_contact_content">
          شماره همراه موردنظر را برای ارسال چک لیست پخت و پز وارد کنید:
        </p>
        <input
          type="text"
          placeholder="09036428822"
          name="tel"
          className="modal_contact_input"
        />
        <Button
          text="ورود"
          type="primary"
          Click={() => console.log("ورود clicked")}
          size="xLarge"
        />
      </div>
    </div>
  );
};
