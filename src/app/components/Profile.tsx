"use client"
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


function Profile() {

    const [editPersonalInfo, setEditPersonalInfo] = useState(false)
    const [editAddress, setEditAddress] = useState(false)

    const [personalInfo, setPersonalInfo] = useState({
        firstName: "Virat",
        lastName: "Kohli",
        emailId: "Viratkohli18@gmail.com",
        phone: "+91 9623273435",
        dob: "29-05-1989",
        bio: "Product Engineer with 5year experience.",
        gender: "male",

    })

    const [addressInfo, setAddressInfo] = useState({
        country: "India",
        city: "Mumbai, Maharashtra",
        postalCode: "416416",
        taxId: "749729374"
    })

    function handleInputPersonalInfo(field: string, e: any) {
        setPersonalInfo(prev => ({ ...prev, [field]: e.target.value }))
    }
    function handleInputAddress(field: string, e: any) {
        setAddressInfo(prev => ({ ...prev, [field]: e.target.value }))
    }


    return (

        <div className="items-center justify-center">
            <div className="mx-auto max-w-screen-lg">
                <Tabs defaultValue="account" >
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">My Profile</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card className="flex p-3">
                            <div className="flex items-center justify-center">
                                <Avatar className="h-20 w-20" >
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="ml-10">
                                <small className="p-1 text-sm font-medium leading-none">Virat Kohli</small>
                                <p className="p-1 text-sm text-muted-foreground">Production Engineer</p>
                                <p className="p-1 text-sm text-muted-foreground">Los Angeles, California, USA</p>
                            </div>
                        </Card>

                        <Card className=" p-3 mt-5 ">
                            <div className="text-lg font-semibold">Personal Information</div>
                            <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="col-span-1 md:col-span-3 lg:col-span-1">
                                    <small className="p-2 text-sm font-medium leading-none">First Name</small>
                                    {editPersonalInfo ? <Input onChange={(e) => handleInputPersonalInfo("lastName", e)} value={personalInfo.firstName} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.firstName}</p>}

                                    <small className="p-2 text-sm font-medium leading-none">Email Address</small>
                                    {editPersonalInfo ? <Input onChange={(e) => handleInputPersonalInfo("emailId", e)} value={personalInfo.emailId} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.emailId}</p>}


                                    <small className="p-2 text-sm font-medium leading-none">Date of Birth</small>
                                    {editPersonalInfo ? <Input onChange={(e) => handleInputPersonalInfo("dob", e)} value={personalInfo.dob} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.dob}</p>}


                                    <small className="p-2 text-sm font-medium leading-none">Bio</small>
                                    {editPersonalInfo ? <Input onChange={(e) => handleInputPersonalInfo("bio", e)} value={personalInfo.bio} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.bio}.</p>}

                                </div>
                                <div className="p-2 col-span-1 md:col-span-1 lg:col-span-1">
                                    <small className="p-2 text-sm font-medium leading-none">Last Name</small>
                                    {editPersonalInfo ? <Input onChange={(e) => handleInputPersonalInfo("lastName", e)} value={personalInfo.lastName} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.lastName}</p>}

                                    <small className="p-2 text-sm font-medium leading-none">Phone</small>
                                    {editPersonalInfo ? <Input onChange={(e) => handleInputPersonalInfo("phone", e)} value={personalInfo.phone} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.phone}</p>}

                                    <small className="p-2 text-sm font-medium leading-none">Gender</small>
                                    {editPersonalInfo ? <Input onChange={(e) => handleInputPersonalInfo("gender", e)} value={personalInfo.gender} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.gender}</p>}
                                </div>
                                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                    <Button className="float-right" onClick={() => setEditPersonalInfo(prev => !prev)}>{editPersonalInfo ? "save" : "Edit"}</Button>
                                </div>
                            </div>
                        </Card>
                        <Card className=" p-3 mt-5 ">
                            <div className="text-lg font-semibold">Address</div>
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-2 col-span-1 md:col-span-2 lg:col-span-1">
                                    <small className="p-2 text-sm font-medium leading-none">Country</small>
                                    {editAddress ? <Input onChange={(e) => handleInputAddress("country", e)} value={addressInfo.country} /> : <p className="p-2 text-sm text-muted-foreground">{addressInfo.country}</p>}

                                    <small className="p-2 text-sm font-medium leading-none">Postal Code</small>
                                    {editAddress ? <Input onChange={(e) => handleInputAddress("postalCode", e)} value={addressInfo.postalCode} /> : <p className="p-2 text-sm text-muted-foreground">{addressInfo.postalCode}</p>}

                                </div>
                                <div className="p-2 col-span-1 md:col-span-1 lg:col-span-1">
                                    <small className="p-2 text-sm font-medium leading-none">City</small>
                                    {editAddress ? <Input onChange={(e) => handleInputAddress("city", e)} value={addressInfo.city} /> : <p className="p-2 text-sm text-muted-foreground">{addressInfo.city}</p>}

                                    <small className="p-2 text-sm font-medium leading-none">TaxID</small>
                                    {editAddress ? <Input onChange={(e) => handleInputAddress("taxId", e)} value={addressInfo.taxId} /> : <p className="p-2 text-sm text-muted-foreground">{addressInfo.taxId}</p>}

                                </div>
                                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                    <Button className="float-right" onClick={() => setEditAddress(prev => !prev)}>{editAddress ? "Save" : "Edit"}</Button>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card className='px-20 py-5'>
                            <CardHeader>
                                <CardTitle>Change password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2 ">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">Confirm password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                        {/* <CardHeader>
                                <CardTitle className='mb-4'>Update password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <Card  className='p-10 m-5 '>
                            <CardContent className="space-y-2">
                                <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
                                    <div className="sm:col-span-1 self-center justify-self-start"><Label htmlFor="new">Current password</Label></div>
                                    <div className="sm:col-span-5 "><Input id="current" type="password" /></div>
                                    <div className="sm:col-span-1 self-center justify-self-start"><Label htmlFor="new">New password</Label></div>
                                    <div className="sm:col-span-5  "><Input id="current" type="password" /></div>
                                    <div className="sm:col-span-1 self-center justify-self-start"><Label htmlFor="new">Confirm password</Label></div>
                                    <div className=" sm:col-span-5  "><Input id="current" type="password" /></div>
                                </div>
                            </CardContent>
                            <CardFooter className='flex items-center justify-end pr-5'>
                                <Button>Save password</Button>
                            </CardFooter>
                            </Card> */}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Profile