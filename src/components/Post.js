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
        <div className="grid md;grid-cols-1 lg:grid-cols-3 gap-10">
          {postData &&
            postData.map((post, index) => (
              <article key={index}>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug border-l-8 border-white transform transition duration-500 hover:scale-110"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-start pr-4 pb-4">
                      <h3 className="text-gray-200 text-lg px-3 py-4 font-bold bg-gray-700 text-gray-100 bg-opacity-75 rounded">
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
