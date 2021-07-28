import axios from "axios";
import React, { useState } from "react";
import { userId, getToken } from "../../utils";
import Swal from "sweetalert2";

function HostItem({ host }) {
    const id = userId();
    const token = getToken();
    const [editPost, setEditPost] = useState({});
    const [showEdit, setShowEdit] = useState(false);
    const handelChange = (e) => {
        setEditPost({ ...editPost, [e.target.name]: e.target.value });
    };
    const showEditPost = () => {
        setShowEdit(true);
    };
    const cancelEdit = () => {
        setShowEdit(false);
    };
    // const handleSaveEdit = () => {
    //     axios
    //         .put(
    //             `/api/posts/editPost/${id}`,
    //             { editPost, _id: post._id },
    //             {
    //                 headers: {
    //                     jwt: token,
    //                 },
    //             }
    //         )
    //         .then((response) => {
    //             Swal.fire({
    //                 title: "Save changes",
    //                 icon: "warning",
    //                 showCancelButton: true,
    //                 confirmButtonColor: "#3085d6",
    //                 cancelButtonColor: "#d33",
    //                 confirmButtonText: "Confirm",
    //             }).then((result) => {
    //                 if (result.isConfirmed) {
    //                     Swal.fire({
    //                         title: response.data.message,
    //                         icon: "success",
    //                         showDenyButton: false,
    //                         showCancelButton: false,
    //                         confirmButtonText: `Save`,
    //                     }).then((result) => {
    //                         if (result.isConfirmed) {
    //                             window.location.reload();
    //                         }
    //                     });
    //                 }
    //             });
    //         })
    //         .catch((error) => console.dir(error));
    // };
    // const handelDeletePost = () => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axios
    //                 .delete(`/api/posts/deletePost/${id}`, {
    //                     headers: {
    //                         jwt: token,
    //                         _id: post._id,
    //                     },
    //                 })
    //                 .then((response) => {
    //                     console.log(response);
    //                     Swal.fire({
    //                         title: response.data.message,
    //                         showDenyButton: false,
    //                         showCancelButton: false,
    //                         icon: "success",
    //                         confirmButtonText: `Save`,
    //                     }).then((result) => {
    //                         if (result.isConfirmed) {
    //                             window.location.reload();
    //                         }
    //                     });
    //                 })
    //                 .catch((error) => {
    //                     console.log(error);
    //                     Swal.fire(error.data.data.message, "error");
    //                     setShowEdit(true);
    //                 });
    //         }
    //     });
    // };
    return (
        <React.Fragment>
            <section className="post">
                {showEdit ? null : (
                    <div className="postItem">
                        <h6>
                            {host.firstName.toUpperCase()}{" "}
                            {host.lastName.toUpperCase()}
                        </h6>
                        <img src={host.img} alt="profil_photo" width="60px" />
                        <h6>Residence : {host.residence.toUpperCase()}</h6>
                        <h6> City :{host.city.toUpperCase()}</h6>
                        <h6>Speaks : {host.languages[0]}</h6>
                        <h6>Nombres of Rooms: {host.nbreOfRooms} </h6>
                        <h6>Nombres of Beds: {host.nbreOfBeds} </h6>
                        <p>{host.description}</p>
                        <input
                            type="button"
                            value="Edit post"
                            onClick={showEditPost}
                        />
                        <input
                            type="button"
                            value="Delete post"
                            // onClick={handelDeletePost}
                        />
                    </div>
                )}
                {/* {showEdit ? (
                    <div>
                        <input
                            type="text"
                            name="destination"
                            defaultValue={post.destination}
                            onChange={handelChange}
                        />
                        <input
                            type="text"
                            name="city"
                            defaultValue={post.city}
                            onChange={handelChange}
                        />
                        <input
                            type="date"
                            name="check_in"
                            defaultValue={post.check_in}
                            onChange={handelChange}
                        />
                        <input
                            type="date"
                            name="check_out"
                            defaultValue={post.check_out}
                            onChange={handelChange}
                        />
                        <input
                            type="text"
                            name="nbreOfGuests"
                            defaultValue={post.nbreOfGuests}
                            onChange={handelChange}
                        />
                        <input
                            type="text"
                            name="description"
                            defaultValue={post.description}
                            onChange={handelChange}
                        />
                        <input
                            type="button"
                            value="Save changes"
                            onClick={handleSaveEdit}
                        />
                        <input
                            type="button"
                            value="Cancel"
                            onClick={cancelEdit}
                        />
                    </div>
                ) : null} */}
            </section>
        </React.Fragment>
    );
}

export default HostItem;