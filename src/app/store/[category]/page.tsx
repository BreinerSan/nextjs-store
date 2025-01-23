interface CategoryProps {
    params: {
        category: string;
    }
}

export default async function Category(props: CategoryProps) {
  const { category } = await props.params;
  return (
    <div>
      <h1>Categoria dinamica {category}</h1>
    </div>
  );
}