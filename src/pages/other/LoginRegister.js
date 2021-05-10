import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { useAuth } from "../../contexts";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase.js";

const LoginRegister = ({ location }) => {
  const history = useHistory();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const provider = new auth.GoogleAuthProvider();
      const hasAuth = await auth().signInWithPopup(provider);
      login(hasAuth);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Bookier | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <div className="login-register-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <Tab.Container defaultActiveKey="login">
                  <Nav variant="pills" className="login-register-tab-list">
                    <Nav.Item>
                      <Nav.Link eventKey="login">
                        <h4>Login</h4>;
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="register">
                        <h4>Register</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="login">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form>
                            <div className="button-box">
                              <button onClick={handleLogin}>
                                <span>Login With Google</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form>
                            <input
                              type="text"
                              name="user-name"
                              placeholder="Username"
                            />
                            <input
                              type="password"
                              name="user-password"
                              placeholder="Password"
                            />
                            <input
                              name="user-email"
                              placeholder="Email"
                              type="email"
                            />
                            <div className="button-box">
                              <button type="submit">
                                <span>Register</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object,
};

export default LoginRegister;
