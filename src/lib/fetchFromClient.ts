'use client'type BodyProps = {    [key: string]: string;}export const fetchFromClient = async (url: string, method: string, body?: BodyProps | null, next?: RequestInit["next"]) => {    return await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, { method, credentials: 'include', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' }, next });}