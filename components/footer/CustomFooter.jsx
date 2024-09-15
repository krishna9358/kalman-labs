import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'


export default function CustomFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-center items-center mb-6 space-y-2 md:space-y-0 md:space-x-4">
          <Link href="mailto:DeepDive@org.in" className="text-sm hover:underline">
            DeepDive@org.in
          </Link>
          <span className="hidden md:inline text-gray-500">•</span>
          <Link href="tel:+918292098293" className="text-sm hover:underline">
            (+91) 82920-98293
          </Link>
          <span className="hidden md:inline text-gray-500">•</span>
          <Link href="https://www.linkedin.com/in/aditya-raj-553322197/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
            linkedin.com/adityaRaj
          </Link>
        </div>
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full md:w-auto">
            <Image src="/images/logo-white.svg" alt="kalman-labs logo" width={150} height={40} className="mb-4" />
            <p className="text-sm text-center md:text-left max-w-md">
              Our vision is to unlock the full potential of deep learning by developing innovative solutions
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <div className="flex space-x-4 mb-4">
              <Link href="#" aria-label="Facebook" className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                <Facebook size={24} className="text-gray-900" />
              </Link>
              <Link href="#" aria-label="Twitter" className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                <Twitter size={24} className="text-gray-900" />
              </Link>
              <Link href="#" aria-label="Instagram" className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                <Instagram size={24} className="text-gray-900" />
              </Link>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-right">
              ©2022 Company Name. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}