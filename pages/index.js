import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { StandardMetadata } from "components/metadata";
import EmailCapture from "components/email-capture";

export default function Home({ source, frontMatter }) {
  return (
    <div>
      <StandardMetadata
        title="Pricing for Hackers"
        description="My goal with this guide is to help people understand the pricing landscape and build an understanding of how to operate in it faster. Think of it as a jump start on your pricing journey."
      />
      <div className="pt-16 pb-20 px-4 text-base max-w-prose mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10">
            Pricing for Hackers
          </h1>
        </div>
        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={{ EmailCapture: EmailCapture }} />
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
