import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AppLayout from 'layouts/AppLayout';
import VisualizationTopbar from 'components/Visualization/VisualizationTopbar';
import VisualizationArea from 'components/Visualization/VisualizationArea';
import CodeEditor from 'components/Visualization/CodeEditor';
import { SERVER_URL } from '../../constants';

const MainContent = styled.div`
  display: flex;
  height: calc(100vh - 80px);

  @media (max-width: 768px) {
    display: flex;
    height: calc(100vh - 130px);
  }
`;

const Visualization = () => {
  const params = useParams();
  const topic = params.topic;
  const [visualizationData, setVisualizationData] = useState({
    loading: true,
    data: {},
    multiple: false,
  });
  const [selectedVisualization, setSelectedVisualization] = useState(0);//para temas con multiples visualizaciones

  useEffect(async () => {
    const response = await fetch(`${SERVER_URL}/topics/${topic}/visualizacion`);
    const data = await response.json();

    if (data.ok) {
      const visualizationData = data.topicData.visualization_data;

      setVisualizationData({
        loading: false,
        data: visualizationData,
        multiple: Array.isArray(visualizationData),
      });
    }
  }, []);

  const [selectedTab, setSelectedTab] = useState('Visualización');

  return (
    <AppLayout>
      <VisualizationTopbar
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <MainContent>
        {!visualizationData.loading ? (
          <VisualizationArea
            visualizationData={visualizationData.data}
            selectedTab={selectedTab}
            selectedVisualization={selectedVisualization}
            setSelectedVisualization={setSelectedVisualization}
          />
        ) : (
          <div
            style={{
              flex: '1 1 50%',
            }}
          />
        )}
        <CodeEditor
          fetchedData={visualizationData}
          selectedTab={selectedTab}
          selectedVisualization={selectedVisualization}
        />
      </MainContent>
    </AppLayout>
  );
};

export default Visualization;
