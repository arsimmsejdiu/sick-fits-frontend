import ItemStyles from './styles/ItemStyles';

export default function Product({product}) {
  return (
    <div>
      <ItemStyles>{product.name}</ItemStyles>
    </div>
  );
}
