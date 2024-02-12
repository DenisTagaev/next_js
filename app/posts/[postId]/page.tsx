import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts"
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    const posts: BlogPost[] | undefined = getSortedPostsData();
    
    return posts.map((post: BlogPost) => ({
        postId: post.id
    }));
}

export function generateMetadata({ params} : Readonly<{ params: { postId: string }}>) {
    const posts: BlogPost[] | undefined = getSortedPostsData();
    const { postId } = params;
    
    const post: BlogPost | undefined = posts.find(post => post.id === postId);

    if(!post) return { title: 'Post not found'}

    return {
        title: post?.title
    }
}

export default async function Post({ params} : Readonly<{ params: { postId: string }}>) {
    const posts: BlogPost[] | undefined = getSortedPostsData();
    const { postId } = params;
    
    if (!posts.find(post => post.id === postId)) {
        return notFound();
    }

    const { title, date, contentHTML } = await getPostData(postId);
    const pubDate = getFormattedDate(date);
   
    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-3 mb-0">{title}</h1>
            <p className="mt-0">{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: 
                    contentHTML}}/>
                <p>
                    <Link className="text-white/70 
                        no-underline hover:text-white"  href='/'>Home Page
                    </Link>    
                </p> 
            </article>
        </main>
    )
}
