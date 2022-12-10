export const Field = ({ material }) => {
  return (
    <div className="fields">
      <label className="materials_content">
        <input
          className="materials_chk"
          type="checkbox"
          name="material"
          value={material[1]}
        />
        {material[0]}
      </label>
      <p className="amount">{material[1]}</p>
    </div>
  );
};
