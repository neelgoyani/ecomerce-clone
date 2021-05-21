import React from 'react';
import './home.css';
import poster from './logo/amazon-home.jpg';
import Product from './Product';
import product from './logo/amazon-product.jpg';


const Home = ()=>{

    
    return(
        <>
            <div className = 'home'>
                <img src = {poster} className = 'home_poster' />

                <div className = 'home_product first_row'>
                    <Product id = '11' name = 'Apple iphone 11 pro' price = {43999} rating = {5} img = {product} />
                    <Product id = '22' name = 'Motorola Moto G9' price = {9999} rating = {3} img = {'https://i.gadgets360cdn.com/products/large/moto-g9-650x800-1598251072.jpg'} />
                </div>
                <div className = 'home_product first_row'>
                    <Product id = '33' name = 'Apple Smart watch series 6' price = {32999} rating = {3} img = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDafrpScGeIaDUmbMObcoqsbpZM_F4-UUXiA&usqp=CAU'} />
                    <Product id = '44' name = 'Mi Gaming Laptop' price = {49999} rating = {4} img = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfzLmC4Rg0UE_nfCHAW3plVHctLmNjKLhtA&usqp=CAU'} />
                    <Product id = '55' name = 'Apple Air pods' price = {18999} rating = {2} img = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczTYYQbyYSRO1Ld-UvHv11iI5x-64mcQS0w&usqp=CAU'} />

                </div>
                <div className = 'home_product first_row'>
                    <Product id = '66' name = 'Mi Tv ' price = {8999} rating = {1} img = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvudt3-dRw9oLnqnCA6IGpw3SBsQzMWmM-A&usqp=CAU'} />
                </div>

            </div>

            


        </>
    )
}

export default Home;