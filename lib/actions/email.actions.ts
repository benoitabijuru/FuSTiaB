"use server"

import { Resend } from "resend";
import { validateString } from "../validator";

export type SubscribeProps = {
    email: string;
}
export type ReceiveClientEmailProps = {
    fullname:string;
    email:string;
    subject:string;
    message:string;
}
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({fullname,email,subject,message}:ReceiveClientEmailProps) =>{

    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'abinoit2@gmail.com',
        subject: subject,
        text: message,
    })
}; 

export async function SubscribeEmail({email}:SubscribeProps){
    
    resend.contacts.create({
        email: email,
        firstName: '',
        lastName: '',
        unsubscribed: false,
        audienceId: 'cbb9b34a-f722-4e21-9334-0c4d8f535109',
      });
}