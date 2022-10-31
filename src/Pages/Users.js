import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const getUSER = async (count) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://randomuser.me/api/?page=${count}&results=10`
      );
      const result = await response.data;
      setUser(result?.results);
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError('Something went wrong');
      setLoading(false);
    }
  };

  useEffect(() => {
    getUSER(currentPage);
  }, [currentPage]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

  const Pagination = ({ usersPerPage, totalUsers }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
      pageNumbers.push(i);
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        {loading ? (
          <h1>loading...</h1>
        ) : (
          user?.map((data, i) => (
            <div key={i} style={{ margin: '20px' }}>
              <img
                src={data?.picture?.large}
                alt=""
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
              <h3>
                {data?.name.title} {data?.name.first} {data?.name.last}
              </h3>
              <h3>{data?.email}</h3>
              <h3>{data?.phone}</h3>
            </div>
          ))
        )}
      </div>
      <div>
        <button onClick={() => setCurrentPage((prevCount) => prevCount - 1)}>
          prev
        </button>
        <button onClick={() => setCurrentPage((prevCount) => prevCount + 1)}>
          next
        </button>
      </div>
      {error && <h4>{error}</h4>}
    </div>
  );
};
export default User;
