import RecipieCard from "@/components/RecipieCard"
import { createClient } from "contentful"
import Image from 'next/image'

export async function getStaticProps() {
   
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'recipie'})

  return {
    props: {
      recipies: res.items
    }
  }
}

export default function Home({ recipies}) {
  console.log(recipies)
  return (
    <div >
        
        {recipies.map((recipe) => (
        <RecipieCard key={recipe.sys.id}  recipe={recipe}/>
      ))}
        
        
    </div>
  )
}
