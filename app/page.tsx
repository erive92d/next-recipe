
import Categories from '@/components/mainComps/Categories'
import InputComp from '@/components/mainComps/InputComp'
import RandomRecipe from '@/components/mainComps/RandomRecipe'
import { getCategories, getRandomMeal } from '@/lib/api'

export default async function Home() {
 
  return (
    <div className='bg-slate-200 h-screen'>
      <div className=''>
        <InputComp />
      </div>
      <div className=''>
        <Categories/>
      </div>
      <RandomRecipe/>
    </div>
  )
}
