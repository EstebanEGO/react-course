import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
const product = {
  id: '1',
  title: 'Coffee 1',
  image: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <ProductCard  
              product={ product } 
              className='bg-dark'
            >
              <ProductCard.Image className='custom-image' />                
              <ProductCard.Title className='text-white' />
              <ProductCard.Buttons className='custom-buttons'/>
            </ProductCard>
            <ProductCard  
              product={ product } 
              className='bg-dark'
            >
              <ProductImage className='custom-image' />                
              <ProductTitle className='text-white' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
            <ProductCard  
              product={ product }
            >
              <ProductImage />                
              <ProductTitle />
              <ProductButtons />
            </ProductCard>
        </div>
    </div>    
  )
}
