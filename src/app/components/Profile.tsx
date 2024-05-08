import React from 'react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

function Profile() {
    return (
        <div className="items-center justify-center">
            <div className="mx-auto max-w-screen-lg" >
                <CardHeader>
                    <CardTitle className="text-xl">My profile</CardTitle>
                </CardHeader>
                <CardContent>
                    <Card className="flex p-3">
                        <div className="flex items-center justify-center">
                            <Avatar className="h-20 w-20" >
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="ml-10">
                            <small className="p-1 text-sm font-medium leading-none">Virat Kohali</small>
                            <p className="p-1 text-sm text-muted-foreground">Production Engineer</p>
                            <p className="p-1 text-sm text-muted-foreground">Los Angeles, California, USA</p>
                        </div>
                    </Card>

                    <Card className=" p-3 mt-5 ">

                        <div className="text-lg font-semibold">Personal Information</div>

                        <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="col-span-1 md:col-span-3 lg:col-span-1">
                                <small className="p-2 text-sm font-medium leading-none">First Name</small>
                                <p className="p-2 text-sm text-muted-foreground">Virat</p>
                                <small className="p-2 text-sm font-medium leading-none">Email Address</small>
                                <p className="p-2 text-sm text-muted-foreground">viratkohali18@gmail.com</p>
                                <small className="p-2 text-sm font-medium leading-none">Date of Birth</small>
                                <p className="p-2 text-sm text-muted-foreground">29-04-1999</p>
                                <small className="p-2 text-sm font-medium leading-none">Bio</small>
                                <p className="p-2 text-sm text-muted-foreground">Product Engineer with 5year experience.</p>

                            </div>
                            <div className="p-2 col-span-1 md:col-span-1 lg:col-span-1">
                                <small className="p-2 text-sm font-medium leading-none">Last Name</small>
                                <p className="p-2 text-sm text-muted-foreground">Kohali</p>
                                <small className="p-2 text-sm font-medium leading-none">Phone</small>
                                <p className="p-2 text-sm text-muted-foreground">+91 9918231818</p>
                                <small className="p-2 text-sm font-medium leading-none">Gender</small>
                                <p className="p-2 text-sm text-muted-foreground">Male</p>

                            </div>
                            <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                <Button variant={'outline'} className="float-right">Edit</Button>
                            </div>
                        </div>
                    </Card>
                    <Card className=" p-3 mt-5 ">
                        <div className="text-lg font-semibold">Address</div>
                        <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-2 col-span-1 md:col-span-2 lg:col-span-1">
                                <small className="p-2 text-sm font-medium leading-none">Country</small>
                                <p className="p-2 text-sm text-muted-foreground">India</p>
                                <small className="p-2 text-sm font-medium leading-none">Postal Code</small>
                                <p className="p-2 text-sm text-muted-foreground">416416</p>
                            </div>
                            <div className="p-2 col-span-1 md:col-span-1 lg:col-span-1">
                                <small className="p-2 text-sm font-medium leading-none">City</small>
                                <p className="p-2 text-sm text-muted-foreground">Mumbai, Maharashtra</p>
                                <small className="p-2 text-sm font-medium leading-none">Phone</small>
                                <p className="p-2 text-sm text-muted-foreground">Tax ID</p>
                                <small className="p-2 text-sm font-medium leading-none">8646872216</small>
                            </div>
                            <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                <Button variant={'outline'} className="float-right">Edit</Button>
                            </div>
                        </div>
                    </Card>
                </CardContent>
            </div>
        </div>
    )
}

export default Profile