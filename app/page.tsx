import Categories from '@/components/mainComps/Categories'
import PeopleChoice from '@/components/mainComps/PeopleChoice'

export default async function Home() {

  return (

    <div className='py-10 text-black'>
      <PeopleChoice />
      <Categories />
    </div>
  )
}
