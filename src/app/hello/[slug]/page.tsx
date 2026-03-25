interface HelloPageProps {
  params: Promise<{ slug: string }>;
}

export default async function HelloPage({ params }: HelloPageProps) {
  const { slug } = await params;

  return (
    <div className="pt-20">
      <p>Hello, {slug}!</p>
    </div>
  );
}
