import { Big_ArrowLeft, Share, Red_Circle } from "assets/image";
import { Button, Modal, Plate } from "components";
import { cookToday, voite } from "./constant";
import { useStateContext } from "contexts/ContextProvider";

function App() {
  const { modal, setModal, setItemSelect } = useStateContext();

  return (
    <div className="App">
     
      {modal && <Modal/>}
      <div
        className={modal ? "modal_dsp_block" : "modal_dsp_none"}
        onClick={(e) => {
          setModal(false);
          setItemSelect({})

        }}
      >
      </div>
      <h1>کمپین چی بپزم؟</h1>
      <section className="today">
        <div className="section_header">
          <div className="title_today_left">
            <p className="p_headr_date">1401/08/12</p>
            <Button
              text="اشتراک گذاری"
              type="primary"
              size="normal"
              iconR={Share}
              Click={() => {
                console.log("share it");
              }}
            />
          </div>
          <h2 className="title_today">امروز چی بپزم؟</h2>
        </div>
        <div className="today_plate">
          {Object.entries(cookToday).map(([title, meals], index) => (
            <Plate key={index} PlateTitle={title} meals={meals} tip="1" />
          ))}
        </div>
      </section>
      <section className="voiting">
        <div className="section_header">
          <div className="btn_header">
            <Button
              text="دعوت از دوستان برای شرکت در رای گیری"
              type="primary"
              size="medium"
              iconL={Big_ArrowLeft}
              share={true}
              Click={() => {
                console.log("share it");
              }}
            />
          </div>
          <div className="btn_header_res">
            <Button
              text="اشتراک گذاری"
              type="primary"
              size="normal"
              iconR={Share}
              share={true}
              Click={() => {
                console.log("share it");
              }}
            />
          </div>
          <div className="viote_title_content">
            <div className="voite_time">
              <div className="red_circl_time">
                <img className="red_circel" src={Red_Circle} alt="svg" />
                <p className="p_Time"> 3:42:23</p>
              </div>
              <p className="p_headr"> تا پایان رای گیری </p>
            </div>
            <h2 className="voite_title">رای گیری غذای فردا</h2>
          </div>
          <div className="viote_title_content_res">
            <h2 className="title_voite">رای گیری غذای فردا</h2>
            <div className="red_circl_time">
              <img className="red_circel" src={Red_Circle} alt="svg" />
              <p className="p_Time"> 3:42:23</p>
            </div>
          </div>
        </div>
        <div className="today_plate">
          {Object.entries(voite).map(([title, meals], index) => (
            <Plate key={index} PlateTitle={title} meals={meals} tip="2" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
