const Search = () => {
  return (
    <form class="opacity-75 w-full shadow-lg rounded-lg mb-4">
      <div class="mb-4">
        <label
          class="block text-blue-300 py-2 font-bold mb-2"
          for="emailaddress"
        >
          Signup for notifications on the platform
        </label>
        <input
          class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring"
          id="emailaddress"
          type="text"
          placeholder="you@somewhere.com"
        />
      </div>

      <div class="flex items-center justify-between pt-4">
        <button
          class="bg-gradient-to-r bg-amber-400 hover:bg-amber-300 text-black font-bold py-2 px-4 rounded focus:ring transition"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default Search
