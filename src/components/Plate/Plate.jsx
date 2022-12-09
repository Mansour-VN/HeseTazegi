import { Card } from "components";
import { useStateContext } from "contexts/ContextProvider";
export const Plate = ({ PlateTitle, meals, tip}) => {
  const { modal,setModal,setIdFood,idFood } = useStateContext();

  return (
    <div className="plate">
      <div className="plate_title">
        <h3 id="plate_title">{PlateTitle}</h3>
      </div>
      <div className="suggestion">
        {Object.entries(meals).map(([index, item]) => {
          
          return (
            <Card
              key={index}
              image={item.image_1}
              title={item.title}
              voite={item.voite}
              tag={item.tag}
              tip={tip}
              Click={()=>{
                setIdFood(item.id)
                setModal(!modal)
                console.log(idFood);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
