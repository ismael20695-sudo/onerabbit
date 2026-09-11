import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notFound">

      <div className="notFoundInner">

        <span>404</span>

        <h1>
          This image
          <br />
          doesn&apos;t exist.
        </h1>

        <p>
          The page you are looking for
          has disappeared into the archive.
        </p>

        <Link href="/">
          RETURN HOME ↗
        </Link>

      </div>

    </main>
  );
}