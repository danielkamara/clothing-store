const ProductList = ({ fakeStore }) => {
  return (
    <>
      <h1>The Fit</h1>
      <div className="box">
        {fakeStore.map((value) => {
          return (
            <>
              <div className="card">
                <div className="description">
                  <h5>Hello</h5>
                  <h1>Image</h1>
                </div>
                <p>description</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
