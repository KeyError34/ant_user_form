import { useSelector } from 'react-redux';
import { List } from 'antd';
import UserItem from '../userItem';

function UserList() {
  const users = useSelector(state => state.users.users);

  return (
    <List
      bordered
      dataSource={users}
      renderItem={user => <UserItem key={user.id} user={user} />}
    />
  );
}

export default UserList;

