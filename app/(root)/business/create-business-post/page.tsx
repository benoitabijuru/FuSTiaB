import BusinessPostForm from "@/components/postform/BusinessPostForm";
import { auth } from "@clerk/nextjs/server";


 const CreateBusinessPost = () => {

 const {sessionClaims} = auth();

 
 const userId = sessionClaims?.userId as string;


  return (
    <>
      <section className=" bg-dotted-pattern bg-cover bg-center py-5"> 
        <h3 className='wrapper h3-bold text-center'>Create Business Post</h3>
        <p className="wrapper text-center italic text-gray-800"> Create Business Post </p>
      </section>
      <div className="wrapper py-8">
        <BusinessPostForm userId={userId} type="Create"/>
      </div>
    </>
  )
}

export default CreateBusinessPost