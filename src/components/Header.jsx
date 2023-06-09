import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import setLanguage from 'next-translate/setLanguage'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'



function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  const { t, lang } = useTranslation('common')
  
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 flex flex-col p-4 mt-4 text-lg tracking-tight origin-top bg-white shadow-xl top-full rounded-2xl text-slate-900 ring-1 ring-slate-900/5"
          >
            <MobileNavLink href={"#"+t('link_what_we_can_do')}>{t('header_what_we_can_do')}</MobileNavLink>
            <MobileNavLink href={"#"+t('link_services')}>{t('header_services')}</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  const { t, lang } = useTranslation('common')
  
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex gap-4">
          <div className="flex items-center flex-1 md:gap-x-12">
            <Link href="#" aria-label="Home" className="shrink-0">
              <Logo className="w-auto h-16" />
            </Link>
            <div className="hidden md:flex md:gap-x-6 md:flex-1 md:justify-end">
              <NavLink href={"#"+t('link_what_we_can_do')}>{t('header_what_we_can_do')}</NavLink>
              <NavLink href={"#"+t('link_services')}>{t('header_services')}</NavLink>
            </div>
          </div>
          <div className="flex items-center shrink-0 gap-x-5 md:gap-x-8">
            <button onClick={async () => await setLanguage(lang == 'es' ? 'en' : 'es')}>{getUnicodeFlagIcon(t('translate_to_flag'))}</button>
            <Button href="https://wa.link/gnalak" target="_blank" color="purple" className="max-lg:hidden">
              <span>
                {t('header_cta_contact')} <span className="hidden lg:inline">{t('header_cta_now')}</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
