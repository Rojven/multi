import { memberFields } from '../services/data';

const Settings = ({ memberData, setmemberData }) => {

  const onInputChange = (e) => {
      const { name, value } = e.target;
      setmemberData({
          ...memberData,
          [name]: value
      })
  }
  
  return (
    <div className="settings">
      <form>
        <div className="flex flex_column">
          {memberFields.map(({inputName, labelText}, i) => 
          <div className="flex" key={i}>
            <label htmlFor={inputName}>{labelText}</label>
            <input type="text" name={inputName} onChange={onInputChange} value={Object.values(memberData)[i]}/>
          </div>
          )}
          <p>*fill in the fields to add a new member</p>
        </div>
      </form>
    </div>
  )
}

export default Settings