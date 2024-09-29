import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Article {
  title: string
  date: string
  author: string
  link: string
}

interface ArticleListProps {
  title?: string
  articles: Article[]
  moreLink: string
}

export default function ArticleList({
  title = 'Articles',
  articles = [],
  moreLink,
}: ArticleListProps) {
  return (
    <div className='space-y-4'>
      <h2 className='text-2xl font-bold text-gray-700'>{title}</h2>
      {articles && articles.length > 0 ? (
        <ul className='space-y-3'>
          {articles.map((article, index) => (
            <li key={index}>
              <Link
                href={article.link}
                className='text-blue-600 hover:underline'
              >
                {article.title}
              </Link>
              <p className='text-sm text-gray-500'>
                {article.date}, by {article.author}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles available.</p>
      )}
      <Button asChild variant='outline' className='text-blue-600'>
        <Link href={moreLink}>
          More {typeof title === 'string' ? title.toLowerCase() : 'articles'} »
        </Link>
      </Button>
    </div>
  )
}
