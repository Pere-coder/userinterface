import { createClient } from "contentful"
import Image from "next/image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })


export const getStaticPaths =async () => {
    const res = await client.getEntries({
        content_type: 'recipie'
    })


    const paths = res.items.map(item => {
        return {
            params: {slug: item.fields.slug}
        }
    })

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({params}) {
   const {items} = await client.getEntries({
    content_type: 'recipie',
    'fields.slug': params.slug
   })
   
   return {
    props: {recipie: items[0]}
  }
  }


 

export default function RecipieDetails({recipie}) {
    const { featuredImage, title, cookingTime, ingredients, method} = recipie.fields;
  return (
    <div className="container flex flex-col items-center mx-auto py-20">
     <h1 className="text-[40px]">Recipie Details</h1> 
      <div>
        <div>
          <Image src={'https:' + featuredImage.fields.file.url}
          width={800}
          height={800}/>
        </div>
        <h2 className="mt-10 text-[30px]">{title}</h2>
        <div>{ingredients.map((items)=> (<li key={items}>{items}</li>))}</div>

      </div>
     
      <div className="lg:w-[800px] mt-10">
        <h3 className="text-[30px]">Method</h3>
        <div>{ documentToReactComponents(method)}</div>
      </div>
      
    </div>
  )
}
