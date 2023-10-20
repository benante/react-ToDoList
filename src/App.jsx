import "./styles.css"

export default function App() {
  return <form className="new-item-form" action="">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" name="" id="text" />
    </div>
    <button className="btn">Add</button>

  </form>
}