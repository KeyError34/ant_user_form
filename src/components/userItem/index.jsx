import { useState } from 'react';
import { List, Button, Modal, Input, Form } from 'antd';
import { useDispatch } from 'react-redux';
import { editUser, deleteUser } from '../../redux/slices/userSlice'; // Экшен для удаления

function UserItem({ user }) {
  const dispatch = useDispatch();
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false); // Для удаления
  const [editValues, setEditValues] = useState({
    userName: user.userName,
    userAge: user.userAge,
    userEmail: user.userEmail,
  });


  const showEditModal = () => {
    setIsEditModalVisible(true);
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleEdit = () => {
    dispatch(
      editUser({
        id: user.id,
        userName: editValues.userName,
        userAge: editValues.userAge,
        userEmail: editValues.userEmail,
      })
    );
    setIsEditModalVisible(false);
  };


  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
    setIsDeleteModalVisible(false);
  };

  const onInput = e => {
    const { name, value } = e.target;
    setEditValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <List.Item
        actions={[
          <Button type="primary" onClick={showEditModal}>
            Edit
          </Button>,
          <Button type="primary" danger onClick={showDeleteModal}>
            Delete
          </Button>,
        ]}
      >
        <span>{user.userName}</span>
      </List.Item>


      <Modal
        title="Edit User"
        open={isEditModalVisible}
        onCancel={handleEditCancel}
        footer={[
          <Button key="back" onClick={handleEditCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleEdit}>
            Edit
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input
              name="userName"
              value={editValues.userName}
              onChange={onInput}
            />
          </Form.Item>
          <Form.Item label="Age">
            <Input
              name="userAge"
              value={editValues.userAge}
              onChange={onInput}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              name="userEmail"
              value={editValues.userEmail}
              onChange={onInput}
            />
          </Form.Item>
        </Form>
      </Modal>


      <Modal
        title="Delete User"
        open={isDeleteModalVisible}
        onCancel={handleDeleteCancel}
        footer={[
          <Button key="cancel" onClick={handleDeleteCancel}>
            No
          </Button>,
          <Button key="submit" type="primary" danger onClick={handleDelete}>
            Yes
          </Button>,
        ]}
      >
        <p>Are you sure you want to delete this user?</p>
      </Modal>
    </>
  );
}

export default UserItem;
