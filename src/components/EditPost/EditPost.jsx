import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { editPostAction } from "../../Actions/PostActions";
const EditPost = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch();

  //Access to the states
  const postEdit = useSelector( state => state.data.editpost);
  // if (!postEdit) return null;
  useEffect(() => {
    setPost(postEdit);
  }, [postEdit]);

  //Read the data of the form
  const onChangeForm = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };
  const { title, content } = post;

  const submitEditPost = e => {
    e.preventDefault();

    //Pass the post to the action
    dispatch(editPostAction(post) );
  };
  return (
    <div className="card carta col-md-6 offset-md-3">
      <h1 className="common">You post to edit</h1>
      <div className="card-body">
        <div className="commonWall">
          <input
            type="text"
            className="form-control mb-2 border"
            name="title"
            value={title}
            onChange={onChangeForm}
            placeholder="Title"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <div className="form-floating">
            <textarea
              className="form-control border"
              name="content"
              value={content}
              onChange={onChangeForm}
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Post</label>
          </div>
          <div class="input-group mt-4">
            <button
              className="btn btn-outline-dark"
              type="submit"
              //   onClick={(e) => SubmitPost(e)}
              onClick={submitEditPost}
            >
              To Post
            </button>
            {/* <div className="errorsText">{errors.eValidate}</div> */}
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              aria-label="Upload"
            />
            {/* {loading ? (
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
            ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data.post,
}))(EditPost);
