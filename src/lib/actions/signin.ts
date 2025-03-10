'use server'
export async function signin(data:FormData) {
    try{
        const email = data.get('email');
        const request = await fetch(`${process.env.SERVER_URL}/account/sign-in`, {
            method: 'POST',
            body: JSON.stringify({ email}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(request.ok){
            return request.json()
        }else {
            throw new Error(request.statusText)
        }

    }catch(error){
        throw new Error(JSON.stringify(error))
    }

}
