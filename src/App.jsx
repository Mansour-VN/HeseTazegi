import { Big_ArrowLeft, Share } from "assets/image";
import { Button, Card, Plate } from "components";
import { useState } from "react";
import { cookToday, foods } from "./constant";

function App() {
  const [modal, setModal] = useState(false);

  const modalHandel = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <div className="App">
      <h1>کمپین چی بپزم؟</h1>
      <section className="today">
        <div className="section_header">
          <div className="title_today_l">
            <p className="p_headr">1401/08/12</p>
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
        <div className="todayPlate">
        {Object.entries(cookToday).map(([title, meals], index) => (
          <Plate
            key={index}
            PlateTitle={title}
            meals={meals}
            Click={modalHandel}
            tip='1'
          />
        ))}
        </div>
      </section>
      <section className="voiting">
        <div className="section_header">
          <Button
            text="دعوت از دوستان برای شرکت در رای گیری"
            type="primary"
            size="medium"
            iconL={Big_ArrowLeft}
            Click={() => {
              console.log("share it");
            }}
          />
        </div>
        <div className="todayPlate">
        {Object.entries(foods).map(([title, meals], index) => (
          <Plate
            key={index}
            PlateTitle={title}
            meals={meals}
            Click={()=>{console.log('clicked');}}
            tip="1"
          />
        ))}
        </div>
      </section>
    </div>
  );
}

export default App;
