'use server'
import {cookies} from "next/headers";

export async function signin(data:FormData) {
    try{
        const email = data.get('email');
        const password = data.get('password');
        const request = await fetch(`${process.env.SERVER_URL}/account/sign-in`, {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(request.ok){
            const  { access_token, refresh_token } = await request.json()
            const cookie = await cookies();
            cookie.set({
                name: 'access',
                value: access_token,
                httpOnly: true,
                path: '/',
                expires: new Date(Date.now() + 1800 * 1000),
            })
            cookie.set({
                name:'refresh',
                value: refresh_token,
                httpOnly: true,
                path: '/',
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            })
            return;
        }else {
            throw new Error(request.statusText)
        }

    }catch(error){
        throw new Error(JSON.stringify(error))
    }

}
