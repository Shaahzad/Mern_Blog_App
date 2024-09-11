import React from 'react'
import ArticleCard from '../../components/ArticleCard'
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import { getAllPost } from '../../services/index/Post';
import toast from 'react-hot-toast';
import Articlecardskeleton from '../../components/Articlecardskeleton';
import Errormessage from '../../components/Errormessage';

const Article = () => {

  const {data, isLoading, isError} = useQuery({
    queryFn: () => getAllPost(),
    queryKey: ['posts'],
    onError:(error) => {
      toast.error(error.message)
    }
  })
  return (
    <section className='flex flex-col container mx-auto  px-5 py-10'>
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {isLoading ? (
          [...Array(3)].map((item,index)=>(
            <Articlecardskeleton key={index} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"/>
          )))
           :  isError ? <Errormessage message="could not fetch the post"/> : data?.map((post) => (
          <ArticleCard key={post._id} post={post} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]'/>
        ))
        }
      </div>
      <button className='mx-auto flex items-center gap-x-2 text-primary font-bold border-2 border-primary rounded-lg px-6 py-3'>
        <span>More Article</span>
        <FaArrowRight className='w-3 h-3'/>
      </button>
    </section>
  )
}

export default Article