import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

export default function Home({ source, frontMatter }) {
  return (
    <div>
      <div className="pt-16 pb-20 px-4 text-base max-w-prose mx-auto">
        <div className="mb-8">
          <h1 className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10">
            {frontMatter.title}
          </h1>
        </div>
        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={{}} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const fullPath = path.join("content/index.mdx");
  const source = await fs.readFileSync(fullPath, "utf8");

  const { content, data } = await matter(source);
  const frontMatter = JSON.parse(JSON.stringify(data));
  const mdxSource = await serialize(content);

  return { props: { source: mdxSource, frontMatter: frontMatter } };
}
