import rates from "../rates";
const Devise = ({
  nameInput,
  valueInput,
  fonctionInput,
  nameSelect,
  fonctionSelect,
}) => {
  const deviseRate = Object.keys(rates);
  const tauxRate = Object.values(rates);
  return (
    <div className="toConvert">
      <input
        type="number"
        name={nameInput}
        value={valueInput}
        onChange={fonctionInput}
      />
      <select name={nameSelect} onChange={fonctionSelect}>
        {deviseRate.map((devise, index) => {
          return (
            <option key={devise} value={tauxRate[index]}>
              {devise}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Devise;
