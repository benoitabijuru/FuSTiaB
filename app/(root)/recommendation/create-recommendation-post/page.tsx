
import RecommendationPostForm from "@/components/postform/RecommendationPostForm";
import { auth } from "@clerk/nextjs/server";


 const CreateGameChangersPost = () => {

 const {sessionClaims} = auth();

 
 const userId = sessionClaims?.userId as string;


  return (
    <>
      <section className=" bg-dotted-pattern bg-cover bg-center py-5"> 
        <h3 className='wrapper h3-bold text-center'>Create Recommendation Post</h3>
        <p className="wrapper text-center italic text-gray-800"> Create Recommendation Post based on real fact and expermentation</p>
      </section>
      <div className="wrapper py-8">
        <RecommendationPostForm userId={userId} type="Create"/>
      </div>
    </>
  )
}

export default CreateGameChangersPost