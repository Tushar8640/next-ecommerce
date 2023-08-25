import Link from "next/link";


type BreadcrumbType = {
  title: string;
};

const Breadcrumb = ({ title }: BreadcrumbType) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <Link href="#">
              <i className="icon-home"></i>
            </Link>
          </li>
          <li>{title}</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
