import Fruit from "./Fruit"
export default function Fruits({fruits}) {
  return (
    <div>
      <ul>
        {fruits.map(f => (
          <Fruit key={f.name} fruit={f} />
        ))}
      </ul>
    </div>
  )
}
