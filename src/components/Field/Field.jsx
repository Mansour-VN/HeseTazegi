export const Field = ({ material}) => {
  return (
    <div className="fields">
      <div className="materials">
        <input
          className="materials_chk"
          type="checkbox"
          name="material"
          value={`${material.name}}`}
        />
        <p className="materials_content">{material.name}</p>
      </div>
      <p className="amount">{material.amount}</p>
    </div>
  );
};
