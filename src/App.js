import './App.css';
import { Button, Input } from '@douyinfe/semi-ui';
import { Title } from '@douyinfe/semi-ui/lib/es/skeleton/item';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { useState } from 'react';
function App() {
  const [accountName, setAccountName] = useState();
  const [password, setPassword] = useState();
  const login = () => {
    new Promise((resolve, reject) => {
      let isSuccessful = Math.random() >= 0.5; // 随机成功或失败
      if (isSuccessful) {
        resolve({ success: true }); // 成功，调用resolve
      } else {
        reject({ msg: '密码错误', code: 1001 });
      }
    })
      .then(() => {
        console.log('跳转新页面');
      })
      .catch(error => {
        console.log('错误处理：', error);
      });
  };

  return (
    <>
      <Title>欢迎登录教师点名系统</Title>
      <Input
        value={accountName}
        placeholder={'请输入账号'}
        onChange={changeValue => {
          setAccountName(changeValue);
        }}
      />
      <Input
        value={password}
        placeholder={'请输入密码'}
        onChange={changeValue => {
          setPassword(changeValue);
        }}
      />
      <Button
        onClick={() => {
          login();
        }}
      >
        登录
      </Button>
      <Text>如果还没有账号请点击这里注册</Text>
    </>
  );
}

export default App;
