import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client.js";

function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'post']{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-gray-900 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-6xl flex justify-center mb-4">Blog Posts</h1>
        <h2 className="text-2xl text-gray-100 flex justify-center mb-12">
          Rips about Bitcoin, Lightning, and whatever else I'm thinking about
        </h2>
        <div className="grid md;grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-gray-500 border-l-8 border-gray-200"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-200 text-lg font-blog px-3 py-4 bg-gray-700 text-gray-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Post;
