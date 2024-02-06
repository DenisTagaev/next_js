export default async function getUser(userId: string): Promise<User | undefined> {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    if(!user.ok) return undefined;

    return user.json();
}
