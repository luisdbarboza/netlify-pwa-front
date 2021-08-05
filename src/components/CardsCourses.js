import React from 'react';
import { useHistory, useParams } from 'react-router';
import { FcReadingEbook, FcStart, FcPuzzle } from 'react-icons/fc';
import styled from 'styled-components';
import 'styles/CardCourse.css';

const Div = styled.div`
  display: flex;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const topicOptions = [
  {
    id: 'leccion',
    title: 'Lección',
    icon: <FcReadingEbook />,
    description:
      'Comienza con la documentación necesaria para entender sobre este tópico.',
  },
  {
    id: 'visualizacion',
    title: 'Visualización',
    icon: <FcStart />,
    description:
      'Prueba con visualizaciones y lectura de código para mejorar lo aprendido.',
  },
  {
    id: 'ejercicios',
    title: 'Ejercicios',
    icon: <FcPuzzle />,
    description: 'Ponte a prueba con nuestros ejercicios.',
  },
];

const CardsCourses = ({ course }) => {
  console.log(course);

  const routeParams = useParams();
  const history = useHistory();
  const { category, topic } = routeParams;
  let hasVisualization = false;
  let hasChallenges = false;

  switch (topic) {
    case 'Listas enlazadas':
    case 'Pilas':
    case 'Colas':
    case 'Algoritmos de ordenamiento':
    case 'Algoritmos de búsqueda':
    case 'Arreglos':
      hasVisualization = true;
      hasChallenges = true;
      break;
    case 'Grafos':
    case 'Tablas hash':
    case 'Árboles':
    case 'Algoritmos recursivos':
      hasChallenges = true;
  }

  return (
    <Div>
      <div className='card-contenedor'>
        <div className='card-title'>
          <p className='item-icon'>{topicOptions[0].icon}</p>
          <p className='item-title'>{topicOptions[0].title}</p>
        </div>
        <div className='card-description'>{topicOptions[0].description}</div>
        <div
          onClick={() => {
            const path = `/${category}/${topic}/${topicOptions[0].id}`;

            history.push(path);
          }}
        >
          <button className='card-button'>Empezar</button>
        </div>
      </div>
      {hasVisualization && (
        <div className='card-contenedor'>
          <div className='card-title'>
            <p className='item-icon'>{topicOptions[1].icon}</p>
            <p className='item-title'>{topicOptions[1].title}</p>
          </div>
          <div className='card-description'>{topicOptions[1].description}</div>
          <div
            onClick={() => {
              const path = `/${category}/${topic}/${topicOptions[1].id}`;

              history.push(path);
            }}
          >
            <button className='card-button'>Empezar</button>
          </div>
        </div>
      )}
      {hasChallenges && (
        <div className='card-contenedor'>
          <div className='card-title'>
            <p className='item-icon'>{topicOptions[2].icon}</p>
            <p className='item-title'>{topicOptions[2].title}</p>
          </div>
          <div className='card-description'>{topicOptions[2].description}</div>
          <div
            onClick={() => {
              const path = `/${category}/${topic}/${topicOptions[2].id}`;

              history.push(path);
            }}
          >
            <button className='card-button'>Empezar</button>
          </div>
        </div>
      )}
    </Div>
  );
};

export default CardsCourses;
