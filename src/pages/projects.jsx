import Image from 'next/future/image'
import Head from 'next/head'

import { useState } from 'react';
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Link, FolderGit2 } from 'lucide-react'

const projects = [
  {
    name: '买电车还是油车',
    description:
      "一个帮助用户决定是否购买电动汽车的工具。通过考虑多个因素，如年行驶里程、充电条件、使用场景等，为用户提供建议。",
    link: {
      href: 'https://fuel-or-elec-car.dakaiai.app/',
      label: 'https://fuel-or-elec-car.dakaiai.app/',
    },
    // logo: youphoria,
  },
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Jeoy Hu</title>
        <meta
          name="description"
          content="The bridges I've tried to build between ideas and action."
        />
      </Head>
      <SimpleLayout
        title="Digital playground, turning creativity into reality."
        intro="Rapid prototypes engineered through creative problem-solving and AI collaboration."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={`https://favicon.im/${project.link.href}`}
                  alt={`${project.name} favicon`}
                  className="h-8 w-8 rounded-full"
                  unoptimized
                  onError={(e) => {
                    e.currentTarget.src = '';  // Clear the image source
                    const icon = <FolderGit2 size={32} strokeWidth={1.5} className="h-8 w-8 text-zinc-400" />; // Use FolderGit2 icon
                    e.currentTarget.parentElement.appendChild(icon);  // Append the icon to the image's parent element
                  }}
                  key={`favicon-${project.name}`}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank" rel="noopener">{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <Link size={24} strokeWidth={1.5} className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
