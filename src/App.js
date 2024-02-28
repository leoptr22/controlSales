import React from 'react';

function App() {
  // URL pública de visualización de tu hoja de cálculo
  const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSiUuGVT49ezqWS6Xdr0ln9PI9Zv2eZtrbs1xzxbbm8uJKSEPw_MB3gVBlVQTe8xA/pubhtml';

  return (
    <div className="header-section" style={{ position: 'fixed', top: 0, width: '100%', background: 'white', padding: '10px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ width: '70%', marginRight: '20px' }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>ANÁLISIS DE SALES FUERA DE ESPECIFICACIÓN - SEGUIMIENTO</h1>
        <iframe title="" src={SPREADSHEET_URL} width="100%" height="600" frameBorder="0" style={{ marginTop: '20px' }} />
      </div>
      <div style={{ width: '20%' }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCpzVAAi5cJY_Xq97eRfWR6ryTqtLzMc1Q3hPz5N_DnmfKmFLaElvBeBnCP4BYG3Ui5E&usqp=CAU"
          alt="Imagen"
          style={{ width: '80%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
      </div>
    </div>
  );
}

export default App;
