import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Layout, Menu, Icon, Breadcrumb} from 'antd';
import './home.less';

const {Header, Footer, Content, Sider} = Layout;
const {SubMenu} = Menu;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="home">
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Router>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                className="menu"
                            >
                                <Menu.Item key="1">
                                    <Link to="/">Home</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/activities">Activities</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/about">About</Link>
                                </Menu.Item>
                            </Menu>
                        </Router>
                    </Header>

                    <Content style={{padding: '0 50px'}}>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{padding: '24px 0', background: '#fff'}}>
                            <Sider style={{width: '200px', background: '#fff'}}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{height: '100%'}}
                                >
                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <Icon type="user" />
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="1">option 1</Menu.Item>
                                        <Menu.Item key="2">option 2</Menu.Item>
                                        <Menu.Item key="3">option 3</Menu.Item>
                                        <Menu.Item key="4">option 4</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={
                                            <span>
                                                <Icon type="laptop" />
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="1">option 1</Menu.Item>
                                        <Menu.Item key="2">option 2</Menu.Item>
                                        <Menu.Item key="3">option 3</Menu.Item>
                                        <Menu.Item key="4">option 4</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content
                                style={{padding: '0 28px', minHeight: 280}}
                            >
                                Content
                            </Content>
                        </Layout>
                    </Content>

                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default Home;
