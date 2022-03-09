const Item = props => {
  const {eachItemDetails} = props
  const {name} = eachItemDetails
  return (
    <li>
      <p>
        {name}: {name.length}
      </p>
    </li>
  )
}

export default Item
