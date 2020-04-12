import React, { Component } from "react";
import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button
} from "adminlte-2-react";

const { Item } = Sidebar;

class HelloWorld extends Component {
  state = {};

  render() {
    return (
      <Content
        title="CodeInGrid"
        subTitle="Getting started with adminlte-2-react"
        browserTitle="Hello World"
      >
        <Row>
          <Col xs={6}>
            <Box
              title="My first box"
              type="primary"
              closable
              collapsable
              footer={<Button type="danger" text="Danger Button" />}
            >
              Hello World
            </Box>
          </Col>
          <Col xs={6}>
            <Box title="Another box">Content goes here</Box>
          </Col>
        </Row>
      </Content>
    );
  }
}

class Dashboard extends Component {
  sidebar = [<Item key="hello" text="Hello" to="/hello-world" />];

  render() {
    return (
      <AdminLTE
        title={["Cloud", "InGrid"]}
        titleShort={["Cl", "IG"]}
        theme="blue"
        sidebar={this.sidebar}
      >
        <HelloWorld path="/hello-world" />
      </AdminLTE>
    );
  }
}

export default Dashboard;
