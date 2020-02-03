import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [

  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동',
    birthday: '910228',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '최찬주',
    birthday: '121122',
    gender: '남자',
    job: '프로그래머'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '김현수',
    birthday: '910723',
    gender: '여자',
    job: '대학원생'
  }

]

function App() {
  return (
    <div>
      {customers.map(c=> {
        return (
          <Customer
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            key={c.id}
          />
        )
      })}
    </div>
  );
}

export default App;

