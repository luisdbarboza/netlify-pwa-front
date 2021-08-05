import React, { useState, useEffect, useContext } from 'react';
import AppLayout from 'layouts/AppLayout';
import { AuthContext } from 'context/AuthContext';
import { SERVER_URL } from '../../constants';
import Swal from 'sweetalert2';
import './UserPage.scss';

const UserPage = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const { user, dispatchUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = JSON.stringify({
        name: userData.username,
        password: userData.password,
      });
      const token = localStorage.getItem('algothinker_token');

      const response = await fetch(`${SERVER_URL}/users`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          token,
        },
        body,
      });

      const data = await response.json();

      if (data.ok) {
        if (
          userData.username.trim().length > 0 ||
          userData.password.trim().length > 0
        ) {
          await Swal.fire(
            '¡Muy bien!',
            'Los datos han sido actualizados',
            'success'
          );
        }

        if (userData.username.trim().length > 0) {
          dispatchUser({
            type: 'UPDATE_DATA',
            username: userData.username,
          });
        }
      }
    } catch (error) {
      await Swal.fire({
        title: 'Error',
        text: 'Ha ocurrido un error con el servidor',
        icon: 'error',
      });
    }
  };

  return (
    <AppLayout>
      <div className='contenedor_usuario'>
        <div className='usuario_left'>
          <div className='usuario_img'>
            <div>
              <img
                src='./assets/img/usuario.jpg'
                className='usuario'
                alt='Usuario'
              />
            </div>
            <div>
              <h2>¡Hola {user.fullname}!</h2>
            </div>
          </div>
          <div className='usuario_info'>
            <h2>Información general</h2>
            <p>Nombre: {user.fullname}</p>
            <p>Correo: {user.email}</p>
          </div>
        </div>
        <form className='usuario_right' onSubmit={handleSubmit}>
          <h2>Nombre de usuario</h2>
          <input
            className='input'
            // required
            value={userData.username}
            onChange={(e) => {
              setUserData({
                ...userData,
                username: e.target.value,
              });
            }}
            placeholder='Nombre de usuario'
          />
          <h2>Contraseña</h2>
          <input
            className='input'
            // required
            value={userData.password}
            onChange={(e) => {
              setUserData({
                ...userData,
                password: e.target.value,
              });
            }}
            placeholder='Contraseña: '
          />
          <button className='button'>Cambiar datos</button>
        </form>
      </div>
    </AppLayout>
  );
};

export default UserPage;
