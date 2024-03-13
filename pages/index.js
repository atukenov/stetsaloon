import { createClient } from "contentful";
import Head from "next/head";
import BlogCard from "../components/BlogCard";
import { services } from "../data/services";

export async function getStaticProps() {
  // const client = createClient({
  //   space: process.env.CONTENTFUL_SPACE_ID,
  //   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  // });

  // const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: services,
    },
    revalidate: 1,
  };
}

const Blog = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>STET Beauty</title>
      </Head>

      <main id="journal">
        <div className="spacer">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <div className="page-intro mar-top-sm">
                  <h1 className="page-title">УСЛУГИ</h1>
                  {/* <p>Sharing super ideas in simple, minimal & elegant way.</p> */}
                </div>
              </div>
            </div>
            <div className="articles-list mar-top-xs">
              <div className="grids">
                {blogs.map((blog) => (
                  <BlogCard key={blog.sys.id} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
