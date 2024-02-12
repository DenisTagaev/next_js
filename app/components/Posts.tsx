import { getSortedPostsData } from "@/lib/posts"
import PostItem from "./PostItem"

export default function Posts() {
    const posts = getSortedPostsData();

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-3xl font-mono dark:text-white/80">Blog</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <PostItem key={post.id} post={post}/>
                ))}
            </ul>
        </section>
    )
}
