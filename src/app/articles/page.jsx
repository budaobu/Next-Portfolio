import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';
import Link from 'next/link';

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title>
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} className="md:hidden" decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" dateTime={article.date} className="mt-1 hidden md:block">
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

export default async function ArticlesIndex() {
  const articles = (await getAllArticles()).map(({ component, ...meta }) => meta);
  return (
    <>
      <SimpleLayout
        title="Writing on product design, AI coding, prompt engineering and Life"
        intro="A collection of thoughts exploring software engineering, product insights, innovative reflections, and personal discoveries. Each article is a captured moment of growth, a digital notebook that unfolds the nuanced stories behind code, creativity, and human experience."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map(article => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

export const metadata = {
  title: 'Articles - Joey Hu',
  description:
    'All of my long-form thoughts on AI coding, prompt engineering, product design, and more, collected in chronological order.',
};