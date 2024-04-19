import { useState } from 'react';
import Article from '../components/Article';
import Search from '../components/Search';
import postsData from '../posts.json';
function HomePage (){
    const [posts, setPosts] = useState(postsData);
    const onSearchChange = (value) =>{
     const filteredPosts = postsData.filter(item=>  item.title.includes(value))
     setPosts(filteredPosts)
    }
     return (
          <>
               <h1>Simple Blog</h1>
               <Search onSearchChange={onSearchChange}></Search>
               {posts.map(({title, tags, date})=> (
                    <Article {...{title,tags,date}} key ></Article>
               ))}
          </>
     )
}
export default HomePage;