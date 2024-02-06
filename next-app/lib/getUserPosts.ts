export default async function getUserPosts(userId: string) {
    const user = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 3600 } });
    
    if(!user.ok) return undefined;

    return user.json();
}
