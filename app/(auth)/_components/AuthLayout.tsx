// import React from 'react'

// interface AuthLayoutProps {
//   children: React.ReactNode
//   backgroundImage?: string
// }

// export function AuthLayout({ children, backgroundImage }: AuthLayoutProps) {
//   return (
//     <div className=" flex items-center j">
  
      
//       <div className="relative w-full ">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//           {/* Image placeholder - hidden on mobile */}
//           {backgroundImage && (
//             <div
//               className="hidden lg:block rounded-l-2xl bg-cover bg-center h-full"
//               style={{
//                 backgroundImage: `url(${backgroundImage})`,
//               }}
//             />
//           )}
          
//           {/* Form container */}
//           <div className="bg-white rounded-2xl lg:rounded-l-none p-8 lg:p-10 shadow-2xl">
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
  backgroundImage?: string
}

export function AuthLayout({ children, backgroundImage }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      {/* ✅ Card wrapper (full height on lg) */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl shadow-2xl min-h-[600px] lg:min-h-[90vh]">
          
          {/* ✅ Left Image (full height) */}
          {backgroundImage && (
            <div
              className="hidden lg:block bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
            />
          )}

          {/* ✅ Right Form */}
          <div className="bg-white p-8 lg:p-10 flex items-center">
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
