import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-9">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">YourBrand</h2>
          <p className="text-sm text-gray-400 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.206-4.928 4.928 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.157-5.144-.424.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.016-.637.961-.689 1.8-1.56 2.46-2.548z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46c.98 0 1.77-.773 1.77-1.728V1.727C24 .774 23.21 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433c-1.12 0-2.03-.907-2.03-2.026 0-1.118.91-2.025 2.03-2.025 1.12 0 2.03.907 2.03 2.025 0 1.119-.91 2.026-2.03 2.026zM20.452 20.452h-3.5v-5.569c0-1.327-.03-3.035-1.85-3.035-1.85 0-2.13 1.445-2.13 2.939v5.665h-3.5V9h3.36v1.561h.05c.47-.889 1.61-1.828 3.31-1.828 3.54 0 4.19 2.331 4.19 5.358v6.361z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer
























// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='border-t border-t-gray-600 py-8'>

  
//     <div className='container mx-auto px-4'>
//         <div className='flex flex-col md:flex-row justify-between items-center'>
//             <div className="mb-4 md:mb-0">
//                 <h2 className="text-xl font-bold">Job Hunt</h2>
//                 <p className="text-sm">© 2026 Your Company. All rights reserved.</p>

//             </div>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//                 <a href="https://facebook.com" className='hover:text-gray-400' aria-label='Facebook'>
//                 <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M22'></path></svg>
//                 </a>
//             </div>
//         </div>


//     </div>
//       </footer>
//   )
// }

// export default Footer