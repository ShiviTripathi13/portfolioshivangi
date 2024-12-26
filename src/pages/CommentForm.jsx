// import React, {useState, useEffect} from "react";
// import axios from "axios";
//
// const CommentForm = () => {
//     const [name, setName] = useState([]);
//     const [comment, setComment] = useState([]);
//     const [date, setDate] = useState([]);
//
//     useEffect(() => {
//         axios.get("/api/comments")
//             .then((response) => {
//                 console.log(response.data);
//                 setName(response.data);
//                 setComment(response.data);
//                 setDate(response.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);
//
//     return(
//         <div>
//             <h1>Comments</h1>
//             <ul>
//                 <li>
//                 {name.map((name) => (
//                     <h1 key={name._id}>
//                         {name.name}
//                     </h1>
//                 ))}
//                 </li>
//                 <li>
//                     {comment.map((comment) => (
//                         <h1 key={comment._id}>
//                             {comment.comment}
//                         </h1>
//                     ))}
//                 </li>
//                 <li>
//                     {date.map((date) => (
//                         <h1 key={date._id}>
//                             {date.date}
//                         </h1>
//                     ))}
//                 </li>
//             </ul>
//         </div>
//     )
// }
//
// export default CommentForm;
//
