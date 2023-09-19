import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons"

const Header = () => {
  return (
    <div>
      <div className="Container-name">
        <h2>Santiago Carrizo</h2>
        <h3>Developer Full Stack</h3>
      </div>

      <div className="Container-header">
        <nav>
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Tecnologies</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div className="Container-info">
        <section>
          <article>
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              itaque doloremque corrupti accusamus eveniet eligendi, pariatur
              ipsam ipsum, quisquam voluptatem libero est a tempore illo
              voluptates, nostrum error. Dolor, quos.
            </p>
          </article>
          <article>
            <img src="" alt="" />
          </article>
        </section>
      </div>

      <div>
        <section>
          <h2>Skills</h2>
          <article>
            <div>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                corporis eum doloribus facere ipsam nostrum, veritatis nesciunt
                labore vitae illum animi?
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                corporis eum doloribus facere ipsam nostrum, veritatis nesciunt
                labore vitae illum animi?
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                corporis eum doloribus facere ipsam nostrum, veritatis nesciunt
                labore vitae illum animi?
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                corporis eum doloribus facere ipsam nostrum, veritatis nesciunt
                labore vitae illum animi?
              </p>
            </div>
          </article>
        </section>
      </div>
      <div>
        <section>
          <h2>Tecnologias</h2>
          <article>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Header;
