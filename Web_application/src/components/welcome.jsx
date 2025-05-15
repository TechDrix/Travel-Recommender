import image from '../assets/wlc_travel.jpg';
import styled,{keyframes} from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
    const navigate = useNavigate();
    const buttonHandler = () => {
        navigate('/predict');
    };
    return (
        <>
            <Container>
                 <p>We are here to help you find the best travel destinations based on your preferences.Explore our features and start planning your next adventure!
                    <Button onClick={buttonHandler}>Get Started</Button>
                 </p>
                <img src={image} alt="Welcome" style={{ width: '80%', height: 'auto' }} />
            </Container>

        </>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    border-radius: 8px; /* Rounded corners */
    padding: 20px; /* Add padding inside the container */
    width: 100%; /* Increased width */
    img {
        flex: 1;
        max-width: 50%;
        height: auto;
        margin-right: 20px; /* Space between image and text */
    }

    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    p {
        text-align: left;
        font-size: 1.5rem; /* Base font size */
        color: black;
        margin-bottom: 10px; /* Space between paragraphs */
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        img {
            max-width: 80%;
            margin-right: 0;
            margin-bottom: 20px; /* Space below image */
        }

        div {
            align-items: center;
        }

        p {
            text-align: center;
            width: 90%; /* More width on smaller devices */
            padding: 1rem;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        p {
            width: 95%;
            padding: 0.8rem;
            font-size: 0.85rem;
        }
    }
`;

const moveUp = keyframes`
  from {
    top: 7px;
    left: 7px;
  }
  to {
    top: 0;
    left: 0;
  }
`;

const Button = styled.button`
 font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  user-select: none;
  touch-action: manipulation;
  margin:10px;
    

  &:after {
    content: "";
    background-color:rgb(0, 212, 21);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 7px;
    left: 7px;
    z-index: -2;
    transition: 0.2s;
  }

  &:hover:after {
    animation: ${moveUp} 0.2s forwards;
  }

  @media (min-width: 768px) {
   
    padding: 13px 50px;
  }
`;