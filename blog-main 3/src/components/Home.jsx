import Header from "./Header";
import Body from "./body";
import Socialm from "./socialm";
import LoadMore from "./load-more";
import Section from "./section";
import Footer from "./Footer";
import CreateBlog from "./create-blog";



export default function Home() {
  return (
    <div >
         <Header/>
         <Socialm/>
         <Body/>
         <LoadMore/>
         <CreateBlog/>
         <Section/>         
         <Footer/>
         
    </div>
  )
}