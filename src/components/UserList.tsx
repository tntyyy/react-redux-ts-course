import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creator/user';

const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user);

  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (loading) {
    return <h1>Загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user => 
        <div key={user.id}>{user.name}</div>  
      )}
    </div>
  )
}

export default UserList