"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { ArrowRight, Twitter, DiscIcon as Discord, Github, Globe } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Navigation */}
      <div
        className="fixed top-0 left-0 right-0 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`
            h-20 transition-all duration-300 ease-in-out
            backdrop-blur-md border-b border-purple-500/20
            ${isScrolled && !isHovered ? "opacity-0 translate-y-[-100%]" : "opacity-100 translate-y-0"}
            ${isScrolled ? "bg-black/50" : "bg-transparent"}
          `}
        >
          <nav className="container mx-auto px-4 h-full flex items-center justify-between">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              NEXUS
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                Tokenomics
              </Link>
              <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                FAQ
              </Link>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
                Connect Wallet
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-gradient" />
        <div className="relative container mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              The Next Generation of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Decentralized Finance
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Join the revolution and claim your NEXUS tokens. The future of DeFi starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
              >
                Claim Airdrop
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Token Metrics */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <h3 className="text-lg font-medium text-gray-400">Total Supply</h3>
              <p className="text-3xl font-bold mt-2">1,000,000,000</p>
              <p className="text-sm text-gray-400 mt-1">NEXUS Tokens</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <h3 className="text-lg font-medium text-gray-400">Airdrop Allocation</h3>
              <p className="text-3xl font-bold mt-2">10,000,000</p>
              <p className="text-sm text-gray-400 mt-1">NEXUS Tokens</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <h3 className="text-lg font-medium text-gray-400">Time Remaining</h3>
              <p className="text-3xl font-bold mt-2">48:00:00</p>
              <p className="text-sm text-gray-400 mt-1">Until Airdrop Ends</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Participate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Connect Wallet</h3>
              <p className="text-gray-400">Connect your Web3 wallet to verify your eligibility for the airdrop</p>
            </div>
            <div className="relative p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Complete Tasks</h3>
              <p className="text-gray-400">Follow our social media channels and join our community</p>
            </div>
            <div className="relative p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Claim Tokens</h3>
              <p className="text-gray-400">Claim your NEXUS tokens and become part of our ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is NEXUS Token?</AccordionTrigger>
                <AccordionContent>
                  NEXUS is a next-generation DeFi token designed to revolutionize decentralized finance through
                  innovative features and community governance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I participate in the airdrop?</AccordionTrigger>
                <AccordionContent>
                  To participate, connect your Web3 wallet, complete the required social tasks, and claim your tokens
                  before the airdrop period ends.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>When will I receive my tokens?</AccordionTrigger>
                <AccordionContent>
                  Tokens will be distributed immediately after successful completion of all requirements and claiming
                  through our platform.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-gray-400">
              Subscribe to our newsletter to receive the latest updates about NEXUS token and upcoming features.
            </p>
            <div className="flex gap-4">
              <Input type="email" placeholder="Enter your email" className="bg-transparent border-purple-500/20" />
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              NEXUS
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Discord className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Globe className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

