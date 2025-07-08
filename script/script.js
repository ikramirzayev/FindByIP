async function getIPInfo() {
      const ip = document.getElementById("ip").value.trim();
      const resultBox = document.getElementById("result");

      if (!ip) {
        resultBox.textContent = "Lütfen bir IP adresi girin.";
        return;
      }

      try {
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await response.json();

        if (data.error) {
          resultBox.textContent = `Hata: ${data.reason}`;
        } else {
          const info = `IP: ${data.ip}
        Country: ${data.country_name} (${data.country})
        City: ${data.city}
        Region: ${data.region}
        Continent: ${data.continent_code}
        Postal Code: ${data.postal}
        Latitude, Longitude: ${data.latitude}, ${data.longitude}
        Time Zone: ${data.timezone}
        ISP (Org): ${data.org}
                `;
          resultBox.textContent = "\t"+info.trim();
        }
      } catch (error) {
        resultBox.textContent = "API error: " + error.message;
      }
    }