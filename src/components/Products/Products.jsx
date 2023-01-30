import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  
    const  ActionGenre = products?.filter(item=>{
        return (item.genres[0]=='Action');
    });
    const  AnimeGenre = products?.filter(item=>{
        return (item.genres.includes('Anime'));
    });
    const  ComedyGenre = products?.filter(item=>{
        return (item.genres[0]=='Comedy');
    });
    const  CrimeGenre = products?.filter(item=>{
        return (item.genres.includes('Crime'));
    });
    const  AdventureGenre = products?.filter(item=>{
        return (item.genres.includes('Adventure'));
    });



    return (
        <div className="products-container">
                  {!innerPage && <div className="sec-heading">Anime</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {AnimeGenre?.map((item) => (
                
                    <Product
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        image={item.image}
                        quickaccess={item}
                    />
                ))}

            </div>

            {!innerPage && <div className="sec-heading">Adventure</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {AdventureGenre?.map((item) => (
                
                    <Product
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        image={item.image}
                        quickaccess={item}
                    />
                ))}
            </div>
            {!innerPage && <div className="sec-heading">Action</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {ActionGenre?.map((item) => (
                
                    <Product
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        image={item.image}
                        quickaccess={item}
                    />
                ))}
            </div>
            {!innerPage && <div className="sec-heading">Comedy</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {ComedyGenre?.map((item) => (
                
                    <Product
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        image={item.image}
                        quickaccess={item}
                    />
                ))}
            </div>
     
            {!innerPage && <div className="sec-heading">Crime</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {CrimeGenre?.map((item) => (
                
                    <Product
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        image={item.image}
                        quickaccess={item}
                    />
                ))}
                </div>
        </div>
    );
};

export default Products
