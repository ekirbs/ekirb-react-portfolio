import React, { useState } from 'react';

import "./style.css";

import { checkPassword, validateEmail } from "../../utils/helpers";

export default function Contact() {

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  return (
    <div className="cardCard">
      <h1 className="cardHeading">Contact Me</h1>
      {/* <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> */}
      <p className="cardContent">
        `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?`
      </p>
    </div>
    // <div>
    //   <h1>Contact Page</h1>
    //   <p>
    //     Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
    //     molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
    //     magna a ultrices. Aenean pellentesque placerat lacus imperdiet
    //     efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
    //     mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
    //     posuere, eget tristique dui dapibus. Maecenas fermentum elementum
    //     faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
    //     ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
    //     dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
    //     conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
    //     rhoncus. Etiam vel condimentum magna, quis tempor nulla.
    //   </p>
    // </div>
  );
}