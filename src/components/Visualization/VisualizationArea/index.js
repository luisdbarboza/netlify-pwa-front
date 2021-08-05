import React, { useState, useEffect, useContext } from 'react';
import VisualizationsControls from '../VisualizationsControls';
import SVGCanvas from '../SVGCanvas';
import visualizations from 'visualizations/visualizationsData';
import ArrayControls from 'components/Visualization/ArrayControls';
import StackControls from 'components/Visualization/StackControls';
import QueueControls from 'components/Visualization/QueueControls';
import LinkedListControls from 'components/Visualization/LinkedListControls';
import FullArrayVisualization from 'components/Visualization/FullArrayVisualization';
import { VisualizationContext } from 'context/VisualizationContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    display: ${({ selectedTab }) =>
      selectedTab === 'Visualización' ? 'flex' : 'none'};
  }
`;

const VisualizationArea = React.memo(
  ({
    visualizationData,
    selectedTab,
    selectedVisualization,
    setSelectedVisualization,
  }) => {
    const { dispatchVisualization } = useContext(VisualizationContext);
    const [inputData, setInputData] = useState(null);
    const [specialData, setSpecialData] = useState(null);
    const [initialize, setInitialize] = useState(true);
    const [showControls, setShowControls] = useState(false);
    let isArray = false;
    let isFullArray = false;
    let isStack = false;
    let isQueue = false;
    let isLinkedList = false;

    useEffect(() => {
      if (inputData && specialData && initialize) {
        const { algorithm, keyframe, transition } = !Array.isArray(
          visualizationData
        )
          ? visualizations[visualizationData.name]
          : visualizations[visualizationData[selectedVisualization].name];

        dispatchVisualization({
          type: 'SET_VISUALIZATION',
          lesson: !Array.isArray(visualizationData)
            ? visualizationData.name
            : visualizationData[selectedVisualization].name,
          currentState: inputData,
          specialData: specialData,
          algorithm: algorithm,
          visualization: keyframe,
          updateVisualization: transition,
        });

        setInitialize(false);
      }
    }, [inputData, specialData, initialize]);

    if (Array.isArray(visualizationData)) {
      switch (visualizationData[selectedVisualization].name) {
        case 'bubble':
        case 'insertion':
        case 'selection':
        case 'merge':
        case 'linearSearch':
        case 'binarySearch':
          isArray = true;
          break;
      }
    } else {
      switch (visualizationData.name) {
        case 'stack':
          isStack = true;
          break;
        case 'queue':
          isQueue = true;
          break;
        case 'linkedList':
          isLinkedList = true;
        case 'array':
          isFullArray = true;
          break;
      }
    }

    return (
      <Wrapper selectedTab={selectedTab}>
        <SVGCanvas />
        {!showControls && isArray && (
          <ArrayControls
            visualizationData={visualizationData}
            selectedVisualization={selectedVisualization}
            setSelectedVisualization={setSelectedVisualization}
            setInputData={setInputData}
            setShowControls={setShowControls}
            initialSpecial={
              !Array.isArray(visualizationData)
                ? visualizationData.special
                : visualizationData[selectedVisualization].special
            }
            setSpecialData={setSpecialData}
            setInitialize={setInitialize}
            type={
              !Array.isArray(visualizationData)
                ? visualizationData.name
                : visualizationData[selectedVisualization].name
            }
          />
        )}
        {isStack && (
          <StackControls
            setInputData={setInputData}
            initialSpecial={visualizationData.special}
            setInitialize={setInitialize}
            setSpecialData={setSpecialData}
          />
        )}
        {isQueue && (
          <QueueControls
            setInputData={setInputData}
            initialSpecial={visualizationData.special}
            setInitialize={setInitialize}
            setSpecialData={setSpecialData}
          />
        )}
        {isLinkedList && (
          <LinkedListControls
            setInputData={setInputData}
            initialSpecial={visualizationData.special}
            setInitialize={setInitialize}
            setSpecialData={setSpecialData}
          />
        )}
        {isFullArray && (
          <FullArrayVisualization
            setInputData={setInputData}
            initialSpecial={visualizationData.special}
            setInitialize={setInitialize}
            setSpecialData={setSpecialData}
          />
        )}
        {showControls && !isStack && (
          <VisualizationsControls setShowControls={setShowControls} />
        )}
      </Wrapper>
    );
  }
);

export default VisualizationArea;
