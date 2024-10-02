import UserForm from './components/userForm';
import UserList from './components/userList';
import { Layout, Typography } from 'antd';
function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ color: 'white', textAlign: 'center', fontSize: '24px' }}>
        <Typography.Title
          level={2}
          style={{ color: 'white', margin: 0, padding: '10px 0' }}
        >
          Users List
        </Typography.Title>
      </Header>
      <Content style={{ padding: '20px 50px', minHeight: '90vh' }}>
        <Typography.Title
          level={3}
          style={{ color: 'black', margin: 0, padding: '10px 0' }}
        >
          Add User
        </Typography.Title>
        <UserForm />
         <UserList/>
      </Content>

     
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: 'black',
          color: 'white',
          position: "fixed",
          bottom: '0',
          width:"100%"
        }}
      >
        ©2024 Created by Olha
      </Footer>
    </Layout>
  );
}

export default App;
