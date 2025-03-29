import Link from "next/link"
import { Search, X, Check, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content with blue-gray background */}
      <div className="flex-1 bg-[#a2b7c0] pb-8">
        {/* Navigation */}
        <header className="border-b border-gray-300 bg-[#a2b7c0] px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#333] text-white flex items-center justify-center font-semibold">
                A3
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <div className="bg-[#333] text-white px-4 py-1 rounded">Products</div>
              <Link href="#" className="text-[#333]">
                Solutions
              </Link>
              <Link href="#" className="text-[#333]">
                Community
              </Link>
              <Link href="#" className="text-[#333]">
                Resources
              </Link>
              <Link href="#" className="text-[#333]">
                Pricing
              </Link>
              <Link href="#" className="text-[#333]">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <button className="bg-gray-200 px-4 py-1 rounded text-[#333] border border-gray-300">Login</button>
              <button className="bg-[#333] text-white px-4 py-1 rounded">Sign Up</button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="px-6 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters sidebar */}
            <div className="w-full md:w-64 bg-gray-100 rounded-md p-4">
              <div className="mb-4">
                <h3 className="font-medium mb-2">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-white px-2 py-1 rounded text-sm flex items-center">
                    Tombstones <X className="ml-1 w-4 h-4" />
                  </div>
                  <div className="bg-white px-2 py-1 rounded text-sm flex items-center">
                    Granite <X className="ml-1 w-4 h-4" />
                  </div>
                  <div className="bg-white px-2 py-1 rounded text-sm flex items-center">
                    Gothic <X className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="withText" className="mr-2" defaultChecked />
                  <label htmlFor="withText" className="text-sm">
                    With Text Description
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="stone" className="mr-2" defaultChecked />
                  <label htmlFor="stone" className="text-sm">
                    Stone Description
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="metal" className="mr-2" defaultChecked />
                  <label htmlFor="metal" className="text-sm">
                    Metal Description
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-medium mb-2">Pricing</h3>
                <div className="text-xs text-gray-600">$0-1000</div>
                <div className="relative h-1 bg-gray-300 rounded-full mt-2">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="color1" className="mr-2" defaultChecked />
                  <label htmlFor="color1" className="text-sm">
                    Label
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="color2" className="mr-2" defaultChecked />
                  <label htmlFor="color2" className="text-sm">
                    Label
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="color3" className="mr-2" defaultChecked />
                  <label htmlFor="color3" className="text-sm">
                    Label
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="size1" className="mr-2" defaultChecked />
                  <label htmlFor="size1" className="text-sm">
                    Label
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="size2" className="mr-2" defaultChecked />
                  <label htmlFor="size2" className="text-sm">
                    Label
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="size3" className="mr-2" defaultChecked />
                  <label htmlFor="size3" className="text-sm">
                    Label
                  </label>
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div className="flex-1">
              {/* Search and filters */}
              <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-4 pr-10 py-2 rounded-full w-full md:w-80 bg-gray-200"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Search className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-[#333] text-white px-3 py-1 rounded-md flex items-center text-sm">
                    <Check className="w-4 h-4 mr-1" /> New
                  </div>
                  <div className="bg-gray-200 px-3 py-1 rounded-md text-sm">Price ascending</div>
                  <div className="bg-gray-200 px-3 py-1 rounded-md text-sm">Price descending</div>
                  <div className="bg-gray-200 px-3 py-1 rounded-md text-sm">Rating</div>
                </div>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-md overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-3">
                      <div className="text-sm">Text</div>
                      <div className="font-medium">$0</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Large product */}
              <div className="bg-gray-100 rounded-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-300 rounded"></div>
                </div>
                <div className="p-3">
                  <div className="text-sm">Text</div>
                  <div className="font-medium">$0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <div className="w-10 h-10 rounded-full bg-[#333] text-white flex items-center justify-center font-semibold mb-4">
                A3
              </div>
              <div className="flex space-x-4 mt-2">
                <Twitter className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
                <Youtube className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
            <div className="md:w-1/4">
              <h3 className="font-medium mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>Granite</li>
                <li>Marble</li>
                <li>Sandstone</li>
                <li>Upright</li>
                <li>Flat</li>
                <li>Beveled</li>
                <li>Custom</li>
              </ul>
            </div>
            <div className="md:w-1/4">
              <h3 className="font-medium mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>Past Works</li>
                <li>Custom Designs</li>
                <li>Text</li>
                <li>Text</li>
                <li>Text</li>
                <li>Text</li>
                <li>Text</li>
              </ul>
            </div>
            <div className="md:w-1/4">
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>Best practices</li>
                <li>Text</li>
                <li>Text</li>
                <li>Text</li>
                <li>Text</li>
                <li>Text</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

