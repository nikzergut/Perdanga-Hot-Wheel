import React from 'react';
import styles from "./Template.module.css"
import { useState } from 'react';
import { Layout } from 'antd';
import { Menu } from 'antd';
import Wrapper from '../Wrapper/Wrapper'


const { Header, Footer, Content } = Layout;

const menuItems= [
  {
    label: "Jopochka",
    key: 'joppa',    
  },
  {
    label: "PAvel",
    key: 'pavel',    
  },
  {
    label: "Booba",
    key: 'booba',    
  }
]

const menuStyle = {
  backgroundColor:'#5A6772',
  flex: 1,  
  justifyContent:"center",
  
}
function Template(props) {
  const [currentMenuItem, setMenuItem] = useState('')
  const chooseMenuItem = (e) => {
    setMenuItem(e.key)
  }

  return (         
        <Layout>
            <Header className={styles.header}>
              <Menu style={menuStyle} onClick={chooseMenuItem} mode="horizontal" selectedKeys={[currentMenuItem]} items={menuItems}></Menu>
            </Header>
            <Content className={styles.content}>
              <Wrapper>{props.children}</Wrapper>
            </Content>
            <Footer className={styles.footer}>Made for Perdanga</Footer>
        </Layout>       
  )
}

export default Template
