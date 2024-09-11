import React, { useState } from 'react'
import Mainlayout from '../../components/Mainlayout'
import Breadcrumbs from '../../components/Breadcrumbs'
import { images, stables } from '../../constants'
import { Link, useParams } from 'react-router-dom'
import SuggestedPost from './Container/SuggestedPost'
import ShareButton from '../../components/ShareButton'
import { useQuery } from '@tanstack/react-query'
import { getSinglePost } from '../../services/index/Post'
import ArticleDetaileskeleton from './component/ArticleDetaileskeleton'
import Errormessage from '../../components/Errormessage'


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
  const {slug} = useParams()
  const [BreadcrumbData, setBreadcrumbData] = useState([])
  const {data, isLoading, isError} = useQuery({
    queryFn: () => getSinglePost({slug}),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setBreadcrumbData([
        {name: "Home", link: "/"},
        {name: "Blog", link: "/blog"},
        {name: "Article title", link: `/blog/${data.slug}`},
      ])
    } 
  })
  return (
    <Mainlayout>
      {isLoading ? (
        <ArticleDetaileskeleton/>
      ) : isError ? (
        <Errormessage message="could not fetch the post"/>
      ): (

        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5
        lg:flex-row lg:gap-x-5 lg:items-start
        '>
            <article className='flex-1'>
             <Breadcrumbs data={BreadcrumbData}/>
             <img className='rounded-xl w-full' src={data?.photo ? stables.upload_Folder_Base_Url + data?.photo : images.PostImage} alt={data?.title} />
             <div className='mt-4 flex gap-2'>
             {data?.categories.map((category) => (   
             <Link to={`/blog?category=${category.name}`} className='text-primary text-sm inline-block 
              md:text-base
             '>
             {category.name}
             </Link>
             ))}
             </div>
             <h1 className='text-xl font-medium text-Dark-hard mt-4
              md:text[26px]
             '>{data?.Title}</h1>
             <div className='mt-4 text-Dark-soft'>
            <p className='leading-7'>
              {data?.Caption}
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
      )}
    </Mainlayout>
  )
}

export default ArticleDetailpage