import {Show, SignInButton, SignUpButton, UserButton} from '@clerk/nextjs'
import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="topbar site-header">
      <Link className="brand" href="/" aria-label="LearnHub home">
        <span>LH</span>
        <b>LearnHub</b>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/courses">Courses</Link>
        <Link href="/#learning">My Learning</Link>
      </nav>
      <div className="account">
        <button aria-label="Notifications" className="icon-button" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 22h4" />
          </svg>
        </button>
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button type="button" className="auth-button">Sign in</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button type="button" className="auth-button primary">Sign up</button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </header>
  )
}
