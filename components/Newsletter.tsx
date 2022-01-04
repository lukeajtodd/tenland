import { useRef, useState } from 'react'

const Newsletter = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef<HTMLInputElement>(null)
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current ? inputEl.current.value : '',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error)

      return
    }

    // 5. Clear the input value and show a success message.
    if (inputEl.current) {
      inputEl.current.value = ''
    }
    setMessage('Success! 🎉 You are now subscribed to the newsletter.')
  }

  return (
    <form className="w-full mb-4 px-3" onSubmit={subscribe}>
      <div className="lg:mt-4">
        <label className="sr-only" htmlFor="emailaddress">
          Signup for notifications on the platform
        </label>
        <input
          ref={inputEl}
          className="shadow appearance-none border border-body rounded w-full p-3 text-body leading-tight focus:ring ring-primary-200"
          id="emailaddress"
          type="text"
          placeholder="you@somewhere.com"
        />
      </div>

      <div className="pt-2">
        <small>
          Your email address will only be used for updates on the project. It
          will not be shared with any third parties.
        </small>
        <div className="pt-4 flex justify-end items-center">
          {message ? <small className="font-semibold pr-8">{message}</small> : null}
          <button
            className="bg-primary hover:bg-primary-400 uppercase text-background font-bold py-3 px-6 rounded focus:ring ring-primary-200"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
  )
}

export default Newsletter
