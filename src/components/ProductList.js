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
                  <h5>{value.title}</h5>
                  <img src={value.image} alt="Images of store products" />
                </div>
                <p>{value.description}</p>
                <p>{value.price}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
