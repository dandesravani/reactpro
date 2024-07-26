export default function Fruit({fruit}) {
  return (
    <>
      <li>
        {fruit.name} ${fruit.price} {fruit.soldOut ? "soldout" : ""}
      </li>
    </>
  )
}
