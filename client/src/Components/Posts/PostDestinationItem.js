import React from "react";
import { Link } from "react-router-dom";

function PostDestinationItem({ post }) {
    return (
        <div className="postItem">
            <Link to={`/profile/${post.user}`}>
                <h6>
                    {post.firstName.toUpperCase()} {post.lastName.toUpperCase()}
                </h6>
            </Link>
            <img src={post.img} alt="profil_photo" width="60px" />
            <h6>Destination : {post.destination.toUpperCase()}</h6>
            <h6> City :{post.city.toUpperCase()}</h6>
            <p>
                from {post.check_in} to {post.check_out}
            </p>
            <h6>Speaks : {post.languages}</h6>

            <h6>Nombres of Guests: {post.nbreOfGuests[0]} </h6>
            <p>{post.description}</p>
            <input type="button" value="Send a hosting request" />
        </div>
    );
}

export default PostDestinationItem;
