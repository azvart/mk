'use client'export const fetchFromClient = async (url: string, method: string, body?: any, next?:RequestInit['next']) => {    return await fetch(`${process.env.SERVER_URL}${url}`, { method, credentials: 'include', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' }, next });}