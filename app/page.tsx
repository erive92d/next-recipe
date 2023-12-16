import Categories from '@/components/mainComps/Categories'
import PeopleChoice from '@/components/mainComps/PeopleChoice'

export default async function Home() {

  return (
    <div className=' min-h-screen flex flex-col space-y-6 lg:flex-row'>

      {/* CATEGORIES */}
      <div className=' bg-gray-100 border-b-2 my-4'>
        <div className='flex px-6 py-2 bg-white justify-between items-center'>
          <h1 className='font-bold text-black text-2xl'>Popular Categories</h1>
          <a className='btn btn-xs btn-ghost rounded-xl bg-gray-200 font-bold text-green-600'>Show all</a>
        </div>
        <Categories />
      </div>

      {/* FOR YOU, COMING SOON */}
      <div className='px-6'>
        <h1 className='font-bold text-black text-2xl'>For you</h1>      </div>

      {/* USERS CHOICE */}
      <div>
        <h1 className='text-gray-500 font-2xl font-bold px-2'>Peoples choice</h1>
        <PeopleChoice />
      </div>
    </div>
  )
}
