import Image from "next/image"
import Link from "next/link"


export default function RecipieCard({ recipe }) {

  const {title, slug, cookingTime, thumbnail } = recipe.fields


  return (
    <div className="flex flex-col gap-10 mt-20">
      <div>
        <Image src={'https:' + thumbnail.fields.file.url}
        width={500}
        height={500}
        />
      </div>

      <div>
        <div>
          <h4>{title}</h4>
          <p>Takes approx { cookingTime} mins to make</p>
        </div>
        <div className="bg-orange-500 p-2 text-white mt-5 ">
          <Link href={'/recipies/' + slug}>Cook this</Link>
        </div>
      </div>
    </div>
  )
}
