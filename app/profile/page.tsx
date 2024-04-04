import BackButton from "@/components/Actions/BackButton"
import grabUserData from "@/controllers/grabUserData"


export default async function Profile() {


    const data = await grabUserData()
    console.log(data)
    if (!data) return <h1>Loading...</h1>


    return (
        <div className="flex flex-col">
            <div className="flex justify-between bg-white p-2">
                <BackButton />
                <h1 className="">Profile</h1>
            </div>
            <div className="flex flex-col ">
                {/* <ProfileComp /> */}
                <div className="px-2">
                    Recipes saved
                    <ul className=" divide-y-2 ">
                        {/* {data?.map((recip, index) => (
                            <li className="py-2 flex gap-2" key={index}>
                                <Image src={`${recip.image}/preview`} unoptimized height={100} width={100} alt="recipe pic" />
                                <h1>{recip.name}</h1>

                            </li>
                        ))} */}
                    </ul>
                </div>
            </div>
        </div>
    )
}