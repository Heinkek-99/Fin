async function getPrediction() {
    const url = "http";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      alert(JSON.stringify('https://eb23-2001-861-3d45-c0-114a-3c3f-9aab-204a.ngrok-free.app'));
    } catch (error) {
      console.error(error.message);
    }
  }

  getPrediction()