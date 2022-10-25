import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaginationComp from '../components/PaginationComp';

import DiscountComp from '../components/DiscountComp'
import FeaturedComp from '../components/FeaturedComp'
import NewProduct from '../components/NewProduct'

const CategoryPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8); //8 Per Page
    
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
        <div className="row g-2 my-2">
          <div className="col-sm-3" >
            <div className="p-3 border gs1DiscountMain">
              <DiscountComp/>
            </div>
          </div>
          
          <div className="col-sm-9 col-lg-9 col-md-9">
            <div className="">
              <span className='p-0 fw-bold' style={{fontSize: "15px"}}>Feature Category</span>
              <div className='bg-white px-3 shadow-sm'>
                <FeaturedComp />
              </div>
              <div className='mt-2'>
                <div className="d-flex flex-row-reverse bd-highlight my-1">
                  <PaginationComp howManyPages={howManyPages} setCurrentPage={setCurrentPage} />
                  <div className="p-2 bd-highlight">Top Manufacturers</div>
                  <div className="p-2 bd-highlight">New Product</div>
                </div>
                <NewProduct currentPosts={currentPosts} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CategoryPage