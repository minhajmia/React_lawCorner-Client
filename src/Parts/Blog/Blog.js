import React from "react";
import useTitle from "../../Hooks/useTitle";
import img from "../../Utilities/Images/Blog.png";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm ">
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              1. Difference between SQL and NoSQL ?
            </div>
            <div className="collapse-content">
              <p>
                Both SQL and NoSQL Databases have their set of advantages and
                disadvantages. SQL databases can be considered when you are
                looking for data consistency, reliability, integrity, and when
                the data is structured. NoSQL databases are a much better option
                if the data is large, semi-structured, or unstructured and you
                are looking for faster storage and retrieval of data.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              2. What is JWT, and how does it work ?
            </div>
            <div className="collapse-content">
              <p>
                JSON Web Token (JWT) is an open standard (RFC 7519) that defines
                a compact and self-contained way for securely transmitting
                information between parties as a JSON object. This information
                can be verified and trusted because it is digitally signed. JWTs
                can be signed using a secret (with the HMAC algorithm) or a
                public/private key pair using RSA or ECDSA. Although JWTs can be
                encrypted to also provide secrecy between parties, we will focus
                on signed tokens. Signed tokens can verify the integrity of the
                claims contained within it, while encrypted tokens hide those
                claims from other parties. When tokens are signed using
                public/private key pairs, the signature also certifies that only
                the party holding the private key is the one that signed it.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              3. What is the difference between javascript and NodeJS ?
            </div>
            <div className="collapse-content">
              <p>
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed. Node.
                js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              4. How does NodeJS handle multiple requests at the same time ?
            </div>
            <div className="collapse-content">
              <p>
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <img className="max-h-96" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
