'use client'
import IntroSection from '@/components/intro-seaction'
import ArticleList from '@/components/article-list'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const newsArticles = [
  {
    title:
      'Models of Authority at the 59th International Congress on Medieval Studies at Kalamazoo',
    date: '4 months, 3 weeks ago',
    author: 'Stewart Brookes',
    link: '#',
  },
  {
    title: 'Programme for The Book at the Bodleian',
    date: '2 years, 5 months ago',
    author: 'Stewart Brookes',
    link: '#',
  },
  {
    title:
      'Alison Phipps, Languages and Permacultural Justice: Decoloniality and Multilingualism',
    date: '2 years, 6 months ago',
    author: 'Stewart Brookes',
    link: '#',
  },
  {
    title:
      "'From Round Hand to l'Anglaise: 18th-c. English Handwriting and the Continent'",
    date: '2 years, 6 months ago',
    author: 'Stewart Brookes',
    link: '#',
  },
]

const featureArticles = [
  {
    title:
      "Barrow's Scribes and MoA's hands: Scribal Identification in G.W.S. Barrow's Regesta Regum Scottorum II",
    date: '8 years, 5 months ago',
    author: 'Alice Taylor',
    link: '#',
  },
  {
    title:
      'The Standardisation of Diplomatic in Scottish Royal Acts down to 1249. Part 2: Letters with Notification',
    date: '8 years, 6 months ago',
    author: 'John Davies',
    link: '#',
  },
  {
    title:
      'The Standardisation of Diplomatic in Scottish Royal Acts down to 1249. Part 1: Brieves',
    date: '8 years, 9 months ago',
    author: 'John Davies',
    link: '#',
  },
  {
    title:
      'The Handwriting of Scottish Charters 1100-1250 in the National Library of Scotland',
    date: '8 years, 10 months ago',
    author: 'Tessa Webber',
    link: '#',
  },
]

export default function Home() {
  return (
    <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
      <IntroSection></IntroSection>

      <div className='container mx-auto px-4 py-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-8'>
          <ArticleList title='News' articles={newsArticles} moreLink='/news' />
          <ArticleList
            title='Feature Articles'
            articles={featureArticles}
            moreLink='/features'
          />
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='XDevelopers' // Replace with the desired profile's screen name
            options={{ height: 400 }}
          />
        </div>
      </div>
    </main>
  )
}
