import Image from "next/image"
import Link from "next/link"


export default function RecipieCard({ recipe }) {

  const {title, slug, cookingTime, thumbnail } = recipe.fields


  return (
    <div>
      <div>
        <Image src={'https:' + thumbnail.fields.file.url}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
        />
      </div>

      <div>
        <div>
          <h4>{title}</h4>
          <p>Takes approx { cookingTime} mins to make</p>
        </div>
        <div>
          <Link href={'/recipies/' + slug}>Cook this</Link>
        </div>
      </div>
    </div>
  )
}
