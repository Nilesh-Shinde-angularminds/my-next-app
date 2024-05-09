import React from 'react'
import Link from "next/link"

import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function ForgotPassword() {
    return (
        <div className="flex items-center justify-center h-screen" >
            <Card className="mx-auto max-w-lg">
                <CardHeader>
                    <CardTitle className="text-xl">Forgot Password</CardTitle>
                    <CardDescription>
                        Enter the email address associated with your account  and we'll send you a link to reset your password.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Continue
                        </Button>

                    </div>
                    <div className="mt-4 text-center text-sm">
                        Go to{" "}
                        <Link href="signup" className="underline">
                            Sign up page
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ForgotPassword