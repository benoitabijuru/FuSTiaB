import ArticleForm from "@/components/postform/PostForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


 const CreateTechnologyPost = () => {

 const {sessionClaims} = auth();

 
 const userId = sessionClaims?.userId as string;
 


  return (
    <>
      <section className=" bg-dotted-pattern bg-cover bg-center py-5"> 
        <h3 className='wrapper h3-bold text-center'>Create Technology Post</h3>
        <p className="wrapper text-center italic text-gray-800"> Create Technology Post based on real fact and expermentation</p>
      </section>
      <div className="wrapper py-8">
        <ArticleForm userId={userId} type="Create"/>
      </div>
    </>
  )
}

export default CreateTechnologyPost