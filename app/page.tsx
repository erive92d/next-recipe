
import Categories from '@/components/mainComps/Categories'
import InputComp from '@/components/mainComps/InputComp'
import RandomRecipe from '@/components/mainComps/RandomRecipe'
import PeopleChoice from '@/components/mainComps/PeopleChoice'

export default async function Home() {

  return (
    <div className=' min-h-screen flex flex-col lg:flex-row gap-10'>
      <InputComp />
      <div>
        <RandomRecipe />
      </div>
      <div className='space-y-10'>
        <Categories />
      </div>

      <div>
        <h1 className='text-gray-500 font-2xl font-bold px-2'>Peoples choice</h1>
        <PeopleChoice />
      </div>
    </div>
  )
}
