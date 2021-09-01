/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
//ACTIONS OF RDX
import { createPostAction } from "../../Actions/PostActions";

const MakePost = (props) => {
  // const history = useHistory();
  const [post] = useState({
    user: props.credentials?.user,
    token: props.credentials?.token,
    name: props.credentials?.user.name,
    lastName: props.credentials?.user.lastName,
    date: new Date(),
    title: "",
    content: "",
  });

  //To create a function
  const dispatch = useDispatch();

  //Access to the state
  const loading = useSelector((state) => state.data.loading);

  //Here we call the action from PostActions
  const addPost = (body) => dispatch(createPostAction(body));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const SubmitPost = (e) => {
    e.preventDefault();

    //Check the form
    if (title.trim() === "" || content.trim() === "") {
      return;
    }

    let user = post.user;
    let token = post.token;

    // Create the post
    addPost({
      title,
      content,
      userName: post.name,
      lastName: post.lastName,
      date: new Date(),
      userId: user.id,
      token: token,
    });

    setTitle("");
    setContent("");
  };
  const [errors] = useState({
    eValidate: "",
  });

  return (
    <div className="card carta col-md-6 offset-md-3">
      <h1 className="common">NOTICIAS</h1>
      <div className="card-body">
        <div className="commonWall">
          <input
            type="text"
            autofocus="autofocus"
            className="form-control mb-2 border"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <div className="form-floating">
            <textarea
              className="form-control border"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Post</label>
          </div>
          <div class="input-group mt-4">
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={(e) => SubmitPost(e)}
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
            {loading ? (
              <div>
                <div Style="width:55%">
                  <div Style="height:0;padding-bottom:56.25%;position:relative;width:100%">
                    <iframe
                      allowfullscreen=""
                      frameBorder="0"
                      height="100%"
                      src="https://giphy.com/embed/yPpmkMDM0tA2gMShfR/video"
                      Style="left:0;position:absolute;top:0"
                      width="100%"
                    ></iframe>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data.post,
}))(MakePost);
