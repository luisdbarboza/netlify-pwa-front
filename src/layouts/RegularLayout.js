import NavigationBar from "../components/NavigationBar/NavigationBar";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';

const Wrapper = styled.div`
  width: 100%;
`;

function RegularLayout({ children }) {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (user && user.loggedIn) {
      setRedirect(true);
    }
  }, []);

  useEffect(() => {
    if (redirect) {
      history.push('/intro');
    }
  }, [redirect]);

  return (
    <>
      <NavigationBar />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}

export default RegularLayout;

