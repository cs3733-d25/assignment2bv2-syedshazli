import React from 'react';
import List1 from './list1';
import Table1 from './table1';
import Form from './form1';

const Basketball: React.FC = () => {
    return (
        <div>
            <h1>Doanh Phung - Basketball</h1>
            <img src="public/basketball.jpeg" alt="Basketball Banner" width="640" />
            <p>Hi, I'm Doanh Phung, a 6' international student who knows how to code. My current max bench PR is 185lbs, and I'm aiming for 225lbs by the end of D term.</p>
            <p>Basketball is a brilliant sport that brings people together from all over the world. It requires skill, strategy, and teamwork, making it one of the most dynamic sports ever.</p>

            <List1 />
            <Table1 />
            <Form />
        </div>
    );
}

export default Basketball;
