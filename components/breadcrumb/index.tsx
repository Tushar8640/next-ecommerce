type BreadcrumbType = {
  title: string;
};

const Breadcrumb = ({ title }:BreadcrumbType) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <a href="#">
              <i className="icon-home"></i>
            </a>
          </li>
          <li>{title}</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
