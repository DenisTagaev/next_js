import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPost"
import { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
import { notFound } from "next/navigation"

type Params = {
    params: {
        userId: string,
    }
}

export async function generateMetadata(
    { params: { userId }} : Readonly<Params>): 
    Promise<Metadata> {
        const userData: Promise<User | undefined> = getUser(userId);
        const user: User | undefined = await userData;

        if(!user?.name) {
            return {
                title: "User not found"
            }
        }

        return {
            title: user.name,
            description: `This is a page of ${user.name}`
        }
    }

export default async function UserPage(
        { params: { userId }} : Readonly<Params>
    ) {
    const userData: Promise<User | undefined> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);
    const user: User | undefined = await userData;
    
    if(!user?.name) notFound();
    
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

export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;

    return users.map(user => ({ 
        userId: user.id.toString()
    }))
}