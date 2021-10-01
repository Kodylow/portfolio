import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import photo from "../transparentshadowysupercoder.png";

function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset=>{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return (
      <div className="text-white bg-gray-900 min-h-screen p-12">Loading...</div>
    );

  return (
    <main className="bg-gray-900 min-h-screen p-12">
      <article className="container shadow-lg mx-auto border-4 rounded-lg">
        <header>
          <h1
            className="text-yellow-500 text-center pt-40 pb-10 lg:text-9xl text-6xl"
            style={{
              backgroundImage: `url(${photo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {singlePost.title}
          </h1>
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl text-gray-50 max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="d3dsbxfz"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}

export default SinglePost;
