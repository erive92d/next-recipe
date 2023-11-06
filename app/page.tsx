import Categories from '@/components/Categories'
import Items from '@/components/Items'
import { getCategories, getSeaFood } from '@/lib/api'
import InputComp from '@/components/mainComps/InputComp'

export default async function Home() {

  return (
    <div className='bg-white'>
      <div>
        <InputComp />
      </div>
    </div>
  )
}
