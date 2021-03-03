import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { authActions } from '../../redux/_actions';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log('PROPS', this.props)
    this.props.logout();
    this.state = {
      submitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    this.setState({ submitted: true });
    const { email, password } = values;
    if (email && password) {
      this.props.login({ email, password });
    }
  }
  render() {
    const { loading } = this.props;
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          {loading &&
            <Loader />
            ||
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card-group mb-0">
                  <div className="card p-2">
                    <div className="card-block">
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.handleSubmit}
                      >
                        <Form.Item
                          name="email"
                          rules={[{ required: true, message: 'Please provide your email address!' }]}
                        >
                          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                          name="password"
                          rules={[{ required: true, message: 'Please provide your password!' }]}
                        >
                          <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Item>
                        <Form.Item>
                          <Link to="/forgot-password" className="btn-link">Forgot password?</Link>
                        </Form.Item>
                        <Form.Item>
                          <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                          <Link to="/register" className="btn btn-link">Register</Link>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                  <div className="card card-inverse card-primary py-3 hidden-md-down" style={{ width: 44 + '%' }}>
                    <div className="card-block text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type="button" className="btn btn-primary active mt-1">Register Now!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}


function mapState(state) {
  const { loading } = state.login;
  return { loading };
}

const actionCreators = {
  login: authActions.login,
  logout: authActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export default Login;
export { connectedLoginPage as Login };