import React from 'react'
import Mainlayout from '../../components/Mainlayout'
import Breadcrumbs from '../../components/Breadcrumbs'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import SuggestedPost from './Container/SuggestedPost'
import ShareButton from '../../components/ShareButton'


const BraedCrumbData = [
    {name: "Home", link: "/"},
    {name: "Blog", link: "/blog"},
    {name: "Article title", link: "/blog/1"},
]

const postData = [
  {
    id: "1",
    image: images.PostImage,
    title: "Help Children Get Better Education",
    createdAt: "02 May 2024",
  },
  {
    id: "2",
    image: images.PostImage,
    title: "Help Children Get Better Education",
    createdAt: "02 May 2024",
  },  {
    id: "3",
    image: images.PostImage,
    title: "Help Children Get Better Education",
    createdAt: "02 May 2024",
  },  {
    id: "4",
    image: images.PostImage,
    title: "Help Children Get Better Education",
    createdAt: "02 May 2024",
  },
]

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education"
]

const ArticleDetailpage = () => {
  return (
    <Mainlayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5
        lg:flex-row lg:gap-x-5 lg:items-start
        '>
            <article className='flex-1'>
             <Breadcrumbs data={BraedCrumbData}/>
             <img className='rounded-xl w-full' src={images.PostImage} alt="laptop" />
             <Link to="/blog?category=selectCategory" className='text-primary text-sm inline-block mt-4
              md:text-base
             '>
             Education
             </Link>
             <h1 className='text-xl font-medium text-Dark-hard mt-4
              md:text[26px]
             '>Help Children Get Better Education</h1>
             <div className='mt-4 text-Dark-soft'>
            <p className='leading-7'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat praesentium error. Consequatur ex exercitationem totam praesentium incidunt earum ullam.
            </p>
             </div>
            </article>
             <div>
             <SuggestedPost header="Latest Article" post={postData} tags={tagsData}
             className="mt-8 lg:mt-0 lg:max-w-xs"
             />
             <div className='mt-7'>
              <h2 className='font-medium md:text-xl text-Dark-hard mb-4'>share on:</h2>
              <ShareButton url={encodeURI("https://www.linkedin.com/in/mshahzad-/")} 
              title={encodeURIComponent("CLient-side and server side explanation")}/>
             </div>
             </div>
        </section>
    </Mainlayout>
  )
}

export default ArticleDetailpage