"use client"
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
interface personalInfo {
    firstName: string;
    lastName: string;
    emailId: string;
    phone: string;
    dob: Date | undefined;
    bio: string;
    gender: string;
}

function Profile() {

    const [editPersonalInfo, setEditPersonalInfo] = useState(false)
    const [editAddress, setEditAddress] = useState(false)


    const [personalInfo, setPersonalInfo] = useState({
        firstName: "Virat",
        lastName: "Kohli",
        emailId: "Viratkohli18@gmail.com",
        phone: "+91 9623273435",
        dob: undefined || new Date(),
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
                            {editPersonalInfo ? <Input className='mb-5' onChange={(e) => handleInputPersonalInfo("lastName", e)} value={personalInfo.firstName} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.firstName}</p>}

                            <small className="p-2 text-sm font-medium leading-none">Email Address</small>
                            {editPersonalInfo ? <Input className='mb-5' onChange={(e) => handleInputPersonalInfo("emailId", e)} value={personalInfo.emailId} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.emailId}</p>}


                            <small className="p-2 text-sm font-medium leading-none">Date of Birth</small>
                            {editPersonalInfo ? <Popover >
                                <PopoverTrigger className="mb-5" asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[270px] justify-start text-left font-normal",
                                            !personalInfo.dob && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {personalInfo.dob ? format(personalInfo.dob, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        selected={personalInfo.dob}
                                        mode="single"
                                        onSelect={(date: any) => setPersonalInfo(prev => ({ ...prev, dob: date }))}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover> : <p className="p-2 text-sm text-muted-foreground">{format(personalInfo.dob, "PPP")}</p>}


                            <small className="p-2 text-sm font-medium leading-none">Bio</small>
                            {editPersonalInfo ? <Input className='mb-5' onChange={(e) => handleInputPersonalInfo("bio", e)} value={personalInfo.bio} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.bio}.</p>}

                        </div>
                        <div className=" col-span-1 md:col-span-1 lg:col-span-1">
                            <small className="p-2 text-sm font-medium leading-none">Last Name</small>
                            {editPersonalInfo ? <Input className='mb-5' onChange={(e) => handleInputPersonalInfo("lastName", e)} value={personalInfo.lastName} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.lastName}</p>}

                            <small className="p-2 text-sm font-medium leading-none">Phone</small>
                            {editPersonalInfo ? <Input className='mb-5' onChange={(e) => handleInputPersonalInfo("phone", e)} value={personalInfo.phone} /> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.phone}</p>}

                            <small className="p-2 text-sm font-medium leading-none">Gender</small>
                            {editPersonalInfo ?
                                <RadioGroup defaultValue={personalInfo.gender} className='flex mt-2 p-2' >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="male" id="r1" onClick={(e) => handleInputPersonalInfo("gender", e)} />
                                        <Label htmlFor="r1">Male</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="female" id="r2" onClick={(e) => handleInputPersonalInfo("gender", e)} />
                                        <Label htmlFor="r2">Female</Label>
                                    </div>
                                </RadioGroup> : <p className="p-2 text-sm text-muted-foreground">{personalInfo.gender}</p>}
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
                            {editAddress ? <Input className='mb-5' onChange={(e) => handleInputAddress("country", e)} value={addressInfo.country} /> : <p className="p-2 text-sm text-muted-foreground">{addressInfo.country}</p>}

                            <small className="p-2 text-sm font-medium leading-none">Postal Code</small>
                            {editAddress ? <Input className='mb-5' onChange={(e) => handleInputAddress("postalCode", e)} value={addressInfo.postalCode} /> : <p className="p-2 text-sm text-muted-foreground">{addressInfo.postalCode}</p>}

                        </div>
                        <div className="p-2 col-span-1 md:col-span-1 lg:col-span-1">
                            <small className="p-2 text-sm font-medium leading-none">City</small>
                            {editAddress ? <Input className='mb-5' onChange={(e) => handleInputAddress("city", e)} value={addressInfo.city} /> : <p className="p-2 text-sm text-muted-foreground">{addressInfo.city}</p>}

                            <small className="p-2 text-sm font-medium leading-none">TaxID</small>
                            {editAddress ? <Input className='mb-5' onChange={(e) => handleInputAddress("taxId", e)} value={addressInfo.taxId} /> : <p className="p-2 text-sm text-muted-foreground">{addressInfo.taxId}</p>}
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <Button className="float-right" onClick={() => setEditAddress(prev => !prev)}>{editAddress ? "Save" : "Edit"}</Button>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default Profile