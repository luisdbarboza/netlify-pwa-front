import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import { VisualizationContext } from 'context/VisualizationContext';
import { executePartially } from '../functions';
import { MyArray } from '../dataStructures';
import Button from '../../Commons/styled/Button';

const Wrapper = styled.div`
  border-top: 0.5px solid gray;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #023e7d;
`;

const Input = styled.input`
  font-family: 'Roboto';
  width: 200px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.2rem;
  height: 35px;
  margin: 0.2rem;
  width: 100%;
`;

const FormWrapper = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ActionButton = styled(Button)`
  background-color: #001845;
  justify-content: center;
`;

const FullArrayControls = ({
  setInputData,
  initialSpecial,
  setInitialize,
  setSpecialData,
}) => {
  const [inputs, setInputs] = useState({ value: '', index: '', action: '' });
  const [submitAction, setSubmitAction] = useState(false);
  const { visualizationState, dispatchVisualization } =
    useContext(VisualizationContext);
  const { current } = visualizationState;

  useEffect(() => {
    let exampleArray = new MyArray();
    setInputData(exampleArray);
    setSpecialData(initialSpecial);
    setInitialize(true);
  }, []);

  useEffect(() => {
    if (submitAction) {
      executePartially('forward', dispatchVisualization, inputs);
      setSubmitAction(false);
    }
  }, [submitAction]);

  return (
    <Wrapper>
      {current && (
        <FormWrapper>
          <Input
            onChange={(e) => setInputs({ ...inputs, value: e.target.value })}
            value={inputs.value}
            placeholder='Valor a insertar en el arreglo'
            type='number'
            required
          />
          <Input
            onChange={(e) => setInputs({ ...inputs, index: e.target.value })}
            value={inputs.index}
            placeholder='Indice del elemento'
            type='number'
            min={0}
            max={current.length}
            required
          />
          <ButtonsGrid>
            <ActionButton
              onClick={() => {
                if (inputs.value.trim().length > 0) {
                  setInputs({ ...inputs, action: 'insert' });
                  setSubmitAction(true);
                }
              }}
            >
              Insertar
            </ActionButton>
            <ActionButton
              disabled={current.length === 0}
              onClick={() => {
                if (
                  inputs.index.trim().length > 0 &&
                  Number(inputs.index) >= 0 &&
                  Number(inputs.index) < current.length
                ) {
                  setInputs({ ...inputs, action: 'delete' });
                  setSubmitAction(true);
                }
              }}
            >
              Borrar
            </ActionButton>
            <ActionButton
              onClick={() => {
                if (inputs.value.trim().length > 0) {
                  setInputs({ ...inputs, action: 'push' });
                  setSubmitAction(true);
                }
              }}
            >
              Push
            </ActionButton>
            <ActionButton
              disabled={current.length === 0}
              onClick={() => {
                setInputs({ ...inputs, action: 'pop' });
                setSubmitAction(true);
              }}
            >
              Pop
            </ActionButton>
          </ButtonsGrid>
        </FormWrapper>
      )}
    </Wrapper>
  );
};

export default FullArrayControls;
