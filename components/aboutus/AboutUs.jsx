'use client'

import { Microscope, Users, Filter, Rocket, HandshakeIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutUs() {
  const cards = [
    {
      icon: <Microscope className="w-12 h-12 text-red-500" />,
      title: "Innovating the Future",
      description: "Pioneering research and development company at the intersection of technology and innovation spanning deep learning, genomics, decentralized & more"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Collaborative Excellence",
      description: "Pioneering research and development company at the intersection of technology and innovation spanning deep learning, genomics, decentralized & more"
    },
    {
      icon: <Filter className="w-12 h-12 text-yellow-500" />,
      title: "Inspired by Kalman Filter",
      description: "Pioneering research and development company at the intersection of technology and innovation spanning deep learning, genomics, decentralized & more"
    },
    {
      icon: <Rocket className="w-12 h-12 text-purple-500" />,
      title: "Our Mission",
      description: "Pioneering research and development company at the intersection of technology and innovation spanning deep learning, genomics, decentralized & more"
    },
    {
      icon: <HandshakeIcon className="w-12 h-12 text-green-500" />,
      title: "Join Us",
      description: "Pioneering research and development company at the intersection of technology and innovation spanning deep learning, genomics, decentralized & more"
    }
  ]

  return (
    (<div className="min-h-screen flex flex-col">
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{backgroundImage: "url('/placeholder.svg?height=256&width=1024')"}}>
        <h1 className="text-4xl font-bold text-white">Welcome to Our Company</h1>
      </div>
      <div className="flex-grow bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">About Us</h2>
          <div className="flex justify-center">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {cards.map((card, index) => (
                <Card key={index} className="w-full max-w-sm">
                  <CardHeader>
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-white mb-4 mx-auto">
                      {card.icon}
                    </div>
                    <CardTitle className="text-center">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 text-center">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}