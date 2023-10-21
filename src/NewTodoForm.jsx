import { useState } from "react"
import PropTypes from 'prop-types';

NewTodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired, // Use the appropriate PropTypes type (func) and any additional validation you need.
};
export function NewTodoForm({ onSubmit }) {

    const [newItem, setNewItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form" action="">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={e => { setNewItem(e.target.value) }} type="text" name="" id="text" />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}