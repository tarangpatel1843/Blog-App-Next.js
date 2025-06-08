"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react';
import SearchInput from './Search_input';
import ToggleMode from './Toggle_mode';
import { Menu, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { searchAction } from '@/actions/search';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    // <nav className='sticky top-0 z-50 w-full border-b bg-background/95 background-blur supports-[backdrop-filter]:bg-background/60'>
    //     <div className='container mx-auto  px-4 sm:px-6 lg:px-8'>
    //         <div className='flex h-16 items-center justify-between '>
    //             {/* left section -logo and desktop navigation*/}
    //             <div className='flex items-center gap-8'>
    //                 {/* logo */}
    //                 <Link href='/' className='flex items-center space-x-2'>
    //                     <span className='text-2xl font-bold'>
    //                         <span className='bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent'>
    //                             Byte
    //                         </span>
    //                         <span className='text-foreground'>Code</span>
    //                     </span></Link>
    //                 {/* desktop navigation */}
    //                 <div className="hidden md:flex items-center gap-4">
    //                     <Link
    //                         href="/articles"
    //                         className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
    //                     >
    //                         Articles
    //                     </Link>
    //                     <Link href='/tutorials ' className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'>
    //                         Tutorials
    //                     </Link>
    //                     <Link
    //                         href='/about'
    //                         className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
    //                     >
    //                         About
    //                     </Link>
    //                     <Link href='/dashboard' className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'>
    //                         Dashboard
    //                     </Link>
    //                 </div>

    //             </div>
    //             {/* right section-search and actions */}
    //             <div className="flex items-center gap-4">
    //                 {/* search bar desktop */}
    //                 <SearchInput />
    //                 {/* theme toggle */}
    //                 <ToggleMode />
    //                 {/* user actions */}
    //                 <SignedIn>
    //                     <UserButton />
    //                 </SignedIn>
    //                 <SignedOut>

    //                     <div className="hidden md:flex items-center gap-2">
    //                         <SignInButton>
    //                         <Button variant="outline">Login</Button>
    //                         </SignInButton>
    //                         <SignUpButton>
    //                         <Button>Sign up</Button>
    //                         </SignUpButton>
    //                     </div>
    //                 </SignedOut>

    //             {/* Mobile Menu Button */}
    //             <Button
    //                 variant="ghost"
    //                 size="icon"
    //                 className="md:hidden text-muted-foreground hover:text-foreground"
    //                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
    //                 {
    //                         isMobileMenuOpen ? <X className="h-5 w-5" /> : (<Menu className='h-5 w-5' />)
    //                     }
    //                 </Button>
    //             </div>
    //                 </div>

    //         {/* Mobile Menu */}
    //         {isMobileMenuOpen && (
    //             <div className="md:hidden py-4 space-y-4 border-t">
    //                 {/* Search Bar (Mobile) */}
    //                 <div className="px-4">
    //                     <div className="relative">
    //                         <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    //                         <Input
    //                             type="search"
    //                             placeholder="Search articles..."
    //                             className="pl-10 w-full focus-visible:ring-1"
    //                         />
    //                     </div>
    //                 </div>

    //                 {/* Mobile Navigation Links */}
    //                 <div className="space-y-2 px-4">
    //                     <Link
    //                         href="/articles"
    //                         className="block px-3 py-2 text-base font-medium text-foreground"
    //                         onClick={() => setIsMobileMenuOpen(false)}
    //                     >
    //                         Articles
    //                     </Link>
    //                     <Link
    //                         href="/tutorials"
    //                         className="block px-3 py-2 text-base font-medium text-foreground"
    //                         onClick={() => setIsMobileMenuOpen(false)}
    //                     >
    //                         Tutorials
    //                     </Link>
    //                     <Link
    //                         href="/about"
    //                         className="block px-3 py-2 text-base font-medium text-foreground"
    //                         onClick={() => setIsMobileMenuOpen(false)}
    //                     >
    //                         About
    //                     </Link>
    //                     <Link
    //                         href="/dashboard"
    //                         className="block px-3 py-2 text-base font-medium text-foreground"
    //                         onClick={() => setIsMobileMenuOpen(false)}
    //                     >
    //                         Dashboard
    //                     </Link>
    //                 </div>

    //                 {/* Mobile Auth Buttons */}
    //                 <SignedOut>
    //                     <div className="px-4 flex flex-col gap-2">
    //                         <SignInButton>
    //                             <Button variant="outline" className="w-full">
    //                                 Login
    //                             </Button>
    //                         </SignInButton>
    //                         <SignUpButton>
    //                             <Button className="w-full">Sign up</Button>
    //                         </SignUpButton>
    //                     </div>
    //                 </SignedOut>
    //             </div>
    //         )}
    //     </div>
    // </nav>
    // <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
    //   <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
    //     <div className='flex h-16 items-center justify-around'>
    //       {/* Left Section - Logo & Desktop Nav */}
    //       <div className='flex items-center gap-6 sm:gap-8'>
    //         <Link href='/' className='flex items-center space-x-2'>
    //           <span className='text-xl sm:text-2xl font-bold'>
    //             <span className='bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent'>
    //               Byte
    //             </span>
    //             <span className='text-foreground'>Code</span>
    //           </span>
    //         </Link>

    //         {/* Desktop Nav */}
    //         <div className='hidden md:flex items-center gap-4'>
    //           <Link href="/articles" className='text-sm font-medium text-muted-foreground hover:text-foreground'>Articles</Link>
    //           <Link href="/tutorials" className='text-sm font-medium text-muted-foreground hover:text-foreground'>Tutorials</Link>
    //           <Link href="/about" className='text-sm font-medium text-muted-foreground hover:text-foreground'>About</Link>
    //           <Link href="/dashboard" className='text-sm font-medium text-muted-foreground hover:text-foreground'>Dashboard</Link>
    //         </div>
    //       </div>

    //       {/* Right Section */}
    //       <div className='flex items-center gap-3 sm:gap-4'>
    //         <div className='hidden sm:block'>
    //           <SearchInput />
    //         </div>
    //         <ToggleMode />
    //         <SignedIn><UserButton /></SignedIn>

    //         <SignedOut>
    //           <div className='hidden md:flex gap-2'>
    //             <SignInButton><Button variant="outline">Login</Button></SignInButton>
    //             <SignUpButton><Button>Sign up</Button></SignUpButton>
    //           </div>
    //         </SignedOut>

    //         {/* Mobile Menu Button */}
    //         <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
    //           {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    //         </Button>
    //       </div>
    //     </div>

    //     {/* Mobile Menu */}
    //     {isMobileMenuOpen && (
    //       <div className="md:hidden py-3 border-t max-h-[calc(100vh-4rem)] overflow-y-auto space-y-3">
    //         {/* Search (Mobile) */}
    //         <div className="px-4">
    //           <form action={searchAction} className="relative">
    //             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    //             <Input
    //               type="search"
    //               name='search'
    //               placeholder="Search articles..."
    //               className="pl-10 w-full"
    //             />
    //           </form>
    //         </div>

    //         {/* Links */}
    //         <div className="space-y-2 px-4">
    //           {["articles", "tutorials", "about", "dashboard"].map((item) => (
    //             <Link
    //               key={item}
    //               href={`/${item}`}
    //               className="block px-3 py-2 text-base font-medium text-foreground"
    //               onClick={() => setIsMobileMenuOpen(false)}
    //             >
    //               {item.charAt(0).toUpperCase() + item.slice(1)}
    //             </Link>
    //           ))}
    //         </div>

    //         {/* Auth */}
    //         <SignedOut>
    //           <div className="px-4 flex flex-col gap-2 pb-2">
    //             <SignInButton>
    //               <Button variant="outline" className="w-full">Login</Button>
    //             </SignInButton>
    //             <SignUpButton>
    //               <Button className="w-full">Sign up</Button>
    //             </SignUpButton>
    //           </div>
    //         </SignedOut>
    //       </div>
    //     )}
    //   </div>
    // </nav>
    <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
  <div className='container relative mx-auto px-6 sm:px-10 lg:px-16'>
    <div className='flex h-16 items-center justify-between'>

      {/* Left: Logo */}
      <div className='flex items-center gap-4'>
        <Link href='/' className='flex items-center space-x-2'>
          <span className='text-xl sm:text-2xl font-bold'>
            <span className='bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent'>
              Byte
            </span>
            <span className='text-foreground'>Code</span>
          </span>
        </Link>
      </div>

      {/* Center: Navigation (Only Desktop) */}
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-6'>
        <Link href="/articles" className='text-sm font-medium text-muted-foreground hover:text-foreground'>Articles</Link>
        {/* <Link href="/tutorials" className='text-sm font-medium text-muted-foreground hover:text-foreground'>Tutorials</Link> */}
        <Link href="/about" className='text-sm font-medium text-muted-foreground hover:text-foreground'>About</Link>
        <Link href="/dashboard" className='text-sm font-medium text-muted-foreground hover:text-foreground'>Dashboard</Link>
      </div>

      {/* Right: Search & Auth */}
      <div className='flex items-center gap-3 sm:gap-4'>
        <div className='hidden sm:block'>
          <SearchInput />
        </div>
        <ToggleMode />
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <div className='hidden md:flex gap-2'>
            <SignInButton><Button variant="outline">Login</Button></SignInButton>
            <SignUpButton><Button>Sign up</Button></SignUpButton>
          </div>
        </SignedOut>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
    </div>

    {/* Mobile Menu (unchanged) */}
    {isMobileMenuOpen && (
      <div className="md:hidden py-3 border-t max-h-[calc(100vh-4rem)] overflow-y-auto space-y-3">
        {/* Search */}
        <div className="px-4">
          <form action={searchAction} className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              name='search'
              placeholder="Search articles..."
              className="pl-10 w-full"
            />
          </form>
        </div>

        {/* Links */}
        <div className="space-y-2 px-4">
          {["articles", "tutorials", "about", "dashboard"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="block px-3 py-2 text-base font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Auth */}
        <SignedOut>
          <div className="px-4 flex flex-col gap-2 pb-2">
            <SignInButton>
              <Button variant="outline" className="w-full">Login</Button>
            </SignInButton>
            <SignUpButton>
              <Button className="w-full">Sign up</Button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    )}
  </div>
</nav>



  );
}

export default Navbar;
