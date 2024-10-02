google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

let dataWeight;
let dataBMI;
let dataPercent;

function drawChart() {
    let dataWeight = google.visualization.arrayToDataTable([
        ['Date', 'Weight'],
        ['7 Sep 2024', 254],
        ['8 Sep 2024', 245.8],
        ['9 Sep 2024', 244.8],
        ['10 Sep 2024', 244.8],
        ['11 Sep 2024', 243.4],
        ['12 Sep 2024', 243.4],
        ['13 Sep 2024', 243.4],
        ['14 Sep 2024', 244.4],
        ['15 Sep 2024', 246.6],
        ['16 Sep 2024', 246.6],
        ['17 Sep 2024', 244.2],
        ['18 Sep 2024', 244.4],
        ['19 Sep 2024', 244.8],
        ['20 Sep 2024', 247.8],
        ['21 Sep 2024', 245.2],
        ['22 Sep 2024', 244.0],
        ['23 Sep 2024', 243.0],
        ['24 Sep 2024', 243.4],
        ['25 Sep 2024', 243.8],
        ['26 Sep 2024', 243.8],
        ['27 Sep 2024', 244.6],
        ['28 Sep 2024', 244.6],
        ['29 Sep 2024', 244.2],
        ['30 Sep 2024', 243.6],
        ['1 Oct 2024', 243.6],
        ['2 Oct 2024', 244.0],
        ['3 Oct 2024', 0],
        ['4 Oct 2024', 0],
        ['5 Oct 2024', 0],
        ['6 Oct 2024', 0],
        ['7 Oct 2024', 0],
        ['8 Oct 2024', 0],
        ['9 Oct 2024', 0],
        ['10 Oct 2024', 0],
        ['11 Oct 2024', 0],
        ['12 Oct 2024', 0],
        ['13 Oct 2024', 0],
        ['14 Oct 2024', 0],
        ['15 Oct 2024', 0],
        ['16 Oct 2024', 0],
        ['17 Oct 2024', 0],
        ['18 Oct 2024', 0],
        ['19 Oct 2024', 0],
        ['20 Oct 2024', 0],
        ['21 Oct 2024', 0],
        ['22 Oct 2024', 0],
        ['23 Oct 2024', 0],
        ['24 Oct 2024', 0],
        ['25 Oct 2024', 0],
        ['26 Oct 2024', 0],
        ['27 Oct 2024', 0],
        ['28 Oct 2024', 0],
        ['29 Oct 2024', 0],
        ['30 Oct 2024', 0],
        ['31 Oct 2024', 0],
    ]);

    let dataBMI = google.visualization.arrayToDataTable([
        ['Date', 'BMI'],
        ['7 Sep 2024', 29.6],
        ['8 Sep 2024', 28.7],
        ['9 Sep 2024', 26.6],
        ['10 Sep 2024', 28.5],
        ['11 Sep 2024', 28.4],
        ['12 Sep 2024', 28.4],
        ['13 Sep 2024', 28.4],
        ['14 Sep 2024', 28.5],
        ['15 Sep 2024', 28.8],
        ['16 Sep 2024', 28.8],
        ['17 Sep 2024', 28.5],
        ['18 Sep 2024', 28.5],
        ['19 Sep 2024', 28.6],
        ['20 Sep 2024', 28.9],
        ['21 Sep 2024', 28.6],
        ['22 Sep 2024', 28.1],
        ['23 Sep 2024', 28.3],
        ['24 Sep 2024', 28.4],
        ['25 Sep 2024', 28.4],
        ['26 Sep 2024', 28.4],
        ['27 Sep 2024', 28.5],
        ['28 Sep 2024', 28.5],
        ['29 Sep 2024', 28.5],
        ['30 Sep 2024', 28.4],
        ['1 Oct 2024', 28.4],
        ['2 Oct 2024', 28.4],
        ['3 Oct 2024', 0],
        ['4 Oct 2024', 0],
        ['5 Oct 2024', 0],
        ['6 Oct 2024', 0],
        ['7 Oct 2024', 0],
        ['8 Oct 2024', 0],
        ['9 Oct 2024', 0],
        ['10 Oct 2024', 0],
        ['11 Oct 2024', 0],
        ['12 Oct 2024', 0],
        ['13 Oct 2024', 0],
        ['14 Oct 2024', 0],
        ['15 Oct 2024', 0],
        ['16 Oct 2024', 0],
        ['17 Oct 2024', 0],
        ['18 Oct 2024', 0],
        ['19 Oct 2024', 0],
        ['20 Oct 2024', 0],
        ['21 Oct 2024', 0],
        ['22 Oct 2024', 0],
        ['23 Oct 2024', 0],
        ['24 Oct 2024', 0],
        ['25 Oct 2024', 0],
        ['26 Oct 2024', 0],
        ['27 Oct 2024', 0],
        ['28 Oct 2024', 0],
        ['29 Oct 2024', 0],
        ['30 Oct 2024', 0],
        ['31 Oct 2024', 0],
    ]);

    let dataPercent = google.visualization.arrayToDataTable([
        ['Date', 'Fat %', 'Water %', 'Muscle Mass %'],
        ['7 Sep 2024', 33.3, 25.0, 30.1],
        ['8 Sep 2024', 28.9, 34.9, 26.1],
        ['9 Sep 2024', 26.8, 35.0, 26.2],
        ['10 Sep 2024', 28.7, 35.1, 26.3],
        ['11 Sep 2024', 28.6, 35.3, 26.4],
        ['12 Sep 2024', 28.6, 35.3, 26.4],
        ['13 Sep 2024', 28.6, 35.3, 26.4],
        ['14 Sep 2024', 28.7, 35.1, 26.3],
        ['15 Sep 2024', 29.1, 34.7, 26.0],
        ['16 Sep 2024', 29.1, 34.7, 26.0],
        ['17 Sep 2024', 28.7, 35.1, 26.3],
        ['18 Sep 2024', 28.7, 35.1, 26.3],
        ['19 Sep 2024', 28.8, 35.0, 26.2],
        ['20 Sep 2024', 29.2, 34.5, 25.8],
        ['21 Sep 2024', 28.8, 34.9, 26.1],
        ['22 Sep 2024', 28.6, 35.2, 26.3],
        ['23 Sep 2024', 28.5, 35.4, 26.5],
        ['24 Sep 2024', 28.6, 35.3, 26.4],
        ['25 Sep 2024', 28.6, 35.2, 26.2],
        ['26 Sep 2024', 28.6, 35.2, 26.3],
        ['27 Sep 2024', 28.7, 35.0, 26.2],
        ['28 Sep 2024', 28.7, 35.0, 26.2],
        ['29 Sep 2024', 28.7, 35.1, 26.3],
        ['30 Sep 2024', 28.6, 35.2, 26.3],
        ['1 Oct 2024', 28.6, 35.2, 26.3],
        ['2 Oct 2024', 28.6, 35.2, 26.3],
        ['3 Oct 2024', 0.0, 0.0, 0.0],
        ['4 Oct 2024', 0.0, 0.0, 0.0],
        ['5 Oct 2024', 0.0, 0.0, 0.0],
        ['6 Oct 2024', 0.0, 0.0, 0.0],
        ['7 Oct 2024', 0.0, 0.0, 0.0],
        ['8 Oct 2024', 0.0, 0.0, 0.0],
        ['9 Oct 2024', 0.0, 0.0, 0.0],
        ['10 Oct 2024', 0.0, 0.0, 0.0],
        ['11 Oct 2024', 0.0, 0.0, 0.0],
        ['12 Oct 2024', 0.0, 0.0, 0.0],
        ['13 Oct 2024', 0.0, 0.0, 0.0],
        ['14 Oct 2024', 0.0, 0.0, 0.0],
        ['15 Oct 2024', 0.0, 0.0, 0.0],
        ['16 Oct 2024', 0.0, 0.0, 0.0],
        ['17 Oct 2024', 0.0, 0.0, 0.0],
        ['18 Oct 2024', 0.0, 0.0, 0.0],
        ['19 Oct 2024', 0.0, 0.0, 0.0],
        ['20 Oct 2024', 0.0, 0.0, 0.0],
        ['21 Oct 2024', 0.0, 0.0, 0.0],
        ['22 Oct 2024', 0.0, 0.0, 0.0],
        ['23 Oct 2024', 0.0, 0.0, 0.0],
        ['24 Oct 2024', 0.0, 0.0, 0.0],
        ['25 Oct 2024', 0.0, 0.0, 0.0],
        ['26 Oct 2024', 0.0, 0.0, 0.0],
        ['27 Oct 2024', 0.0, 0.0, 0.0],
        ['28 Oct 2024', 0.0, 0.0, 0.0],
        ['29 Oct 2024', 0.0, 0.0, 0.0],
        ['30 Oct 2024', 0.0, 0.0, 0.0],
        ['31 Oct 2024', 0.0, 0.0, 0.0],
    ]);

    var formatter = new google.visualization.NumberFormat({ 
        fractionDigits: 1
    });

    for (var i = 1; i < dataWeight.getNumberOfColumns(); i++) {
        formatter.format(dataWeight, i);
      }

    let options0 = {
        bars: 'horizontal',
        chart: {
            title: 'Weight',
            legend: { position: "none" },
        }
    };
    let options1 = {
        bars: 'horizontal',
        chart: {
            title: 'BMI',
            legend: { position: "none" },
        }
    };
    let options2 = {
        bars: 'horizontal',
        isStacked: 'true',
        series: {
            0:{color:'yellow'},
            1:{color:'blue'},
            2:{color:'red'},
          },
        chart: {
            title: 'Body %',
            legend: { position: "none" },
        }
    };
    let options4 = {
        chart: {
            title: 'Weight',
        }
    };


    let chart0 = new google.charts.Bar(document.getElementById('barchart0'));
    let chart1 = new google.charts.Bar(document.getElementById('barchart1'));
    let chart2 = new google.charts.Bar(document.getElementById('barchart2'));
    let chart4 = new google.charts.Bar(document.getElementById('barchart4'));

    chart0.draw(dataWeight, google.charts.Bar.convertOptions(options0));
    chart1.draw(dataBMI, google.charts.Bar.convertOptions(options1));
    chart2.draw(dataPercent, google.charts.Bar.convertOptions(options2));
    chart4.draw(dataWeight, google.charts.Bar.convertOptions(options4));
};