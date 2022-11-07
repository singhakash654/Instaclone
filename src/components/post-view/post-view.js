import axios from "axios";
import { useState, useEffect } from "react";
import "./post-view.css"
const PostView = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function showPost() {
            const apiResult = await axios.get("https://instaclone-api-santosh.herokuapp.com/api/posts")
            // setData(apiResult.data)
            setData(apiResult.data.data)
        }
        showPost()
    }, [data])
    return (
        <>

            <div id="insta-container">
                {
                    data.map((post) => {
                        const { id, name, location, description,likes,date, url } = post;
                        return (
                            <>
                                <div id="card" key={id}>
                                    <div className="card-header">
                                        <div className="card-header-name">
                                            {name}
                                        </div>
                                        <div className="card-place">
                                            {location}
                                        </div>
                                    </div>
                                    <span className="share">
                                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>

                                    </span>
                                    <div className="card-image">
                                        <img src={url} alt="vv" />
                                    </div>

                                    <div className="card-action">
                                        <span className="like">
                                            <i className="fa fa-heart-o" aria-hidden="true"></i>

                                        </span>
                                        <span className="shareIcon">
                                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>

                                        </span>
                                        <span className="date">
                                            {date}
                                        </span>
                                    </div>
                                    <div className="likes">
                                        {likes} likes
                                    </div>
                                    <div id="desciption">{description}</div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
    // return (
    //         <div id="insta-container">
    //             {data.map((post) => {
    //                 const { id, name, location, description, url } = post;

    //                 return (
    //                     <>
    //                         <div id="post-card" key={id}>
    //                             <h1>{name}</h1>
    //                             <a href=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
    //                             <h2>{location}</h2>
    //                             <img src={url} alt="vv" width="300" />
    // <div id="like-box">
    //     <i class="fa fa-heart" aria-hidden="true"></i>
    //     <i class="fa fa-comment-o" aria-hidden="true"></i>
    //     <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
    //     <i class="fa fa-ellipsis-h fa-3x" aria-hidden="true"></i>
    //     <i className="fa fa-bookmark-o" aria-hidden="true"></i>
    // </div>
    //                             <div id="desciption">{description}</div>
    //                         </div>
    //                     </>
    //                 )
    //             }
    //             )
    //             }
    //     )
}
export default PostView;
