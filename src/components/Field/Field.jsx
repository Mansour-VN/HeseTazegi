export const Field = ({ item}) => {
  return (
    <div className="fields">
      {console.log(item)}
      {/* <div className="field_material">
        <input
          className="materials_chk"
          type="checkbox"
          name="material"
          value={`${item[1]}}`}
        />
        <p className="materials_content">{item[0]}</p>
      </div>
      <p className="amount">{item[1]}</p> */}
    </div>
  );
};
