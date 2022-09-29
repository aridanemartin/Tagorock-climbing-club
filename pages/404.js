import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="custom404">
      <div>
        <h1>
          Error <strong>404</strong>
        </h1>
        <p>It's easy to get lost</p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
