// export default async function DashboardPage() {

//   return (
//     <section>
//       <h1>Home</h1>
      
//     </section>
//   );
// }

'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { Header } from "../components/header"
import Footer from "../components/footer"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
    const { data: session, status } = useSession({
        required: true,
    })

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (!session || !session.user) {
        return <div>Access Denied</div>
    }

    return (
        <div>
            <Header />
            <div className="min-h-screen px-4 py-6">
                <div className="flex flex-wrap w-full mb-4">
                    <div className="lg:w-1/2 w-full mb-2 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-gray-900">Hi, {session.user.name || 'User'}</h1>
                        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        {session.user.email || 'No email provided'}</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos delectus ullam totam officiis. Nostrum quos, fuga delectus ducimus magni impedit.
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Deploy</Button>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>
    )
}
