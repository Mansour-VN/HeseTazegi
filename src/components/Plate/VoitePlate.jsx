import { VoiteCard } from "components";
export const VoitePlate = ({ PlateTitle, meals, Click }) => {
  

  return (
    
    <div className="today_plan">
      <div className="plate">
        <div className="plate_title">
          <h3 id="plate_title">{PlateTitle}</h3>
        </div>
        <div className="suggestion">
          {
            meals.map((item,index)=>{
              return(
                <VoiteCard key={index}
                  image={item.image_1}
                  title={item.title}
                  voite={item.voite}
                  tag={item.tag}
                  Click={Click}
                />
              )
            })
          }
        </div>
      </div>
    </div> 
  );
};
