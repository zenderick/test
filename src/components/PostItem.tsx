import { Post } from "contentlayer/generated"
import Link from "next/link"
import ButtonLink from "./ButtonLink";

interface Props{
    pos: Post,
}

const PostItem = ({pos}: Props) => {
  return (
    <article className="rounded border p-4">
      <h2 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-bold text-transparent">
        <Link href={pos.url}>{pos.title}</Link>
      </h2>
      <time>
        {new Date(pos.date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <p>{pos.description}</p>
      <ButtonLink href={pos.url}>Seguir leyendo</ButtonLink>
    </article>
  );
}

export default PostItem