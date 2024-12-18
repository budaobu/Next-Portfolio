import { ArticleLayout } from '@/components/ArticleLayout';

export default async function Layout({ children, params }) {
  const { metadata } = await import(`./${params.slug}/page.mdx`);

  return (
    <ArticleLayout meta={metadata}>
      {children}
    </ArticleLayout>
  );
}