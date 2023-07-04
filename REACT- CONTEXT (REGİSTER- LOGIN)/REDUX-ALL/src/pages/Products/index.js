

import { useQuery } from 'react-query'

function Product(){
    const { isLoading, error, data } = useQuery("repoData", () =>
     fetch("http://localhost:4000/product").then((res) => res.json()));

     if(isLoading) return "loading...";

     if(error) return "an error has occurred: " + error.message;

     console.log(data)
  
    return(
        <div>
            product
        </div>
    )
}

export default Product;