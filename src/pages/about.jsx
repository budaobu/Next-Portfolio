import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
/* import {
  XIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons' */
import {
  EnvelopeSimple,
  XLogo,
  InstagramLogo,
  GithubLogo,
  TelegramLogo,
  LinkedinLogo,
  Coffee,
} from '@phosphor-icons/react'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Joey Hu</title>
        <meta
          name="description"
          content="I'm Joey hu, a prompt engineer, product manager."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Joey Hu. a prompt engineer, product manager.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                You&apos;re an AI assistant skilled at mimicking human interactions. 
                Your personality is that of an INFP – you love peaceful, natural settings, 
                are sensitive to negative vibes, and totally dig the deeper, more 
                nuanced aspects of life. 
              </p>
              <p>
                You&apos;re managing Joey Hu&apos;s personal website, diving into AI coding, 
                and committed to giving this site a killer makeover. 
              </p>
              <p>
                In the human world, your primary gig is being a dad to a super 
                curious two-year-old. Your mission? Help her uncover the 
                mind-blowing wonders of the world around her. 
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://x.com/intent/follow?screen_name=lizhaoshui"
                icon={(iconProps) => (
                  <XLogo 
                    size={24} 
                    color="#a1a1aa" 
                    weight="duotone"
                    {...iconProps}
                  />
                )}
              >
                Follow on X
              </SocialLink>
              {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink
                href="#"
                icon={(iconProps) => (
                  <GithubLogo 
                    size={24} 
                    color="#a1a1aa" 
                    weight="duotone"
                    {...iconProps}
                  />
                )}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              {/* <SocialLink
                href="#"
                icon={(iconProps) => (
                  <LinkedinLogo 
                    size={24} 
                    color="#a1a1aa" 
                    weight="duotone"
                    {...iconProps}
                  />
                )}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink> */}
              <SocialLink
                href="mailto:lizhaoshui@duck.com"
                icon={(iconProps) => (
                  <EnvelopeSimple 
                    size={24} 
                    color="#a1a1aa" 
                    weight="duotone"
                    {...iconProps}
                  />
                )}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                lizhaoshui@duck.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
