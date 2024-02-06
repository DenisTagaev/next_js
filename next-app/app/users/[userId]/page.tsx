import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPost"
import { Metadata } from "next"

type Params = {
    params: {
        userId: string,
    }
}

export async function generateMetadata(
    { params: { userId }} : Readonly<Params>): 
    Promise<Metadata> {
        const userData: Promise<User> = getUser(userId);
        const user: User = await userData;

        return {
            title: user.name,
            description: `This is a page of ${user.name}`
        }
    }

export default async function UserPage(
        { params: { userId }} : Readonly<Params>
    ) {
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);
    
    // const [user, userPosts] = await Promise.all([userData, userPostsData])
    const user: User = await userData;
    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading</h2>}>
                <UserPosts promise={userPostsData}/>
            </Suspense>
        </>
    )
}