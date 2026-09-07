import React from 'react';
import FoodsCards from '../Components/FoodsCards';
const getFoods = async () => {
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
    const data = await res.json();
    // console.log(data);
    return data.foods
}
// getFoods()
const FoodsPage = async () => {
    const foods = await getFoods();
    // console.log(foods);
    return (
        <div className='max-w-7xl mx-auto'>
            {/* title */}
            <h2 className='text-2xl font-bold text-center my-5'>All {(foods.length)} Foods Found</h2>
            {/* Card showing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* {foods.map((food) => (
                    <FoodsCards key={food.id} food={food} />
                ))} */}
                {
                    foods.map(food=><FoodsCards key={food.id} food={food}></FoodsCards>)
                }
            </div>
        </div>
    );
};

export default FoodsPage;