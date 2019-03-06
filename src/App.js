// get all imports needed, the react and reactDom 
// and import also the useState and Fragment 
import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

// instead of Class Component App we use the const App with functional component with Hook state, it is just like Class so we define data, attributes and methods (functions)

const App = () => {

  // Data - we are creating some dummy data for example, this will initialize our array of users [] for initial data
  const usersData = [
    { id: 1, name: 'David', username: 'david123' },
    { id: 2, name: 'Haim', username: 'haim234' },
    { id: 3, name: 'Ilan', username: 'ilan345' },
  ]

  // initializing user object 
  const initialFormState = { id: null, name: '', username: '' }

  // Setting state with useState 

  // useState for setting array of users [] with usersData, first initialized as userDate as we created initial dummy data array [] of 3 users (David, Haim and Ilan) above
  const [users, setUsers] = useState(usersData)

  // useState for setting current user, currentUser is initialized first with initialFormState = { id: null, name: '', username: '' } and then we can set the currentUser
  const [currentUser, setCurrentUser] = useState(initialFormState)

  // useState for editing user we declare boolean setEditing to false at first and for editing the user we pass this parameter as setEditing = true with the users attributes for updating user (edit) 
  const [editing, setEditing] = useState(false)

  // CRUD operations - create, read, update, delete

  // addUser(user) is a function that inserts new user to the users array [] and generates incrementing id as users.length + 1, when user created, the function will set the users array [] with the new user inserted
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  // deleteUser(id) is function that removes user by id , first we serEditing to false, and than it will set users array [] with all users except for the user deleted - the user.filter searces users in the users array [] and returns all users which user.id is not equal to id so basicely it returns new users array [] without this user that removed from the users array []
  const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))
  }

  // updateUser(id, updatedUser) is a function receives paramters id and updatedUser and first setEditing to false and than setUsers as users array [], it searches the id of the user in the users array [] and replaces the user found with the updatedUser and setUsers maps all the users []
  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  // efitRow(user) is a function that simply for updateing we first setEdditing to true so we can update the user and we setCurrentUser with the attributes id, name, username
  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  // this is what will be shown in the App on localhost://3000
  return (
    <div className="container">
      <h1>Manage Users </h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
              <Fragment>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App