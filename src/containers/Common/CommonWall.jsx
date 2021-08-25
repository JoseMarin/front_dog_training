/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import MakePost from "../../components/MakePost/MakePost";
import Post from "../../components/Post/Post";
import Swal from "sweetalert2";

//ACTIONS OF RDX
import { getPostAction } from "../../Actions/PostActions";

const CommonWall = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Consult the API
    const findPost = props => dispatch(getPostAction(props) );
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Access to the states
  const post = useSelector( state => state.data.post);
  const error = useSelector( state => state.data.error);
  const loading = useSelector( state => state.data.loading);

  return (
    <div>
      <MakePost />
      {error
        ? Swal.fire({
            icon: "error",
            title: "Was a mistake",
            text: "Try again.",
          })
        : null}

      {loading ? (
        <div className="spinnerContainer">
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
      {post.length === 0 ? (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <div className="spinnerContainer">
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
      ) : (
        [...post].reverse().map( post => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data.post,
}))(CommonWall);
