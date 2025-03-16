'use client';import { ChangeEvent, useState, FormEvent } from 'react';import { Button } from "@/components/ui/button";import { Input } from "@/components/ui/input";import { Label } from "@/components/ui/label";import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";import { useRouter } from "next/navigation";import Link from "next/link";type SignUpSrops = {    [key: string]:string;}const SignUpForm = () => {    const [signUp, setSignUp] = useState<SignUpSrops | null>(null);    const router = useRouter();    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {        const { name, value } = event.target;        setSignUp({...signUp, [name]: value});    }    const handleSubmit = async (event: FormEvent) => {        event.preventDefault();        try{            const request  = await fetch('http://localhost:8080/account/sign-up', {                method: 'POST',                body: JSON.stringify(signUp),                credentials: 'include',                headers: {                    'Content-Type': 'application/json',                }            })            if(request.ok){                router.push('/dashboard')            }        }catch(error){            throw new Error(JSON.stringify(error));        }    }    return <div className="flex flex-col gap-6">        <Card>            <CardHeader>                <CardTitle className="text-2xl">Sign Up</CardTitle>                <CardDescription>                    Enter your email and password bellow to sing up to your account                </CardDescription>            </CardHeader>            <CardContent>                <form onSubmit={handleSubmit}>                    <div className="flex flex-col gap-6">                        <div className="grid gap-2">                            <Label htmlFor="email">Email</Label>                            <Input required name="email" id="email" type="email" placeholder="Enter your email" onChange={handleChange}/>                        </div>                        <div className="grid gap-2">                            <Label htmlFor="password">Password</Label>                            <Input required name="password" id="password" type="password" placeholder="Enter your password"  onChange={handleChange}/>                        </div>                        <Button type="submit" className="w-full">                            Sign Up                        </Button>                    </div>                    <div className="mt-4 text-center text-sm">                        Already have an account?{" "}                        <Link href="/signin" className="underline underline-offset-4">Sign In</Link>                    </div>                </form>            </CardContent>        </Card>    </div>}export default SignUpForm