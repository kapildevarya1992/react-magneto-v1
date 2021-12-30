import "./RadioStyle.css"; 

export default function RadioInput(props) {

  const { handleChange, radioList } = props || {};

  return (
    <div className="control-group">
    {radioList?.length && radioList.map((item) => {
        const { id, label, checked } = item || {};
        return (
            <label class="container">
                <input
                type="radio"
                name="radio"
                id={id}
                onChange={handleChange}
                checked={checked}
                />
                {label}
                <span class="checkmark"></span>
            </label>
        )
       })}
    </div>
  );
}
