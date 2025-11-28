const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(`
    <html>
    <head>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          background: linear-gradient(135deg, #4b67ff, #7f59ff);
          color: #fff;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px 60px;
          border-radius: 20px;
          backdrop-filter: blur(12px);
          text-align: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          animation: fadeIn 1.2s ease-out;
        }

        .title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 22px;
          opacity: 0.85;
          margin-bottom: 20px;
        }

        .quote {
          font-size: 18px;
          font-style: italic;
          opacity: 0.9;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="title">Nagutom Venson C.</div>
        <div class="subtitle">ITBA-4101</div>
        <div class="quote">Attitude &gt; Intelligence</div>
      </div>
    </body>
    </html>
  `);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
