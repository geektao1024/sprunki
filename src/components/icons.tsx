import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  Languages,
  type Icon as LucideIcon,
} from 'lucide-react'

export type Icon = typeof LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" fill="currentColor" />
      <rect x="7" y="18" width="3" height="2" fill="#FF0000" />
      <rect x="11" y="18" width="3" height="2" fill="#FF0000" />
      <rect x="15" y="18" width="3" height="2" fill="#FF0000" />
    </svg>
  ),
  Languages,
}
