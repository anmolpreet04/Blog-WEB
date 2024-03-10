import { React, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import "./Login.scss";
import { signUpuser } from '../../services/api.js'

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signUpUser = async () => {
    const response = await signUpuser({
      name: name,
      email: email,
      password: password
    });
    if (response) {
      setError('');
      setName('');
      setEmail('');
      setPassword('')
      setSignUp(false);
  } else {
      setError('Something went wrong! please try again later');
  }
  }

  const loginComponent = () => {
    return (
      <div>
        <h2 style={{ color: "#FFD700" }}>Sign In</h2>
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail" style={{ color: "#FFD700" }}>
              Username
            </Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" style={{ color: "#FFD700" }}>
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Form>
      </div>
    );
  };

  const signUpComponent = () => {
    return (
      <div>
        <h2 style={{ color: "#FFD700" }}>Register</h2>
        <Form className="form">
          <FormGroup>
            <Label for="exampleName" style={{ color: "#FFD700" }}>
              Full Name
            </Label>
            <Input
              type="name"
              name="name"
              id="name"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" style={{ color: "#FFD700" }}>
              Username
            </Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" style={{ color: "#FFD700" }}>
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Form>
      </div>
    );
  };

  return (
    <div className="bg-image">
      <div className="App">
        {signUp ? signUpComponent() : loginComponent()}
        <div className="btn-container">
          {signUp ?
          <Button className="btn-generic" onClick={signUpUser}>Submit</Button>
          :<Button className="btn-generic">Submit</Button>}
          <div className="or-label">OR</div>
          {signUp ? (
            <Button className="btn-generic" onClick={() => setSignUp(false)}>
              Already have an account
            </Button>
          ) : (
            <Button className="btn-generic" onClick={() => setSignUp(true)}>
              Create an account
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
