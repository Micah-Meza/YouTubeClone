import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Comments = (props) => {
    const [user, token] = useAuth();
    const [comment, setComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            user_id: user.id,
            text: comment,
            video_id: props.videoid
        };
        props.addNewEntry(newEntry)
    }



    return (  
        <form onSubmit={handleSubmit}>
        <div className='container_fluid'>
            <div className="comment_flex_box">
            <textarea className="text_box" placeholder='Add a comment...' type='text' rows='3'value={comment} onChange={(event) => setComment(event.target.value)} />
            <button type='submit' className='comments' >Comments</button>
            </div>
        </div>
    </form>

    );
}
 
export default Comments;