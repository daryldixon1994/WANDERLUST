import React, { useEffect } from "react";
import PostsCard from "./PostCard";
import { userId, getToken } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { adminGetUsersPosts } from "../../../redux/actions/adminActions";
import { Button, ListGroup } from "react-bootstrap";

function UserPostsList() {
    let id = userId();
    let token = getToken();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(adminGetUsersPosts({ id, token }));
    }, [id, token, dispatch]);
    const postsList = useSelector((state) => state.adminReducer.adminPostsList);
    return (
        <div>
            {/* <Button variant="outline-primary" href={`/adminUi/${id}`}>
                Back
            </Button> */}
            <h1>Posts List</h1>
            {postsList.map((post) => (
                <div key={post._id}>
                    <PostsCard post={post} />
                </div>
            ))}
        </div>
    );
}

export default UserPostsList;
