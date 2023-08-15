import getPost from "@/lib/getPost";

export default async function SingleBlog({ params }) {
  const id = params.id;
  const post = await getPost(id);
  return (
    <div>
      <section className="ml-6 mt-8">
        <div className="border-b border-black">
          <h1 className="font-bold text-lg ">
            {post.id} : {post.title}
          </h1>
        </div>
        <div className="mt-5">{post.body}</div>
      </section>
    </div>
  );
}
