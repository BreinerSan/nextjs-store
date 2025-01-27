interface CategoryProps {
    params: {
      categories: string;
    },
		searchParams: {
			social?: string | undefined;
		}
}

export default async function Category(props: CategoryProps) {
  const { categories } = await props.params;
	const searchParams = await props.searchParams;
	console.log(searchParams.social);
  return (
    <div>
      <h1>Categoria dinamica {categories}</h1>
    </div>
  );
}