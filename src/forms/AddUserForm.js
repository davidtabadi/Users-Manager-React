// get all imports needed
import React, { useState } from 'react'

// AddUserForm is Class with props (parameter), for adding new user first we initialize user with initialFormState = { id: null, name: '', username: '' }, with the useState we setUser to the initialFormState and than the handleInputChange is a function with parameter name event (any name will be fine), const { name, value } = event.target and setUser with the setUser to [name]:value
const AddUserForm = props => {
        const initialFormState = { id: null, name: '', username: '' }
        const [user, setUser] = useState(initialFormState)

        const handleInputChange = event => {
                const { name, value } = event.target

                setUser({ ...user, [name]: value })
        }


        // here is what will be shown on the form
        return (
                <form
                        onSubmit={event => {
                                event.preventDefault()
                                if (!user.name || !user.username) return

                                props.addUser(user)
                                setUser(initialFormState)
                        }}
                >
                        <label>Name</label>
                        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
                        <label>Username</label>
                        <input type="text" name="username" value={user.username} onChange={handleInputChange} />
                        <button>Add new user</button>
                </form>
        )
}

export default AddUserForm