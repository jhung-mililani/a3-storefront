export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#8BAAB7]">
      <div className="w-full max-w-md bg-[#F5F2E9] rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 pb-6">
          <div className="bg-[#C5D6DF] rounded-lg p-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-medium">A3</span>
              </div>
              <h1 className="text-4xl font-bold text-black">Brave Graves</h1>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-800 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BAAB7]"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-800 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BAAB7]"
              />
            </div>

            <button className="w-full bg-[#8BAAB7] text-black font-medium py-2 rounded-md hover:bg-[#7A99A6] transition-colors">
              Login
            </button>

            <button className="w-full bg-[#E9E5DC] text-black font-medium py-2 rounded-md hover:bg-[#DCD8CF] transition-colors">
              Sign Up
            </button>

            <div className="text-center">
              <a href="#" className="text-gray-700 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

