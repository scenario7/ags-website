import React from 'react'
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import client from '@/app/client';

const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

interface Article {
  image: string; // Image URL as string
  title: string;
  date: string;
  tag: string;
  description: string;
  slug: string;
}

interface NewsPost {
  _id: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  slug: { current: string };
  image: { asset: { url: string } };
  _createdAt: string;
}

async function getNewsPosts(): Promise<Article[]> {
    try {
      const newsPosts: NewsPost[] = await client.fetch(
        `*[_type == "newsPost"]{
          _id,
          title,
          description,
          date,
          tag,
          slug,
          image { asset -> { url } },
          _createdAt
        } | order(_createdAt desc)`
      );
  
      if (newsPosts && newsPosts.length > 0) {
        return newsPosts.map((post) => ({
          image: post.image?.asset?.url || '/default-image.jpg', // Fallback to a default image
          title: post.title || 'Untitled',
          date: post.date
            ? new Intl.DateTimeFormat('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              }).format(new Date(post.date))
            : 'Unknown date',
          tag: post.tag || 'Uncategorized',
          description: post.description || 'No description available.',
          slug: post.slug?.current || '',
        }));
      } else {
        console.error('No news posts found');
        return [];
      }
    } catch (error) {
      console.error('Error fetching news posts:', error);
      return [];
    }
  }

const SectionSeven = async () => {

  const articles: Article[] = await getNewsPosts();


  return (
    <div className='px-3 md:px-10'>
                <div className="flex flex-col items-start py-10">
          <div className="flex items-center gap-3">
            <div className="bg-[#ED2939] w-3 h-3 rounded-full shadow-lg shadow-[#ED2939] animate-blink"></div>
            <h1 className={`${futuraMedium.className} underline text-3xl`}>NEWS</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center py-5">
          <img src={articles[0].image} alt="" className="h-96 w-96 object-cover" />
          <div className="flex flex-col items-start gap-5 px-3 ">
            <p className={`${inter.className} text-white uppercase bg-[#ED2939] px-3 py-1`}>
              {articles[0].tag}
            </p>
            <h2 className={`${inter.className} tracking-tighter text-gray-400`}>
              {articles[0].date}
            </h2>
            <h2 className={`${futuraMedium.className} text-4xl tracking-tighter`}>
              {articles[0].title}
            </h2>
            <p className={`${inter.className} tracking-tighter w-3/4`}>
              {articles[0].description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {articles.slice(1).map((article: Article) => (
            <div className="flex md:flex-row flex-col items-center gap-5" key={article.slug}>
              <img src={article.image} alt={article.title} className="h-72 w-72 object-cover" />
              <div className="flex flex-col items-start gap-5 px-3">
                <h2 className={`${futuraMedium.className} text-2xl tracking-tighter text-center md:text-left`}>
                  {article.title}
                </h2>
                <h1 className={`${inter.className} text-lg tracking-tighter text-center md:text-left text-gray-400`}>
                    {article.date}
                </h1>
                <p className={`${inter.className} tracking-tighter text-center md:text-left`}>
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SectionSeven