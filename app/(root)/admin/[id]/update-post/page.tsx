import PostForm from '@/components/postform/PostForm'


const UpdatePost = () => {

 // const {sessionClaims} = auth();

 //const adminId = sessionClaims?.adminId as string;
 const adminId = "BA1";
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5"> 
        <h3 className='wrapper h3-bold text-center'>Create Post</h3>
      </section>
      <div className="wrapper my-8">
        <PostForm adminId={adminId} type="Update"/>
      </div>
    </>
  )
}

export default UpdatePost