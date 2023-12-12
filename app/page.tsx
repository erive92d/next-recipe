
import Categories from '@/components/mainComps/Categories'
import InputComp from '@/components/mainComps/InputComp'
import RandomRecipe from '@/components/mainComps/RandomRecipe'
import PeopleChoice from '@/components/mainComps/PeopleChoice'

export default async function Home() {

  return (
    <div className='bg-slate-200 h-screen flex flex-col lg:flex-row gap-4'>
      <div className='space-y-4'>
        <InputComp />
        <Categories />
      </div>
      <div>
        <h1 className='text-gray-500 font-2xl font-bold px-2'>Recommended for you</h1>
        <RandomRecipe />
      </div>
      <div>
        <h1 className='text-gray-500 font-2xl font-bold px-2'>Peoples' choice</h1>
        <PeopleChoice />
      </div>
    </div>
  )
}
