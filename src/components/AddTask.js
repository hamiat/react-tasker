import { useState } from "react";



const AddTask = ( {onAdd} ) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return ( 
        <section>
            <form className='add-form' onSubmit={submitForm}>
                <div className="form-control">
                    <label>Task</label>
                    <input 
                    type="text" 
                    placeholder="Add Task" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label>Day and Time</label>
                    <input type="text" placeholder="Add Day and Time "
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
                </div>
                <div className="form-control form-control-check">
                    <label>Set Reminder</label>
                    <input 
                    type="checkbox"
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    checked={reminder} />
                </div>
            <button type="submit" 
            className="btn btn-block"
            >Save Task</button>
            </form>
        </section>
     );
}
 
export default AddTask;