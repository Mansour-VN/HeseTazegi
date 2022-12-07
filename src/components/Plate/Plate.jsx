import { Card } from "components";
export const Plate = ({ PlateTitle, meals, Click, tip }) => {
  

  return (
    
    <div className="plate_plan">
      <div className="plate">
        <div className="plate_title">
          <h3 id="plate_title">{PlateTitle}</h3>
        </div>
        <div className="suggestion">
          {
            meals.map((item,index)=>{
              return(
                <Card key={index}
                  image={item.image_1}
                  title={item.title}
                  voite={item.voite}
                  tag={item.tag}
                  Click={Click}
                  tip={tip}
                />
              )
            })
          }
        </div>
      </div>
    </div> 
  );
};
