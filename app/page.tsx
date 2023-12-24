import Categories from '@/components/mainComps/Categories'
import PeopleChoice from '@/components/mainComps/PeopleChoice'
import RandomRecipe from '@/components/mainComps/RandomRecipe'

export default async function Home() {

  return (
    <div className=' min-h-screen flex flex-col space-y-10 lg:my-4 '>
      <div className='lg:flex lg:flex-row-reverse lg:justify-around'>
          {/* CATEGORIES */}
          <div className='lg:w-1/3 bg-main-bg shadow shadow-orange-500 space-y-10 '>
                <Categories />
            </div>
              {/* FOR YOU */}
          <div className='space-y-2 shadow lg:w-1/2'>
            <h1 className='font-bold bg-orange-500 text-white px-6 py-2 text-2xl'>Today Recipe</h1>
              <RandomRecipe />
          </div>
      </div>
  

      {/* USERS CHOICE */}
      <div className='bg-white space-y-2 py-4'>
        <h1 className='font-bold bg-orange-500 text-white px-6 py-2 text-2xl'>Top 5 recipes</h1>
        <PeopleChoice />
      </div>
    </div>
  )
}
