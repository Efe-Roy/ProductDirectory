import React, {useState, useEffect} from 'react'
import MostLikedComp from '../components/MostLikedComp'
import PromotionComp from '../components/PromotionComp'
import axios from 'axios'
import PromoPaginate from '../components/PromoPaginate'
import IdentiferComp from '../components/IdentiferComp'

const LikePromoPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4); //8 Per Page
    
    useEffect(() => {
        const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);
        setLoading(false);
        };

        fetchPosts();
    }, []);

    if (loading && posts.length === 0) {
    return <h2>Loading...</h2>;
    }

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const howManyPages = Math.ceil(posts.length / postsPerPage);

  return (
    <React.Fragment>
        <div className="container" style={{maxWidth: "97%"}}>
            <div className="row g-2 my-1">
                <div className="col-sm-3" >
                    <div className="d-flex bd-highlight mb-4">
                        <div className="me-auto bd-highlight">Most Liked</div>
                    </div>
                        <>
                            <MostLikedComp/>
                        </>
                </div>
            
                <div className="col-sm-9 col-lg-9 col-md-9">
                    
                    <div className="d-flex bd-highlight mb-1">
                        <div className="me-auto bd-highlight">Promotional Item</div>
                        <PromoPaginate howManyPages={howManyPages} setCurrentPage={setCurrentPage} />
                    </div>
                    <PromotionComp currentPosts={currentPosts} />
                    <IdentiferComp/>
                </div>
                
            </div>
        </div>
    </React.Fragment>
  )
}

export default LikePromoPage