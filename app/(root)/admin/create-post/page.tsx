
import PostForm from '@/components/postform/PostForm'



 const CreatePost = () => {

//  const {sessionClaims} = authOptions();

//  const userId = sessionClaims?.userId as string;

const userId =""
  return (
    <>
      <section className=" bg-dotted-pattern bg-cover bg-center py-5"> 
        <h3 className='wrapper h3-bold text-center'>Create Article</h3>
      </section>
      <div className="wrapper my-8">
        <PostForm userId={userId} type="Create"/>
      </div>
    </>
  )
}

export default CreatePost