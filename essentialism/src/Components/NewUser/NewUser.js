import React from "react";
import { Link } from "react-router-dom";
import {Button} from '../Styles';

const NewUser = () => {
    return (
      <div>
        <h2>Welcome to the Essentialism App</h2>
        <p>
          To get started, you will select your primary values
          We prvided a list of default values to help you to get started.
        </p>
        <p>
          After selecting your values, head on over to the projects page
          to get started aligning your values and with your actions.
        </p>
        <Link to="/new-user/default-values">
          <Button>Continue</Button>
        </Link>
      </div>
    );
  };

export default NewUser;