export default async function getUserPosts(userId: string) {
    const user = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
    if(!user.ok) throw new Error(`Error fetching user`);

    return user.json();
}
