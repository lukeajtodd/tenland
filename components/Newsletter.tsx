const Newsletter = () => {
  return (
    <form className="w-full mb-4">
      <div className="mt-4">
        <label
          className="sr-only"
          htmlFor="emailaddress"
        >
          Signup for notifications on the platform
        </label>
        <input
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring"
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
        <div className="pt-4 flex justify-end">
          <button
            className="bg-primary hover:bg-primary-400 uppercase text-background font-bold py-3 px-6 rounded focus:ring"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  )
}

export default Newsletter
