"use client";
import TopNav from "@/components/TopNav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative font-light rounded-full text-primary bg-secondary font-manrope">
        
        <div className="lg:p-4 md:p-2 sm:p-1 z-2">
          <TopNav />
          <div className="">
            <div className="min-h-[95vh] rounded-xl lg:pt-12 md:pt-24 sm:pt-24 bg-tertiary">
              {children}
            </div>
          </div>
        </div>
        {/* <div className="grid bg-none lg:space-y-0 md:space-y-4">
          <div className="relative mx-16 lg:w-max-full md:max-w-full opacity-75 sm:max-w-full h-[48px] rounded-t-xl backdrop-blur-lg bg-gradient-radial-to-br from-yellow-800 bg-transparent via-neutral-600 to-orange-900">
          <div className="absolute flex items-center justify-around inset-0 brightness-100 contrast-150 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] "></div>
          </div>
        </div> */}
      </body>
    </html>
  );
}
