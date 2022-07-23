import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-base-200">
      <div className="mx-auto flex max-w-screen-sm justify-between p-4">
        <div className="text-2xl font-bold">
          <Link href="/">Polymo</Link>
        </div>
      </div>
    </div>
  );
};
