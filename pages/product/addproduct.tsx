import Layout from "../../layouts/Main";
import Footer from "../../components/footer";
import Breadcrumb from "../../components/breadcrumb";

export default function AddProduct() {
  return (
    <Layout>
      <Breadcrumb title="product/addproduct" />
      <section className="addproducts-page">
        <div className="container">
          <div className="form-block">
            <h2 className="form-block__title">Add Product</h2>

            <form className="form">
              <div className="form-flex_container">
                <div className="left">
                  <div className="form__input-row">
                    <input
                      className="form__input"
                      placeholder="Product Name"
                      type="text"
                    />
                  </div>

                  <div className="form__input-row">
                    <input
                      className="form__input"
                      placeholder="Price"
                      type="number"
                    />
                  </div>
                </div>

                <div className="right">
                  <div className="form__input-row">
                    <input
                      className="form__input"
                      placeholder="Current Price"
                      type="number"
                    />
                  </div>

                  <div className="form__input-row">
                    <input
                      className="form__input"
                      type="number"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
