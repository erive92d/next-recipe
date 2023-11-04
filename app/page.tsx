import Categories from '@/components/Categories'
import Items from '@/components/Items'
import { getCategories, getSeaFood } from '@/lib/api'
import Image from 'next/image'


export default async function Home() {

  return (
    <div className=''>
      <Categories />
    </div>
  )
}
