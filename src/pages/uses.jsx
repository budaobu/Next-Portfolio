import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, href, description, cta = "Check it out here" }) {
  return (
    <Card as="article">
      <Card.Title as="h3">
        {href ? (
          <Card.Link 
            href={href} 
            rel="nofollow noopener noreferrer" 
            target="_blank"
          >
            {title}
          </Card.Link>
        ) : (
          title
        )}
      </Card.Title>
      <Card.Description>{description}</Card.Description>
      {href && (
        <Card.Cta>
          {cta}
        </Card.Cta>
      )}
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Joey Hu</title>
        <meta
          name="description"
          content="Here’s a big list of all of my favorite stuff."
        />
      </Head>
      <SimpleLayout
        title="Here’s a big list of all of my favorite stuff."
        intro="This is my curated list of software, hardware, and gadgets that I rely on to stay on track with my work—or at least, pretend to. These are my top picks for productivity and creativity."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Appearance 
              title="MacBook Pro (2015)" 
              href="https://u.jd.com/urou5Nl"
              description="I have used this Macbook Pro for more than 9 years. Maybe it should be retired, but it still works."
            />
            <Appearance
              title="iPhone 14"
              href="https://u.jd.com/uGouHqR"
              description="I primarily use an iPhone 14, which combines powerful performance, advanced camera features, and a sleek design."
            />
            <Appearance
              title="Redmi Note 10 Pro"
              href="https://u.jd.com/ureinfK"
              description="As my backup device, the Redmi Note 10 Pro offers a solid Android experience at an affordable price."
            />
          </ToolsSection>
          <ToolsSection title="AI Platform">
            <Appearance
              title="OpenAI"
              href="https://openai.com"
              description="I use OpenAI to integrate advanced AI models into my projects, from natural language understanding to image generation. It provides powerful APIs that enhance automation and problem-solving capabilities."
            />
            <Appearance
              title="Claude.ai"
              href="https://claude.ai"
              description="I use Claude.ai for seamless AI-powered conversations. Its advanced dialogue capabilities help me deliver personalized experiences and handle customer interactions effectively."
            />
          </ToolsSection>
          <ToolsSection title="DevOps Tools">
            <Appearance
              title="v0.dev"
              href="https://v0.dev/"
              description="I use v0.dev to collaborate on turning my product ideas into reality. I submit development requests, and together we build and refine features, streamlining the entire product development process."
            />
          </ToolsSection>
          <ToolsSection title="Design">
            <Appearance
              title="Modao"
              href="https://modao.cc/"
              description="For product prototyping, I rely on Modao, a comprehensive UI/UX design tool that enables rapid and intuitive interface wireframing and interactive prototype creation."
            />
          </ToolsSection>
          <ToolsSection title="SaaS">
            <Appearance
              title="Zeabur"
              href="https://zeabur.com?referralCode=budaobu"
              description="I use Zeabur to quickly deploy and scale my applications without managing servers. It automates cloud infrastructure, letting me focus on development while saving time and reducing complexity."
            />
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Appearance
              title="Typora"
              href="https://typora.io/"
              description="I use Typora for seamless markdown editing. Its minimalist design and
              real-time preview make writing a smooth and enjoyable process, whether
              I&apos;m working on documentation, notes, or blog posts."
            />
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
