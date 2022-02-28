const ProductList = ({ fakeStore }) => {
  return (
    <>
      <h1>The Fit</h1>
      <div className="box">
        {fakeStore.map((product) => {
          return (
            <>
              <div className="card">
                <div className="description">
                  <h5>{product.title}</h5>
                  <img src={product.image} alt="Images of store products" />
                </div>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
