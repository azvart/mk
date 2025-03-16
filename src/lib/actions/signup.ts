'use server'
export async function signup(data:FormData){
    try {
        const email = data.get('email');
        const password = data.get('password');

        const request = await fetch(`${process.env.SERVER_URL}/account/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        if(request.ok){
            console.log(request.headers.getSetCookie())
            const result = await request.json()
            console.log(result)
            return true;
        }else {
            throw new Error(request.statusText)
        }
    }catch(error){
        throw new Error(JSON.stringify(error))
    }
}
