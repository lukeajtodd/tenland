// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// @ts-ignore
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'You need to enter an email!' })
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Your email is invalid!' })
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    })

    return res.status(201).json({ error: '' })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ error: "There's been a problem. Please try again." })
  }
}
