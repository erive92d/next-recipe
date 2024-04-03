import Categories from '@/components/mainComps/Categories'
import PeopleChoice from '@/components/mainComps/PeopleChoice'
import RandomRecipe from '@/components/mainComps/RandomRecipe'

export default async function Home() {

  return (
    <div className=' min-h-screen flex flex-col lg:w-3/4 lg:mx-auto space-y-10 lg:my-4 '>
      <div className='space-y-10 '>
          {/* CATEGORIES */}
          <div className="space-y-10">
                <Categories />
            </div>
              {/* Today's recipe*/}
          <div className=' bg-gray-300 py-4 text-black lg:space-y-10'>
            {/* <h1 className='font-bold bg-orange-500 text-white px-6 py-2 text-2xl'> */}
              <h1 className='text-3xl italic font-sans py-2 font-bold px-6 '>
              Today Recipe</h1>
              <RandomRecipe />
          </div>
      </div>

      {/* USERS CHOICE */}
      <div className='bg-white space-y-2 py-4 border-b'>
        <h1 className='text-3xl italic font-sans py-2 font-bold px-6 text-gray-800'>
          Top recipes</h1>
        <PeopleChoice />
      </div>
    </div>
  )
}
