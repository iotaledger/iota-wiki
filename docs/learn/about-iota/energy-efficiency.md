---
id: energy-efficiency
title: Energy efficiency
description: Transactions in the IOTA Network are more Energy efficient than in
  any other Cryptocurrency currently existing.
---

# Energy efficiency

This page explains the energy efficiency experienced in IOTA.

## Complications with measuring transactions.

Like with all cryptocurrencies this is a complicated question to answer, for example you might find some users say one Bitcoin transaction can require up to 1700 kWh whereas others might put it as low as 1000 kWh. You also have those who think measuring transaction energy output is unfair with Blockchain based cryptocurrencies as this involves taking the energy consumption of an entire block and dividing by the amount of transactions taking place in each block. Luckily this is simplified as IOTA doesn't use blocks removing steps needed to calculate energy consumption.

## So how energy efficient is it?

The IOTA foundation has given their own estimates on this very question, a detailed blog of what they've found can be accessed [here](https://blog.iota.org/internal-energy-benchmarks-for-iota/). In the opening TLDR statement IOTA claims "a Raspberry Pi 4 node uses just over a millionth of a kWh per IOTA message/transaction, including proof-of-work costs." however these results vary depending on devices used, nodes used, and many other factors. Since the average user won't be using a Raspberry Pi to create transactions it's a good idea to measure energy consumption on devices most users would be using. A researcher by the name of Amir Abbaszadeh Sori [did just this](https://medium.com/@a.abbaszadeh.s/measuring-iota-pow-s-energy-consumption-and-comparing-with-other-payment-systems-413f4de50274) in 2019 when he used three mid-range smartphones to test it, the results came to an average of 0.00011 kWh. Keep in mind however these tests were conducted years prior to the former test by the IOTA foundation and on a separate wallet than the current-day Firefly wallet, IOTA estimates during the Chrysalis migration alone IOTA saw anywhere from a 33% to 95% reduction in energy usage.

## How does this compare to other cryptocurrencies?

Many cryptocurrencies have released their own varying numbers, to keep things simple averages will be taken of the various different sources listed below and the conservative estimate of 0.00011 kWh will be chosen for IOTA

    <!DOCTYPE html>
    <html>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
    <body>

    <canvas id="myChart" style="width:100%;max-width:600px"></canvas>

    <script>
    var xValues = ["Cardano", "Dogecoin", "XRP", "Nano", "IOTA"];
    var yValues = [0.5479, 0.12, 0.023, 0.000112, 0.00011];
    var barColors = ["red", "green","blue","orange","brown"];

    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Energy consumption of cryptocurrencies"
        }
      }
    });
    </script>

    </body>
    </html>

[Source](https://www.trgdatacenters.com/most-environment-friendly-cryptocurrencies/)

***
