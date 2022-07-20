import React, {useState, useEffect} from 'react';

function App() {
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setDog(data.message);
            setLoading(true);
        });
    }, []);
    
    return (
        <div>
            {loading ? ( <img src={dog} alt="A Random Dog"></img> ) : ( <p>Loading...</p> )}
        </div>
    )
}

export default App;


