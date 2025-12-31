function App(){
 return(
   <div>
  <nav class="bg-white shadow p-4 flex flex-col md:flex-row md:justify-between gap-3 text-center">
    <a href="#" class="hover:text-blue-600">Home</a>
    <a href="#" class="hover:text-blue-600">About</a>
    <a href="#" class="hover:text-blue-600">Contact</a>
  </nav>


  <section class="text-center p-6">
    <h2 class="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
      Beautiful Responsive UI with Tailwind
    </h2>

    <div class="max-w-xs mx-auto mt-6 shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
      <img src="https://picsum.photos/400" class="w-full" />
    </div>


    <button class="mt-6 px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
      Click Me
    </button>
  </section>

 
  <section class="p-6">
    <h3 class="text-2xl font-bold mb-4">Features</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

     
      <div class="bg-white p-4 rounded-2xl shadow">
        <img src="https://picsum.photos/200" class="rounded-xl mb-3 w-full"/>
        <h4 class="text-xl font-bold mb-2">Feature One</h4>
        <p class="text-gray-600 mb-4">This is a short description of this feature.</p>
        <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          Learn More
        </button>
      </div>

  
      <div class="bg-white p-4 rounded-2xl shadow">
        <img src="https://picsum.photos/201" class="rounded-xl mb-3 w-full"/>
        <h4 class="text-xl font-bold mb-2">Feature Two</h4>
        <p class="text-gray-600 mb-4">Another description of a feature.</p>
        <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          Learn More
        </button>
      </div>

      <div class="bg-white p-4 rounded-2xl shadow">
        <img src="https://picsum.photos/202" class="rounded-xl mb-3 w-full"/>
        <h4 class="text-xl font-bold mb-2">Feature Three</h4>
        <p class="text-gray-600 mb-4">A third feature description.</p>
        <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          Learn More
        </button>
      </div>

    </div>
  </section>

  
  <section class="p-6">
    <h3 class="text-2xl font-bold mb-3">Styled List</h3>
    <ul class="list-disc list-inside pl-5 space-y-1">
      <li class="hover:text-blue-600 cursor-pointer">Easy to use</li>
      <li class="hover:text-blue-600 cursor-pointer">Fully responsive</li>
      <li class="hover:text-blue-600 cursor-pointer">Modern UI</li>
    </ul>
  </section>

 
  <section class="p-6">
    <h3 class="text-2xl font-bold mb-3">Table Section</h3>

    <table class="w-full text-left border border-gray-300">
      <thead class="bg-gray-200">
        <tr>
          <th class="p-2 border">Name</th>
          <th class="p-2 border">Role</th>
          <th class="p-2 border">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="even:bg-gray-100 hover:bg-gray-200">
          <td class="p-2 border">John</td>
          <td class="p-2 border">Developer</td>
          <td class="p-2 border">Active</td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-gray-200">
          <td class="p-2 border">Sara</td>
          <td class="p-2 border">Designer</td>
          <td class="p-2 border">Active</td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-gray-200">
          <td class="p-2 border">Michael</td>
          <td class="p-2 border">Manager</td>
          <td class="p-2 border">Pending</td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-gray-200">
          <td class="p-2 border">Aisha</td>
          <td class="p-2 border">Support</td>
          <td class="p-2 border">Active</td>
        </tr>
      </tbody>
    </table>
  </section>


  <section class="p-6">
    <h3 class="text-2xl font-bold mb-3">Contact Form</h3>

    <form class="space-y-4 max-w-md">

      <input type="text" placeholder="Name"
        class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />

      <input type="email" placeholder="Email"
        class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />

      <input type="password" placeholder="Password"
        class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />

      <button class="px-6 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-lg w-full">
        Submit
      </button>
    </form>
  </section>
   </div>
 )
}
export default App;