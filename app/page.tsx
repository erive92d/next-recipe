import Categories from '@/components/mainComps/Categories'
import PeopleChoice from '@/components/mainComps/PeopleChoice'
import RandomRecipe from '@/components/mainComps/RandomRecipe'

export default async function Home() {

  return (

    <div className='lg:w-4/5 mx-auto py-10 text-black'>
      {/* <RandomRecipe /> */}
      <PeopleChoice />

    </div>
  )
}
