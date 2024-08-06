const Form = ({ onSubmit, nameValue, onChangeName, numValue, onChangeNum }) => {
    return (
      <form onSubmit={onSubmit}>
        <div>
          name: <input
            value={nameValue}
            onChange={onChangeName}
          />
        </div>
        <div>
          number: <input 
          value={numValue}
          onChange={onChangeNum}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

  export default Form