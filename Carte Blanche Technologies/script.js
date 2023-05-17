document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const chartContainer = document.getElementById('chartContainer');
  
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const csvData = e.target.result;
        const data = parseCSV(csvData);
  
        // Process and visualize the data using Plotly.js
        const deviceNames = data[0].slice(1);
        const parameters = data.slice(1).map((row) => row[0]);
        const values = data.slice(1).map((row) => row.slice(1).map(Number));
  
        const traces = deviceNames.map((deviceName, index) => ({
          x: parameters,
          y: values.map((row) => row[index]),
          type: 'bar',
          name: deviceName
        }));
  
        const layout = {
          title: 'Data Visuals',
          xaxis: {
            title: 'Parameters'
          },
          yaxis: {
            title: 'Values'
          }
        };
  
        Plotly.newPlot(chartContainer, traces, layout);
      };
  
      reader.readAsText(file);
    });
  
    function parseCSV(csvData) {
      const rows = csvData.split('\n');
      return rows.map((row) => row.split(','));
    }
  });
  
