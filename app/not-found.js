import Link from 'next/link'
 
export default function NotFound() {
  return (
   <div className="flex flex-col items-center justify-center h-[50vh] bg-dotted text-center px-4">
  <h2 className="text-4xl font-bold text-gray-800 mb-4">
    Page Not Found
  </h2>
  
  <p className="text-lg text-gray-600 mb-6">
    Sorry, the page you are looking for doesn't exist or might have been moved. <br />
    Please&nbsp;&nbsp;&nbsp;&nbsp; 
    
<Link
      href="/"
      className="px-3 py-1.5 xl:px-4 xl:py-2 border border-gray-300 rounded-md text-[#01A6CF] hover:bg-gray-100 transition-colors whitespace-nowrap text-xs xl:text-sm font-semibold"
    >
      Return Home
    </Link> <br />
    
    or use the navigation menu to find what you're looking for.
  </p>
</div>

  )
}