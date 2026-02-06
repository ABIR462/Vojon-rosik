"use client"

import { useEffect, useState } from "react"

interface LoaderProps {
    isLoading: boolean
    className?: string
    classNameLoader?: string
    logoSrc?: string
}

export default function Loader({ 
    isLoading, 
    className = "", 
    classNameLoader = "", 
    logoSrc = "/codrops-logo.png" 
}: LoaderProps) {
    const [show, setShow] = useState(true)

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => setShow(false), 1000)
            return () => clearTimeout(timer)
        } else {
            setShow(true)
        }
    }, [isLoading])

    if (!show) return null

    return (
        <div
            className={`fixed inset-0 z-[10000] transition-opacity duration-500 flex items-center justify-center bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-sm ${className} ${
                isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
                {/* Logo with spinning animation and background removal */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-red-500/20 rounded-full blur-3xl animate-pulse" />
                    <img
                        src={logoSrc}
                        alt="Loading"
                        className={`relative w-28 h-28 md:w-32 md:h-32 object-contain ${classNameLoader} animate-spin drop-shadow-2xl`}
                        style={{
                            filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.4))',
                        }}
                    />
                </div>
                
                {/* Loading text */}
                <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-2 items-center">
                        <span className="text-white/60 text-sm md:text-base font-light tracking-widest">
                            Loading
                        </span>
                        <div className="flex gap-1">
                            <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0s'}} />
                            <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                            <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
