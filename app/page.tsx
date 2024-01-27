import Categories from '@/components/mainComps/Categories'
import PeopleChoice from '@/components/mainComps/PeopleChoice'
import RandomRecipe from '@/components/mainComps/RandomRecipe'
import { redirect } from '@/node_modules/next/navigation'

export default async function Home() {

  redirect("/home")
}
