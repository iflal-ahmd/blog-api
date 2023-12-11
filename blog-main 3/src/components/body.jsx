import * as React from 'react';
import axios from "axios";
import Post from "./post";
function Articles ()  {

  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: 'get',
          url: 'http://localhost:3000/api/blog',
          withCredentials: false,
        });
        setPosts(resp.data)
      }catch (e) {
        console.log(e)
      }
    }
    fetchData().catch(r => console.log(r))
  }, [])
    return (
    <section className='dt:grid dt:grid-cols-3 dt:justify-between dt:items-end dt:gap-6 phone:grid phone:grid-cols-1 phone:justify-items-center tablet:grid tablet:grid-cols-2 tablet:justify-between tablet:items-end '>
      {posts.map((post) => <Post key={post.id} post={post}/>)}

    </section>
    );
}

export default Articles;
