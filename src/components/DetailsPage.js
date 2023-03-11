import React from 'react';
import { useParams } from 'react-router-dom';
const DetailsPage = () => {
    const params=useParams();
    return (
        <div>
        <h1 style={{margin:100,opacity:0.3}}>{`DetailsPage- ${params.id}`}</h1>
        </div>
    );
};

export default DetailsPage;