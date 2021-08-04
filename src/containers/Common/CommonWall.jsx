import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import moment  from 'moment';
import MakePost from "../../components/MakePost/MakePost";

const CommonWall = () => {

  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findPost = async () => {
    axios
      .get("http://localhost:5000/post")
      .then((res) => {
        setUserPost(res.data.results);
        // props.dispatch({ type: ADD_POST, payload: res.data });
      })
      .catch((err) => {
        console.log("Err");
      });
  };

  if (userPost[0]?.id) {
    return (
      <div>
        <MakePost />

        <div className="card mjs" Style="width: 18rem;">
          {userPost.map((mjs, index) => (
            <div className="card-body" key={index}>
              <img className="card-img-top" src=".../100px180/" alt="100x100" />
              <h5 className="card-title">{mjs.title}</h5>
              <p className="card-text">{mjs.content}</p>
              <p className="card-text">User &nbsp; &nbsp; {mjs.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <MakePost />
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post,
}))(CommonWall);

// import React, { useState } from "react";
// import { connect } from "react-redux";

// const CommonWall = () => {
//   const [datosUser, setDatosUser] = useState({
//     title: "",
//     post: "",
//   });
//   // Handler
//   const updatePost = (e) => {
//     setDatosUser({ ...datosUser, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="card col-md-6 offset-md-3 ">
//       <h1 className="common">NOTICIAS</h1>
//       <div className="card-body">
//         <div className="commonWall">
//           <input
//             type="text"
//             className="form-control mb-2 border"
//             name="title"
//             onChange={updatePost}
//             placeholder="Title"
//             aria-label="Username"
//             aria-describedby="addon-wrapping"
//           />
//           <div className="form-floating">
//             <textarea
//               className="form-control border"
//               name="post"
//               onChange={updatePost}
//               placeholder="Leave a comment here"
//               id="floatingTextarea"
//             ></textarea>
//             <label for="floatingTextarea">Post</label>
//           </div>

//           {/* <div className="input-group mb-3"> AQUI TENGO OTRO MODELO DE BOTON Y INPUT PARA CARAR ARCHIVO
//             <button type="button" className="btn btn-outline-dark mt-4">To Post</button>
//             <input type="file" className="form-control" id="inputGroupFile02"/>
//           </div> */}
//           <div className="input-group mt-4">
//             <button className="btn btn-outline-dark" type="button">
//               To Post
//             </button>
//             <input
//               type="file"
//               className="form-control"
//               id="inputGroupFile02"
//               aria-label="Upload"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default connect()(CommonWall);
