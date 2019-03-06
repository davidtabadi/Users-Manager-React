// get all imports needed
import React, { useState, useEffect } from 'react'

// EditUserForm is Class with props (parameter), for adding user first we setUser to props.currentUser and with the useEffect we can do something like this: if setUser is props.currentUser return props because user did not changed
const EditUserForm = props => {
        const [user, setUser] = useState(props.currentUser)

        useEffect(
                () => {
                        setUser(props.currentUser)
                },
                [props]
        )
        // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

        // handles input change is a function and parameter event )any parameter will be fine) so we setUser with rhe event.target
        const handleInputChange = event => {
                const { name, value } = event.target

                setUser({ ...user, [name]: value })
        }


        // this is what is shown on the EditUserForm
        return (
                <form
                        onSubmit={event => {
                                event.preventDefault()

                                props.updateUser(user.id, user)
                        }}
                >
                        <label>Name</label>
                        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
                        <label>Username</label>
                        <input type="text" name="username" value={user.username} onChange={handleInputChange} />
                        <button>Update user</button>
                        <button onClick={() => props.setEditing(false)} className="button muted-button">
                                Cancel
      </button>
                </form>
        )
}

export default EditUserForm