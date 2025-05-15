import image from '../assets/input.png';
import styled from 'styled-components';

export default function Content() {
    return (
        <>
         <h2>How to used the travel Recommendation System?</h2>
            <Container>
               
                <div>
                    <p>1. Enter your <strong>budget range</strong> to get recommendations that fit your spending plan.</p>
                    <p>2. Select your preferred <strong>weather</strong> for the destination.</p>
                    <p>3. Choose your desired <strong>fantasy type</strong> (e.g., adventure, relaxation, culture).</p>
                    <p>4. Indicate any <strong>events</strong> you are interested in attending during your trip.</p>
                </div>
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
