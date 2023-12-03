import Categories from '@/components/Categories'
import Items from '@/components/Items'
import { getCategories, getSeaFood } from '@/lib/api'
import InputComp from '@/components/mainComps/InputComp'
import testApi from '@/controllers/test'

export default async function Home() {

  const test = await testApi()
  console.log(test)

  return (
    <div className='bg-white'>
      <div>
        <InputComp />
      </div>
    </div>
  )
}
