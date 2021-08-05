import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ADD_POST } from '../../redux/types';



const CommonWall = (props) => {
  let history = useHistory();

  const [post, setPost] = useState({
    user: props.credentials?.user,
    token: props.credentials?.token,
    name: props.credentials?.user.name,
    lastName: props.credentials?.user.lastName,
    date: new Date(),
    title: "",
    content: "",
  });

  const [errors] = useState({
    eValidate: "",
  });

  // Handler to upgrade the input
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const doPost = async () => {
    let token = post.token;
    let user = post.user;

    let body = {
      title: post.title,
      content: post.content,
      userId: user.id,
      userName: post.name,
      lastName : post.lastName,
      date: post.date,
    };
    console.log(body);

    // Envío por axios
    axios
      .post("http://localhost:5000/post", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {

        props.dispatch({ type: ADD_POST, payload: res.data });

        //Reset form
        setPost({
          title: "",
          content: "",
        });

        setTimeout(() => {
          history.push("/commonwall");
        }, 250);
      })
      .catch((err) => {
        console.log("Err");
      });
  };

  return (
    <div className="card col-md-6 offset-md-3">
      <h1 className="common">NOTICIAS</h1>
      <div className="card-body">
        <div className="commonWall">
          <input
            type="text"
            className="form-control mb-2 border"
            name="title"
            onChange={handleChange}
            value={post.title}
            placeholder="Title"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <div className="form-floating">
            <textarea
              className="form-control border"
              name="content"
              onChange={handleChange}
              value={post.content}
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Post</label>
          </div>

          {/* <div class="input-group mb-3"> AQUI TENGO OTRO MODELO DE BOTON Y INPUT PARA CARAR ARCHIVO
            <button type="button" className="btn btn-outline-dark mt-4">To Post</button>
            <input type="file" className="form-control" id="inputGroupFile02"/>
          </div> */}
          <div class="input-group mt-4">
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={() => doPost()}
            >
              To Post
            </button>
            <div className="errorsText">{errors.eValidate}</div>
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              aria-label="Upload"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
}))(CommonWall);
