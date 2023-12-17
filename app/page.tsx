import Categories from '@/components/mainComps/Categories'
import PeopleChoice from '@/components/mainComps/PeopleChoice'
import RandomRecipe from '@/components/mainComps/RandomRecipe'

export default async function Home() {

  return (
    <div className=' min-h-screen flex flex-col space-y-6 lg:flex-row'>

      {/* CATEGORIES */}
      <div className=' bg-main-bg shadow shadow-orange-500 space-y-10'>
        {/* <div className='flex text-white  bg-black bg-opacity-70 px-6 py-4 justify-between items-center'>
          <h1 className='font-bold  text-2xl'>Popular Categories</h1>
          <a className='btn btn-xs btn-ghost rounded-xl bg-gray-200 font-bold text-orange-500'>Show all</a>
        </div> */}
        <Categories />
      </div>

      {/* FOR YOU, COMING SOON */}
      <div className='space-y-2 shadow shadow-orange-500'>
        <h1 className='font-bold bg-orange-500 text-white px-6 py-2 text-2xl'>Today Recipe</h1>
        <RandomRecipe />
      </div>

      {/* USERS CHOICE */}
      <div className='bg-white space-y-2 py-4'>
        <h1 className='font-bold bg-orange-500 text-white px-6 py-2 text-2xl'>Top recipes</h1>
        <PeopleChoice />
      </div>
    </div>
  )
}
