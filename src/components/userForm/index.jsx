import { addUser } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Form as AntForm, Input, Button, notification } from 'antd';
import { uid } from 'uid';

function UserForm() {
  const [inputValues, setInputValues] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
  });

  const dispatch = useDispatch();

  function openNotification() {
    notification.success({
      message: 'User Added',
      description: 'A new user has been added successfully!',
      placement: 'topRight',
    });
  }

  function onSubmit() {
    const { userName, userAge, userEmail } = inputValues;

    if (userName.trim() && userAge.trim() && userEmail.trim()) {
      dispatch(
        addUser({
          id: uid(),
          userName,
          userAge,
          userEmail,
        })
      );

      setInputValues({
        userName: '',
        userAge: '',
        userEmail: '',
      });
      openNotification();
    }
  }

  function onInput(e) {
    const { name, value } = e.target;
    setInputValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <AntForm onFinish={onSubmit} layout="inline">
      <AntForm.Item>
        <Input
          name="userName"
          value={inputValues.userName}
          onChange={onInput}
          placeholder="Enter user name"
          style={{ margin: '15px 0' }}
        />
      </AntForm.Item>
      <AntForm.Item>
        <Input
          name="userAge"
          value={inputValues.userAge}
          onChange={onInput}
          placeholder="Enter user age"
          style={{ margin: '15px 0' }}
        />
      </AntForm.Item>
      <AntForm.Item>
        <Input
          name="userEmail"
          value={inputValues.userEmail}
          onChange={onInput}
          placeholder="Enter user email"
          style={{ margin: '15px 0' }}
        />
      </AntForm.Item>
      <AntForm.Item>
        <Button type="primary" htmlType="submit" style={{ margin: '15px 0' }}>
          Add User
        </Button>
      </AntForm.Item>
    </AntForm>
  );
}

export default UserForm;
