import React from 'react';

import githubLogo from "./images/github-logo.jpg";
import linkedinLogo from "./images/linkedin-logo.jpg";

import "./style.css";

export default function Contact() {
  return (
    <div className="cardCard">
      <h1 className="cardHeading">Contact Me</h1>
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
      <section id="contact-me" class="contact-me-section">
        {/* I took out target="_blank" from the <a> links because I was getting terminal warnings...explore */}
        <a href="tel:5558675309">(555) 867-5309</a>
        <a href="mailto:erickirberger@gmail.com">erickirberger@gmail.com</a>
        <a href="https://github.com/ekirbs" target="_blank" rel="noreferrer"><img src={githubLogo} class="float-left zoom rounded-image" alt="GitHub logo."/></a>
        <a href="https://www.linkedin.com/in/eric-kirberger-866a853b/" target="_blank" rel="noreferrer"><img src={linkedinLogo} class="float-left zoom rounded-image" alt="Linkedin logo."/></a>
      </section>
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
